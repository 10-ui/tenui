import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function BreadCrumbs({
  pathname,
}: {
  pathname: { slug: string[] };
}) {
  const path =
    pathname.slug[0].charAt(0).toUpperCase() + pathname.slug[0].slice(1);
  return (
    <Breadcrumb className='h-fit px-12'>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href={`/${pathname.slug}`}>{path}</BreadcrumbLink>
        </BreadcrumbItem>
        {pathname.slug.length > 1 && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/${pathname.slug[1]}`}>
                {pathname.slug[1]}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
