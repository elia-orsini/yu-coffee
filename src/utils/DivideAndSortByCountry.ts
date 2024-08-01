import { ICafe } from "@/types/Cafe";

const divideAndSortByCountry = (
  cafes: ICafe[],
  continent: string
): { [key: string]: ICafe[] } => {
  const dividedByCountry: { [key: string]: ICafe[] } = {};
  const sortedDividedCafes: { [key: string]: ICafe[] } = {};

  if (continent === "europe") {
    sortedDividedCafes["england"] = [];
    sortedDividedCafes["scotland"] = [];
  }

  cafes.map((cafe) => {
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

  return sortedDividedCafes;
};

export default divideAndSortByCountry;
