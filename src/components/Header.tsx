import Link from "next/link";

const Header: React.FC<{ cafesLength: number }> = ({ cafesLength }) => {
  return (
    <div
      id="HeaderTop"
      className="w-full h-20 flex border-b border-black justify-between items-center px-2 sm:px-10"
    >
      <Link href="/" className="text-2xl">
        沁瑜<span className="ml-1">&apos;s Coffee Map</span>
      </Link>
      <p className="text-sm mt-2">{cafesLength} cafes / 2 continents</p>
    </div>
  );
};

export default Header;
