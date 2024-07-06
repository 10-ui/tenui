"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { supabase } from "@/utils/supabase";
import Link from "next/link";
import { lc } from "@/utils/tw-lc";

export default function Signup() {
  const router = useRouter();
  const [message, setMessage] = useState<[string, boolean]>(["", false]);
  const signupSchema = z.object({
    email: z
      .string()
      .email({ message: "有効なメールアドレスを入力してください" }),
    password: z.string().min(7, { message: "パスワードは7文字以上です" }),
  });

  const onSubmit = async (signupData: z.infer<typeof signupSchema>) => {
    setMessage(["", false]);
    const { data, error } = await supabase.auth.signUp({
      email: signupData.email,
      password: signupData.password,
    });
    if (error) {
      setMessage([error.message, false]);
    }
    console.log(data);
    setMessage([
      "登録に成功しました。3秒後にログインページへ遷移します。メールアドレス認証のメールをご確認ください。",
      true,
    ]);
    setTimeout(() => {
      router.push("/admin/u/login");
    }, 3000);
  };

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <div className='flex min-h-screen flex-1 flex-col items-center justify-center rounded-3xl bg-main p-24'>
      {message[1] && (
        <p className={lc(message[1] ? "text-green-300" : "text-red-300")}>
          {message[0]}
        </p>
      )}
      <div className='w-2/5'>
        <Form {...form}>
          <h3 className='mb-4 text-xl font-medium'>管理者登録</h3>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} className='w-full' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type='password' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex w-full justify-center'>
              <Button type='submit' className='w-3/5'>
                Signup
              </Button>
            </div>
          </form>
        </Form>
        <Separator className='my-6' />
        <div className='space-y-4'>
          <div className='flex w-full justify-center'>
            <Button
              className='w-3/5 underline underline-offset-4 hover:bg-transparent'
              variant='ghost'
              asChild>
              <Link href='/admin/u/login'>管理者ログインはこちら</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
