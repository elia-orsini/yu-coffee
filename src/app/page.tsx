"use client";

import CafesList from "@/components/CafesList";
import Header from "@/components/Header";
import WorldMap from "@/components/WorldMap";
import useCafes from "@/hooks/useCafes";
import useRoasters from "@/hooks/useRoasters";
import { ContinentName } from "@/types/continents/ContinentName";

export default function Home() {
  const { cafes, isLoadingCafes } = useCafes();
  const { roasters, isLoadingRoasters } = useRoasters();

  const isLoading = isLoadingCafes || isLoadingRoasters;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex min-h-screen flex-col pb-20">
      <Header cafesLength={cafes.length} />

      <WorldMap continent={ContinentName.Europe} cafes={cafes} />

      <CafesList cafes={cafes} roasters={roasters} />
    </div>
  );
}
