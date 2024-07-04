import { continents } from "@/constants/continents";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Dispatch, SetStateAction, useState } from "react";

const MagicButton: React.FC<{ setter: Dispatch<SetStateAction<string>> }> = ({
  setter,
}) => {
  const [innerText, setInnerText] = useState<string>("asia");
  const [transition, setTransition] = useState<boolean>(false);

  const changeInnerText = () => {
    const currentIndex = Object.keys(continents).indexOf(innerText);

    const nextIndex = (currentIndex + 1) % Object.keys(continents).length;

    setInnerText(Object.keys(continents)[nextIndex]);
  };

  useGSAP(() => {
    if (transition) {
      gsap.set(".transitionElement", {
        zIndex: 40,
        opacity: 1,
      });

      gsap.to(".transitionElement", {
        zIndex: 0,
        opacity: 0,
        delay: 0.4,
        duration: 0.4,
      });

      setTimeout(() => {
        setTransition(false);
      }, 300);
    }
  }, [transition]);

  return (
    <>
      <div className="transitionElement opacity-0 fixed flex flex-col h-screen w-screen bg-black text-white">
        <h1 className="text-2xl m-auto">
          沁瑜<span className="ml-1">&apos;s Cafes</span>
        </h1>
      </div>

      <div className="fixed h-screen w-screen flex z-20">
        <div className="ml-auto mr-5 sm:mr-10 mt-auto mb-[20vh] sm:mt-28 h-max">
          <button
            className="p-4 px-6 text-white rounded-xl h-max w-max border border-white uppercase"
            style={{
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
            }}
            onClick={() => {
              setter(innerText);
              changeInnerText();
              setTransition(true);
            }}
          >
            {innerText}
          </button>
        </div>
      </div>

      <div className="fixed h-screen w-screen flex z-10">
        <div className="ml-auto mr-5 rounded-xl bg-white opacity-70 sm:mr-10 mt-auto mb-[20vh] sm:mt-28 h-max">
          <button className="p-4 px-6 bg-white text-white rounded-xl h-max w-max small-ping-animation uppercase">
            {innerText}
          </button>
        </div>
      </div>
    </>
  );
};

export default MagicButton;
