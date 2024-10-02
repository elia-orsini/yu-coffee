"use client";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import CafesList from "@/components/CafesList";
import Header from "@/components/Header";
import MagicButton from "@/components/MagicButton";
import WorldMap from "@/components/WorldMap";
import useCafes from "@/hooks/useCafes";
import useRoasters from "@/hooks/useRoasters";
import { ICafe } from "@/types/Cafe";
import Footer from "@/components/Footer";

export default function Home() {
  const [continent, setContinent] = useState<string>("europe");
  const [europeanCafes, setEuropeanCafes] = useState<ICafe[]>([]);
  const [asianCafes, setAsianCafes] = useState<ICafe[]>([]);

  const { cafes, isLoadingCafes } = useCafes();
  const { roasters, isLoadingRoasters } = useRoasters();

  const isLoading = isLoadingCafes || isLoadingRoasters;

  useEffect(() => {
    if (!isLoading) {
      const europe = cafes.filter((cafe: ICafe) => cafe.continent === "europe");
      const asia = cafes.filter((cafe: ICafe) => cafe.continent === "asia");

      setEuropeanCafes(europe);
      setAsianCafes(asia);
    }
  }, [cafes, isLoading]);

  useGSAP(() => {
    gsap.from("#HeaderTop", {
      translateY: "-100%",
      opacity: 0,
      duration: 1.5,
      delay: 0.7,
    });

    gsap.from("#Main", {
      opacity: 0,
      duration: 3,
    });
  }, [isLoading]);

  const currentCafes = continent === "europe" ? europeanCafes : asianCafes;

  if (isLoading) {
    return (
      <div className="fixed flex flex-col h-screen w-screen bg-black text-white">
        <h1 className="text-2xl m-auto">
          沁瑜<span className="ml-1">&apos;s Coffee Map</span>
        </h1>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header cafesLength={europeanCafes.length + asianCafes.length} />

      <div id="Main">
        <MagicButton setter={setContinent} />

        <WorldMap continent={continent} cafes={currentCafes} />

        <CafesList
          continent={continent}
          cafes={currentCafes}
          roasters={roasters}
        />

        <Footer />
      </div>
    </div>
  );
}
