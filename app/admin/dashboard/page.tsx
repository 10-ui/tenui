"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";
import { fetchViews } from "@/utils/datafetch";

interface View {
  id: number;
  email: string;
  name: string;
  message: string;
  created_at: Date;
}

export default function Dashboard() {
  const [currentUser, setCurrentUser] = useState<string>("");
  const [views, setViews] = useState<View[]>([]); // View 型の配列として初期化

  const getCurrentUser = async () => {
    try {
      const { data, error } = await supabase.auth.getSession();
      if (error) throw error;

      if (data.session) {
        const { data: userData, error: userError } =
          await supabase.auth.getUser();
        if (userError) throw userError;

        if (userData.user && userData.user.email) {
          setCurrentUser(userData.user.email);
        } else {
          throw new Error(
            "getCurrentUser: 'user' or 'user.email' is null or undefined",
          );
        }
      }
    } catch (err: any) {
      console.error("getCurrentUser error:", err.message); // エラーメッセージの詳細化
    }
  };

  const loadViews = async () => {
    try {
      const fetchedViews = await fetchViews();
      if (!fetchedViews)
        throw new Error("fetchViews returned null or undefined");

      setViews(fetchedViews); // ソートはfetchViews関数内で行われているため、ここでのソートは不要
    } catch (err: any) {
      console.error("loadViews error:", err.message); // エラーメッセージの詳細化
    }
  };

  useEffect(() => {
    getCurrentUser();
    loadViews();
  }, []);

  return (
    <div className='flex min-h-screen flex-1 flex-col rounded-3xl bg-main p-24'>
      {!currentUser ? (
        <div suppressHydrationWarning={false}>
          ログインを行ってからダッシュボードにアクセスしてください。
        </div>
      ) : (
        <>
          <div></div>
          <div suppressHydrationWarning={true} className='flex flex-col'>
            {currentUser} でログインしています。
            <ul>
              {views.map((view) => (
                <li key={view.id}>
                  <strong>{view.message}</strong> (
                  {new Date(view.created_at).toLocaleString()})
                  <br />
                  {view.name} ({view.email})
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
