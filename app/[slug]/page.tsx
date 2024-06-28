"use client";

import BreadCrumbs from "@/components/common/bread-crumb";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();
  return (
    <main className='pt-22 flex min-h-screen select-none rounded-3xl bg-main'>
      <BreadCrumbs pathname={pathname} />
    </main>
  );
}
