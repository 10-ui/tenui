"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/utils/supabase";
import { fetchViews } from "@/utils/datafetch";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

interface View {
  id: number;
  email: string;
  name: string;
  message: string;
  created_at: Date;
}

export default function Dashboard() {
  const router = useRouter();
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
          <div className='mb-10 flex items-center justify-between gap-2'>
            <h2 className='text-4xl font-bold'>Dashboard</h2>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage src='' />
                  <AvatarFallback>{currentUser.slice(0, 2)}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Logged in as</DropdownMenuLabel>
                <DropdownMenuLabel> {currentUser}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => {
                    supabase.auth.signOut();
                    router.push("/");
                  }}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div suppressHydrationWarning={true} className='flex flex-col'>
            {views.map((view) => (
              <Card key={view.id}>
                <CardHeader>
                  <CardTitle>{view.message.slice(0, 10)}</CardTitle>
                  <CardDescription>
                    {new Date(view.created_at).toLocaleString()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{view.message}</p>
                </CardContent>
                <CardFooter>
                  <p>
                    <Link href={`mailto:${view.email}`}>{view.name}様</Link>
                  </p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
