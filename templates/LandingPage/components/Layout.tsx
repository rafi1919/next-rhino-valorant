// index.tsx
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaAngleLeft } from "react-icons/fa";

interface LayoutProps {
  title?: string;
  section?: string;
  children: React.ReactNode;
  arrow?: boolean;
}

export default function LayoutPage({
  children,
  title = "",
  section = "",
  arrow,
}: LayoutProps) {
  const router = useRouter();

  const navigateBack = () => {
    router.back();
  };

  return (
    <>
      <div className="w-full h-[100%]">
        <div className="max-w-[1000px] mx-[auto] px-6">
          <div className={"w-full"}>{/* <Breadcrumbs/> */}</div>
          <div className={"w-full "}>
            <div
              className={
                "relative flex md:gap-3 justify-center md:justify-start items-center pt-10"
              }
            >
              {arrow && (
                <button
                  className="absolute left-0 md:static"
                  onClick={navigateBack}
                >
                  <FaAngleLeft className="text-xl" />
                </button>
              )}
              {section && (
                <h1
                  className={"text-xl text-center md:text-left font-semibold"}
                >
                  {section}
                </h1>
              )}
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
