"use client";

import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import Link from "next/link";
import { usePathname } from "next/navigation";

const getPageTitle = (pathname: string) => {
  const pageTitles: { [key: string]: string } = {
    "/dashboard/products": "All Products",
    "/dashboard/products/[slug]": "Product Details",
    "/dashboard/products/[slug]/edit": "Edit Product",
    "/dashboard/products/new": "Add Product",
    "/dashboard/orders": "All Orders",
    "/dashboard/orders/[id]": "Order Details",
    "/dashboard/customers": "All Customers",
    "/dashboard/customers/[id]": "Customer Details",
    "/dashboard/settings": "Settings",
  };

  return pageTitles[pathname] || "";
};

export default function TopNav() {
  const pathname = usePathname();
  const links = pathname.split("/").filter(Boolean);
  const pageTitle = getPageTitle(pathname);

  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        {links.map((link, index) => (
          <>
            <BreadcrumbItem key={index}>
              <BreadcrumbLink asChild>
                <Link
                  href={`/${links.slice(0, index + 1).join("/")}`}
                  className="capitalize"
                >
                  {link}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < links.length - 1 && <BreadcrumbSeparator />}
          </>
        ))}

        {pageTitle && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{pageTitle}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
