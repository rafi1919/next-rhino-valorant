// index.tsx
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useGetNewsData } from "./hooks";
import LayoutPage from "@/templates/LandingPage/components/Layout";
import { motion, useScroll, useTransform } from "framer-motion";
import ReactPaginate from "react-paginate";

import Link from "next/link";
import dayjs from "dayjs";

export default function Index() {
  const [stateData, setStateData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const { data, loading } = useGetNewsData();

  useEffect(() => {
    if (data && data.length > 0) {
      setStateData((prev) => [...prev, ...data]);
    }
    console.log(data);
  }, [data, loading]);

  const itemsPerPage = 6;
  const offset = currentPage * itemsPerPage;
  const pageCount = Math.ceil(stateData.length / itemsPerPage);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <LayoutPage title="News" section="News" arrow>
        <div className="mt-10 flex flex-col justify-center">
          {stateData.slice(offset, offset + itemsPerPage).map((item, index) => (
            <div key={index}>
              <motion.div
                initial={{ y: 0 }}
                whileHover={{ y: -30 }}
                className="cursor-pointer	"
              >
                <div className="hover:shadow-md hover:shadow-red active:shadow-green-500 cursor-pointer h-full grid grid-cols-5  my-5">
                  <div className="lg:col-span-2 md:col-span-5 col-span-5 bg-red w-full border-4 border-blue">
                    <Image
                      src={item.banner.url}
                      alt="Event"
                      className="object-cover w-full transition duration-300 ease-in-out transform hover:opacity-30"
                    />
                  </div>
                  <div className="lg:col-span-3 md:col-span-5 col-span-5 px-3 py-6">
                    <p className="text-sm text-blackGrey font-medium py-2 ">
                      {dayjs(item.date).format("DD/MM/YYYY")} .{" "}
                      <span className="text-red">
                        {item.category.map((tag: any) => tag.title).join(", ")}
                      </span>
                    </p>
                    <h5 className="text-2xl text-blackGrey font-bold">
                      {item.article_type === "Normal article" ? (
                        <Link href={`./News/${item.id}`}>{item.title}</Link>
                      ) : (
                        <Link href={item.external_link}>{item.title}</Link>
                      )}{" "}
                    </h5>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}

          <ReactPaginate
            pageCount={pageCount}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            onPageChange={handlePageChange}
            containerClassName=" flex justify-center"
            activeClassName="bg-blue-500 text-red"
            previousLabel="Prev"
            nextLabel="Next"
            previousClassName=""
            nextClassName=""
            disabledClassName="opacity-50 cursor-not-allowed"
            pageClassName="inline-block m-2 p-2 rounded-md hover:shadow-md hover:shadow-red active:shadow-green-500  cursor-pointer"
          />
        </div>
      </LayoutPage>
    </>
  );
}
