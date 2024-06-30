"use client";

import CafesList from "@/components/CafesList";
import Header from "@/components/Header";
import WorldMap from "@/components/WorldMap";
import useCafes from "@/hooks/useCafes";
import { ContinentName } from "@/types/continents/ContinentName";

export default function Home() {
  const { cafes, isLoading } = useCafes();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header cafesLength={cafes.length} />

      <WorldMap continent={ContinentName.Europe} cafes={cafes} />

      <CafesList cafes={cafes} />
    </div>
  );
}
