import { ICafe } from "@/types/Cafe";
import { IRoaster } from "@/types/Roaster";
import getRoasterNameById from "@/utils/getRoasterNameByID";
import getStarsIcons from "@/utils/getStarsIcons";
import RoastersScroller from "./RoastersScroller";

const CoffeeCard: React.FC<{ cafe: ICafe; roasters: IRoaster[] }> = ({
  cafe,
  roasters,
}) => {
  const roastersNames: string[] = cafe.roasters?.map((roaster) => {
    return getRoasterNameById(roaster, roasters);
  });

  return (
    <div
      style={{ height: 300 }}
      className="coffeeCard border border-white rounded-b-md rounded-l-md h-full"
    >
      <div className="flex flex-row h-2/5">
        <p className="text-xl font-bold uppercase pl-4 pt-4 w-4/5 w-max overflow-hidden">
          {cafe.name}
        </p>
        <div className="w-1/12 h-[70px] ml-auto rounded-bl-xl bg-white"></div>
      </div>
      <div className="flex flex-col p-4 h-3/5 gap-y-6">
        <div className="flex flex-row justify-between items-center">
          <p className="text-base">{getStarsIcons(cafe.rating)}</p>
        </div>

        <div className="flex flex-col xl:flex-row sm:gap-0.5 justify-between xl:items-center">
          <p className="capitalize">{cafe.city}</p>
          <p className="text-xs mt-1">{cafe.date}</p>
        </div>

        <RoastersScroller roasters={roastersNames} cafe={cafe} />
      </div>
    </div>
  );
};

export default CoffeeCard;
