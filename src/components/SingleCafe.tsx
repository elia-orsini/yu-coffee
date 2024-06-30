import { ICafe } from "@/types/Cafe";
import { IRoaster } from "@/types/Roaster";
import getRoasterNameById from "@/utils/getRoasterNameByID";
import RoastersScroller from "./RoastersScroller";

const SingleCafe: React.FC<{ cafe: ICafe; roasters: IRoaster[] }> = ({
  cafe,
  roasters,
}) => {
  let colouredFlag;
  switch (cafe.rating) {
    case 1:
      colouredFlag = "w-1/12 h-[70px] ml-auto rounded-bl-xl bg-1-star";
      break;

    case 2:
      colouredFlag = "w-1/12 h-[70px] ml-auto rounded-bl-xl bg-2-star";
      break;

    case 3:
      colouredFlag = "w-1/12 h-[70px] ml-auto rounded-bl-xl bg-3-star";
      break;

    case 4:
      colouredFlag = "w-1/12 h-[70px] ml-auto rounded-bl-xl bg-4-star";
      break;

    case 5:
      colouredFlag = "w-1/12 h-[70px] ml-auto rounded-bl-xl bg-5-star";
      break;

    default:
      break;
  }

  const roastersNames: string[] = cafe.roasters.map((roaster) => {
    return getRoasterNameById(roaster, roasters);
  });

  return (
    <>
      <div className="border border-black rounded-b-md rounded-l-md">
        <div className="flex flex-row">
          <p className="text-xl uppercase pl-4 pt-4 w-4/5">{cafe.name}</p>
          <div className={colouredFlag}></div>
        </div>
        <div className="p-4">
          <p className="my-10 text-lg">{cafe.rating} STARS</p>
          <p>{cafe.city}</p>

          <RoastersScroller roasters={roastersNames} cafe={cafe} />
        </div>
      </div>
    </>
  );
};

export default SingleCafe;
