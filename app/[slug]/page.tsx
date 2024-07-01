"use client";

import BreadCrumbs from "@/components/common/bread-crumbs";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();
  return (
    <main className='pt-22 flex min-h-screen select-none rounded-4xl bg-main'>
      <BreadCrumbs pathname={pathname} />
    </main>
  );
}
