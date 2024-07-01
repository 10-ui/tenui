import BreadCrumbs from "@/components/common/bread-crumbs";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className='flex min-h-screen select-none flex-col rounded-4xl bg-main pt-22'>
        <BreadCrumbs />
        <div className='flex flex-col gap-4 px-12'>{children}</div>
      </main>
    </>
  );
}
