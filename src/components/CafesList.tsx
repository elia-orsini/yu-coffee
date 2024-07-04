import { ICafe } from "@/types/Cafe";
import SingleCafe from "./SingleCafe";
import { IRoaster } from "@/types/Roaster";

const CafesList: React.FC<{ cafes: ICafe[]; roasters: IRoaster[] }> = ({
  cafes,
  roasters,
}) => {
  if (cafes.length === 0) {
    return (
      <div className="self-center my-auto">
        <p>no cafes</p>
      </div>
    );
  }

  const sortedCafes = cafes.sort((a, b) => {
    if (a.city < b.city) return -1;
    if (a.city > b.city) return 1;

    return 0;
  });

  const dividedByCountry: { [key: string]: ICafe[] } = {};
  const sortedDividedCafes: { [key: string]: ICafe[] } = {};

  sortedCafes.map((cafe) => {
    if (dividedByCountry[cafe.country]) {
      dividedByCountry[cafe.country].push(cafe);
    } else {
      dividedByCountry[cafe.country] = [cafe];
    }
  });

  Object.keys(dividedByCountry)
    .sort()
    .forEach((key) => {
      sortedDividedCafes[key] = dividedByCountry[key];
    });

  return (
    <div className="flex flex-col -mt-6 sm:-mt-20">
      {Object.keys(sortedDividedCafes).map((country) => (
        <div
          key={`${country}-cafes`}
          className="flex flex-col sm:w-3/5 sm:mx-auto"
        >
          <p className="mt-14 mb-2 capitalize bg-white text-black w-max px-2 mx-4 sm:mx-10">
            {country}
          </p>

          <div className="z-10 flex-col-3 grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 m-4 sm:m-10 gap-4 sm:gap-10">
            {sortedDividedCafes[country].map((cafe) => {
              return (
                <SingleCafe
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
