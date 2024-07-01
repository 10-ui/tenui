import BreadCrumbs from "@/components/common/bread-crumbs";

export default function slugLayout({
  params,
  children,
}: {
  params: { slug: string[] };
  children: React.ReactNode;
}) {
  return (
    <>
      <main className='flex flex-col min-h-screen select-none rounded-4xl bg-main pt-22'>
        <BreadCrumbs pathname={params} />
        <div className='flex flex-col gap-4 px-12'>{children}</div>
      </main>
    </>
  );
}
