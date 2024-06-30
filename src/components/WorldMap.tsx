import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

import { continents } from "@/constants/continents";
import { ContinentName } from "@/types/continents/ContinentName";
import { useEffect, useState } from "react";
import getRatingColour from "@/utils/GetRatingColour";
import { ICafe } from "@/types/Cafe";
import useWindowWidth from "@/hooks/useWindowWidth";

const WorldMap: React.FC<{ continent: ContinentName; cafes: ICafe[] }> = ({
  continent,
  cafes,
}) => {
  const [markers, setMarkers] = useState<[number, number][]>([]);
  const [markersColours, setMarkersColours] = useState<string[]>([]);

  const continentData = continents[continent];

  const isScreenSmall = useWindowWidth()! <= 640;

  const maskImageGradient = isScreenSmall
    ? "linear-gradient(to top, transparent 5%, black 20%)"
    : "linear-gradient(to top, transparent 5%, black 50%)";

  useEffect(() => {
    const continentCafes: ICafe[] = cafes.filter(
      (cafe) => cafe.continent === continent
    );

    const continentMarkers: [number, number][] = [];
    const continentMarkersColours: string[] = [];

    continentCafes.map((cafe: ICafe) => {
      const coords = cafe.coords.split(",");

      const convertedCoords: [number, number] = [
        parseFloat(coords[0]),
        parseFloat(coords[1]),
      ];

      convertedCoords.reverse();

      continentMarkers.push(convertedCoords);
      continentMarkersColours.push(getRatingColour(cafe.rating));
    });

    setMarkers(continentMarkers);
    setMarkersColours(continentMarkersColours);
  }, [cafes, continent]);

  return (
    <div
      className="w-full"
      style={{
        maskImage: maskImageGradient,
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

        {markers.map((coord, i) => (
          <Marker key={`${coord}`} coordinates={coord}>
            <circle r={isScreenSmall ? 4 : 3} fill={markersColours[i]} />
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
};

export default WorldMap;
