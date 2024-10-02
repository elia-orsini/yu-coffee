import React from "react";

import { IRoaster } from "../../types/Roaster";
import RoastersList from "../../components/roasters/RoastersList";

import { Metadata } from "next";
import divideRoastersByContinent from "@/utils/divideRoastersByContinent";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ICafe } from "@/types/Cafe";
import Link from "next/link";

const getData = async (): Promise<{ roasters: IRoaster[]; cafes: ICafe[] }> => {
  const roasters = await fetch(process.env.URL + `/api/roasters`).then((res) =>
    res.json()
  );

  const cafes = await fetch(process.env.URL + `/api/cafes`).then((res) =>
    res.json()
  );

  return { roasters, cafes };
};

const IndexPage: React.FC = async () => {
  const { roasters, cafes } = await getData();
  const groupedByContinent = divideRoastersByContinent(roasters);

  return (
    <div className="min-h-screen flex-col flex justify-between bg-black text-white">
      <Header cafesLength={cafes.length} />

      <div className="absolute h-screen w-screen flex z-20 top-20">
        <Link
          href="/"
          className="pb-0.5 ml-auto mr-2 sm:mr-10 bg-black h-max px-2 underline hover:cursor-pointer text-lg border"
        >
          <svg
            className="inline mb-1"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
          >
            <path d="M9.75 5.25L3.31 5.25L11.03 12.97L9.97 14.03L2.25 6.31V12.75H0.75V3.75H9.75V5.25z" />
          </svg>
          back
        </Link>
      </div>

      <RoastersList groupedByContinent={groupedByContinent} />

      <Footer />
    </div>
  );
};

export const metadata: Metadata = {
  title: "Coffee Roasters",
  description: "Collecting specialty coffee roasters in the world.",
};

export default IndexPage;
