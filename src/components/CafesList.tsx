import SingleCafe from "./SingleCafe";

const CafesList: React.FC<{ cafes: any[] }> = ({ cafes }) => {
  return (
    <div className="flex -mt-20 flex-col-3 mx-auto">
      {cafes.map((cafe) => {
        return <SingleCafe cafe={cafe} />;
      })}
    </div>
  );
};

export default CafesList;
