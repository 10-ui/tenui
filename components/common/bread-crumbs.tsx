import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react";
import { Icons } from "@/components/common/icons";

export default function BreadCrumbs({ pathNames }: { pathNames: string[] }) {
  if (pathNames.length === 0) return null;
  return (
    <Breadcrumb className='h-fit px-2'>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href='/'>Home</BreadcrumbLink>
        </BreadcrumbItem>
        {pathNames.map((pathName, index) => (
          <Fragment key={index}>
            <BreadcrumbSeparator>
              <Icons.slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              {pathNames.length == index ? (
                <BreadcrumbLink href={`/${pathName}`}>
                  {pathName.charAt(0).toUpperCase() + pathName.slice(1)}
                </BreadcrumbLink>
              ) : (
                <>{pathName.charAt(0).toUpperCase() + pathName.slice(1)}</>
              )}
            </BreadcrumbItem>
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
