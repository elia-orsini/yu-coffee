import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

import { continents } from "@/constants/continents";
import { ContinentName } from "@/types/continents/ContinentName";
import { useEffect, useState } from "react";

const WorldMap: React.FC<{ continent: ContinentName; cafes: any[] }> = ({
  continent,
  cafes,
}) => {
  const [markers, setMarkers] = useState<number[][]>([]);

  const continentData = continents[continent];

  useEffect(() => {
    const continentCafes = cafes.filter((cafe) => cafe.continent === continent);

    const markersTemp = continentCafes.map((cafe) => {
      const coords = cafe.coords.split(",");

      const convertedCoords = coords.map((coord: string) => {
        return parseFloat(coord);
      });

      return convertedCoords.reverse();
    });

    setMarkers(markersTemp);
  }, [cafes, continent]);

  return (
    <div
      className="w-full mt-20"
      style={{
        maskImage: "linear-gradient(to top, transparent 5%, black 50%)",
      }}
    >
      <ComposableMap
        projectionConfig={{
          center: continentData.center,
          scale: continentData.scale,
        }}
      >
        <Geographies
          geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
          stroke="#000"
          strokeWidth={0.5}
          translateExtent={[
            [0, 0],
            [0, 0],
          ]}
        >
          {({ geographies }: any) =>
            geographies.map((geo: any) => {
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={"#f1f5f9"}
                  className="pointer-events-none"
                />
              );
            })
          }
        </Geographies>

        {markers.map((coord) => (
          <Marker key={`${coord}`} coordinates={coord}>
            <circle r={1.5} fill="#F00" />
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default WorldMap;
