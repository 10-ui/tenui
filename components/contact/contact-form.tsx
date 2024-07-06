"use client";

import { useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { sendView } from "@/utils/datafetch";

const contactSchema = z.object({
  name: z.string().min(1, { message: "名前を入力してください" }),
  email: z
    .string()
    .email({ message: "有効なメールアドレスを入力してください" }),
  message: z.string().min(1, { message: "メッセージを入力してください" }),
});

export default function ContactForm() {
  const [message, setMessage] = useState("");
  const onSubmit = (data: z.infer<typeof contactSchema>) => {
    sendView({ data });
    setMessage("送信しました!ご意見ありがとうございました!");
    console.log(data);
  };
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='mx-auto w-1/2 space-y-6'>
        <h3 className='text-xl font-normal'>お問い合わせ</h3>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>名前</FormLabel>
              <FormControl>
                <Input
                  type='text'
                  placeholder='お名前を入力してください'
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>メールアドレス</FormLabel>
              <FormControl>
                <Input
                  type='email'
                  placeholder='返信先のメールアドレスを入力してください'
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem>
              <FormLabel>お問い合わせ内容</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='お問い合わせ内容を入力してください'
                  className='resize-none'
                  rows={6}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <div className='flex justify-center'>
          <Separator className='my-4' />
        </div>
        <Button type='submit' className='w-full'>
          送信
        </Button>
        {message && <p className='px-4 py-2 text-green-500'>{message}</p>}
      </form>
    </Form>
  );
}
