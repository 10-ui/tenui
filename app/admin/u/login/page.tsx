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

export default function Login() {
  const router = useRouter();
  const [message, setMessage] = useState<string>("");
  const loginSchema = z.object({
    email: z
      .string()
      .email({ message: "有効なメールアドレスを入力してください" }),
    password: z.string().min(1, { message: "パスワードを入力してください" }),
  });

  const onSubmit = async (loginData: z.infer<typeof loginSchema>) => {
    setMessage("");
    const { data, error } = await supabase.auth.signInWithPassword({
      email: loginData.email,
      password: loginData.password,
    });
    if (error) {
      setMessage(error.message);
      throw new Error(error.message);
    }
    router.push("/admin/dashboard");

    console.log(data);
  };
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <div className='flex min-h-screen flex-1 flex-col items-center justify-center rounded-3xl bg-main p-24'>
      {message && <p className='text-red-500'>{message}</p>}
      <div className='w-2/5'>
        <Form {...form}>
          <h3 className='mb-4 text-xl font-medium'>管理者ログイン</h3>
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
                Login
              </Button>
            </div>
          </form>
        </Form>
        <Separator className='my-6' />
        <div className='space-y-4'>
          <div className='flex w-full justify-center'>
            <Button className='w-3/5' variant='outline' asChild>
              <Link href='/admin/u/reset'>パスワードを忘れた方</Link>
            </Button>
          </div>
          <div className='flex w-full justify-center'>
            <Button
              className='w-3/5 underline underline-offset-4 hover:bg-transparent'
              variant='ghost'
              asChild>
              <Link href='/admin/signup'>新規管理者登録はこちら</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
