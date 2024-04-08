import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import LayoutPage from "@/templates/LandingPage/components/Layout";

export default function Index() {
  const router = useRouter();
  const { newsId } = router.query;

  return (
    <>
      <LayoutPage title="Page Not Found" section="Not FOund" arrow>
        <div className="h-[80vh] w-full  flex justify-center items-center">
          <p>page not found</p>
        </div>
      </LayoutPage>
    </>
  );
}
