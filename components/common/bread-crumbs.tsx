import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function BreadCrumbs({ pathname }: { pathname: string }) {
  const path =
    pathname.replace("/", "").charAt(0).toUpperCase() + pathname.slice(2);
  return (
    <Breadcrumb className='px-12'>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href={pathname}>{path}</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
