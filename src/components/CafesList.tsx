import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

import { ICafe } from "@/types/Cafe";
import CoffeeCard from "./CoffeeCard";
import { IRoaster } from "@/types/Roaster";
import sortCafesByDate from "@/utils/SortCafesByDate";
import divideAndSortByCountry from "@/utils/DivideAndSortByCountry";

const CafesList: React.FC<{
  continent: string;
  cafes: ICafe[];
  roasters: IRoaster[];
}> = ({ continent, cafes, roasters }) => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const coffeeCards: HTMLDivElement[] = gsap.utils.toArray(".coffeeCard");

    coffeeCards.forEach((element: HTMLDivElement) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
        },
        opacity: 0,
        duration: 1,
      });
    });
  }, [cafes, roasters]);

  if (cafes.length === 0) {
    return (
      <div className="self-center my-auto">
        <p>no cafes</p>
      </div>
    );
  }

  const sortedCafes = sortCafesByDate(cafes);

  const sortedDividedCafes = divideAndSortByCountry(sortedCafes, continent);

  return (
    <div className="flex flex-col -mt-10 sm:-mt-40">
      {Object.keys(sortedDividedCafes).map((country) => (
        <div
          key={`${country}-cafes`}
          className="flex flex-col sm:w-3/5 sm:mx-auto"
        >
          <div className="mt-8 flex">
            <p className="inline w-max capitalize bg-white text-black w-max ml-4 px-1.5 sm:ml-10">
              {country}
            </p>

            <p
              className={`inline text-xs ml-2 border border-white rounded-full p-1 ${
                sortedDividedCafes[country].length < 10 ? "px-2" : "px-1.5"
              }`}
            >
              {sortedDividedCafes[country].length}
            </p>
          </div>

          <div className="z-10 flex-col-3 grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 m-4 sm:m-10 gap-4 sm:gap-4">
            {sortedDividedCafes[country].map((cafe) => {
              return (
                <CoffeeCard
                  key={`cafeCard-${cafe.id}`}
                  cafe={cafe}
                  roasters={roasters}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CafesList;
