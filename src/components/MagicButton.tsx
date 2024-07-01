import { continents } from "@/constants/continents";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const MagicButton: React.FC<{ setter: Dispatch<SetStateAction<string>> }> = ({
  setter,
}) => {
  const [innerText, setInnerText] = useState<string>("asia");

  const changeInnerText = () => {
    const currentIndex = Object.keys(continents).indexOf(innerText);

    const nextIndex = (currentIndex + 1) % Object.keys(continents).length;

    setInnerText(Object.keys(continents)[nextIndex]);
  };

  return (
    <>
      <div className="fixed h-screen w-screen flex z-20">
        <div className="ml-auto mr-5 sm:mr-10 mt-[75vh] sm:mt-28 h-max">
          <button
            className="p-4 px-6 text-white rounded-xl h-max w-max border border-white uppercase"
            style={{
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
            onClick={() => {
              setter(innerText);
              changeInnerText();
            }}
          >
            {innerText}
          </button>
        </div>
      </div>

      <div className="fixed h-screen w-screen flex z-10">
        <div className="ml-auto mr-5 rounded-xl bg-white opacity-70 sm:mr-10 mt-[75vh] sm:mt-28 h-max">
          <button className="p-4 px-6 bg-white text-white rounded-xl h-max w-max small-ping-animation uppercase">
            {innerText}
          </button>
        </div>
      </div>
    </>
  );
};

export default MagicButton;
