import BreadCrumbs from "@/components/common/bread-crumbs";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main className='flex min-h-screen select-none rounded-4xl bg-main pt-22'>
      <BreadCrumbs pathname={params.slug} />
    </main>
  );
}
