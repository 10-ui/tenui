"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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

const resetPasswordSchema = z.object({
  password: z
    .string()
    .min(7, { message: "パスワードは7文字以上で入力してください" }),
});
export default function ResetPassword() {
  const [message, setMessage] = useState("");
  const router = useRouter();
  const onSubmit = async (
    resetPasswordData: z.infer<typeof resetPasswordSchema>,
  ) => {
    setMessage("");
    const { data, error } = await supabase.auth.updateUser({
      password: resetPasswordData.password,
    });
    if (error) {
      setMessage(error.message);
      throw new Error(error.message);
    }
    router.push(process.env.NEXT_PUBLIC_BASE_URL + "/admin/u/login");
    console.log(data);
  };
  const form = useForm<z.infer<typeof resetPasswordSchema>>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
    },
  });
  return (
    <div className='flex min-h-screen flex-1 flex-col items-center justify-center rounded-3xl bg-main p-24'>
      {message && <p className='text-red-500'>{message}</p>}
      <div className='w-2/5'>
        <Form {...form}>
          <h3 className='mb-4 text-xl font-medium'>パスワードを再設定する</h3>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>新しいパスワード</FormLabel>
                  <FormControl>
                    <Input {...field} className='w-full' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex w-full justify-center'>
              <Button type='submit' className='w-3/5'>
                パスワードを再設定
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
