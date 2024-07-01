import ContactForm from "@/components/common/contact-form";

export default function Contact() {
  return (
    <main className='flex min-h-dvh flex-row'>
      <div className='grid max-h-dvh w-full grid-cols-6'>
        <div className='h-29 col-span-6 w-full rounded-3xl bg-main'></div>
        <div className='col-span-2 flex h-[calc(100dvh-7.25rem)] basis-3/12 flex-col items-center justify-center rounded-3xl bg-main'>
          <h2 className='text-center text-4xl font-bold'>Contact Form</h2>
        </div>
        <div className='col-span-4 flex h-[calc(100dvh-7.25rem)] basis-9/12 items-center justify-center rounded-3xl bg-main p-10'>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
