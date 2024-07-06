"use client";

import { useState } from "react";
import { supabase } from "@/utils/supabase";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const resetRequestSchema = z.object({
  email: z
    .string()
    .email({ message: "有効なメールアドレスを入力してください" }),
});
export default function ResetRequest() {
  const [message, setMessage] = useState<[string, boolean]>(["", false]);
  const onSubmit = async (
    resetRequestData: z.infer<typeof resetRequestSchema>,
  ) => {
    setMessage(["", false]);
    const { data, error } = await supabase.auth.resetPasswordForEmail(
      resetRequestData.email,
      {
        redirectTo:
          process.env.NEXT_PUBLIC_BASE_URL + "/admin/u/reset-password",
      },
    );
    if (error) {
      setMessage([error.message, false]);
      throw new Error(error.message);
    }
    setMessage(["パスワード再設定メールを送信しました", true]);
    console.log(data);
  };
  const form = useForm<z.infer<typeof resetRequestSchema>>({
    resolver: zodResolver(resetRequestSchema),
    defaultValues: {
      email: "",
    },
  });
  return (
    <div className='flex min-h-screen flex-1 flex-col items-center justify-center rounded-3xl bg-main p-24'>
      {message[0] && (
        <p className={`${message[1] ? "text-green-500" : "text-red-500"}`}>
          {message[0]}
        </p>
      )}
      <div className='w-2/5'>
        <Form {...form}>
          <h3 className='mb-4 text-xl font-medium'>
            パスワード再設定メールを送信する
          </h3>
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
            <div className='flex w-full justify-center'>
              <Button type='submit' className='w-3/5'>
                パスワード再設定メールを送信
              </Button>
            </div>
          </form>
        </Form>
        <Separator className='my-6' />
        <div className='space-y-4'>
          <div className='flex w-full justify-center'>
            <Button className='w-3/5' variant='outline' asChild>
              <Link href='/admin/u/login'>ログイン画面へ</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
