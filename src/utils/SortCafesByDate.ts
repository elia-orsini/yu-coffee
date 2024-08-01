import { ICafe } from "@/types/Cafe";

const sortCafesByDate = (cafes: ICafe[]): ICafe[] => {
  cafes.sort((a, b) => {
    if (a.date === undefined) return -1;
    if (b.date === undefined) return 1;

    const aDate = new Date(a.date);
    const bDate = new Date(b.date);

    if (aDate < bDate) return -1;
    if (aDate > bDate) return 1;

    return 0;
  });

  return cafes;
};

export default sortCafesByDate;
