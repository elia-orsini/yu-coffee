import { ICafe } from "@/types/Cafe";
import { IRoaster } from "@/types/Roaster";
import getRoasterNameById from "@/utils/getRoasterNameByID";
import RoastersScroller from "./RoastersScroller";

const SingleCafe: React.FC<{ cafe: ICafe; roasters: IRoaster[] }> = ({
  cafe,
  roasters,
}) => {
  const roastersNames: string[] = cafe.roasters?.map((roaster) => {
    return getRoasterNameById(roaster, roasters);
  });

  const starsArray = new Array(Math.floor(cafe.rating)).fill(0);

  return (
    <>
      <div className="border border-white rounded-b-md rounded-l-md">
        <div className="flex flex-row">
          <p className="text-xl uppercase pl-4 pt-4 w-4/5">{cafe.name}</p>
          <div className="w-1/12 h-[70px] ml-auto rounded-bl-xl bg-white"></div>
        </div>
        <div className="p-4">
          <div className="flex flex-row justify-between my-4 items-center">
            <p className="text-lg">{cafe.rating} STARS</p>

            <div className="flex flex gap-x-0.5">
              {starsArray.map((i) => (
                <span
                  key={`${cafe.id}-${i}`}
                  className="h-2 w-2 rounded-full bg-white"
                ></span>
              ))}
            </div>
          </div>
          <p className="my-4 capitalize">{cafe.city}</p>

          <RoastersScroller roasters={roastersNames} cafe={cafe} />
        </div>
      </div>
    </>
  );
};

export default SingleCafe;
