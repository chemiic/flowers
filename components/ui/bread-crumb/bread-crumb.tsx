"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

import {getBreadcrumb} from "@/components/ui/bread-crumb/utils";

export const Breadcrumb = () => {
  const pathname: string = usePathname();

  return (
    <div className={"flex gap-x-2"}>
      <Link
        href="/"
        className={"text-[--fur] hover:text-[--gray] transition"}
      >
        Главная
      </Link>
      {getBreadcrumb(pathname).map((uri) => (
        <div
          className={"flex gap-x-2"}
          key={uri.name}
        >
          <span
            className={"text-[--fur]"}
          >
            ▪
          </span>
          <Link
            key={uri.name}
            href={`${uri.url}`}
            className={"text-[--gray]"}
          >
            {uri.name}
          </Link>
        </div>
      ))}
    </div>
  );
};
