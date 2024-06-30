const SingleCafe: React.FC<{ cafe: any }> = ({ cafe }) => {
  return (
    <div className="border border-black">
      <p>{cafe.name}</p>
      <p>{cafe.rating}</p>
      <p>{cafe.city}</p>
      <p>roasters</p>
    </div>
  );
};

export default SingleCafe;
