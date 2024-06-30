import { ICafe } from "@/types/Cafe";
import SingleCafe from "./SingleCafe";

const CafesList: React.FC<{ cafes: ICafe[] }> = ({ cafes }) => {
  return (
    <div className="sm:-mt-20 flex-col-3 sm:w-3/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-10 sm:m-auto gap-10">
      {cafes.map((cafe) => {
        return <SingleCafe key={cafe.name} cafe={cafe} />;
      })}
    </div>
  );
};

export default CafesList;
