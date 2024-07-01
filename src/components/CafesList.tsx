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

  return (
    <div className="z-10 -mt-6 sm:-mt-20 flex-col-3 sm:w-3/5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 m-10 sm:m-auto gap-4 sm:gap-10">
      {cafes.map((cafe) => {
        return <SingleCafe key={cafe.id} cafe={cafe} roasters={roasters} />;
      })}
    </div>
  );
};

export default CafesList;
