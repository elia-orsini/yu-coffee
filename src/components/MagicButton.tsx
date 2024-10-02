import { continents } from "@/constants/continents";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
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
        duration: 0.5,
      });

      gsap.to(".transitionElement", {
        zIndex: 0,
        opacity: 0,
        delay: 0.5,
        duration: 0.7,
      });

      setTimeout(() => {
        setTransition(false);
      }, 300);
    }
  }, [transition]);

  return (
    <>
      <div className="transitionElement opacity-0 fixed top-0 flex flex-col h-screen w-screen bg-black text-white">
        <h1 className="text-2xl m-auto">
          沁瑜<span className="ml-1">&apos;s Coffee Map</span>
        </h1>
      </div>

      <div className="fixed z-20 left-auto right-5 sm:right-10 top-auto bottom-[10vh] sm:top-48 h-max">
        <button
          className="p-4 px-6 text-white bg-white/20 rounded-xl h-max w-max border border-white uppercase"
          style={{
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
          onClick={() => {
            setter(innerText);
            changeInnerText();
            setTransition(true);
            window.scrollTo(0, 0);
          }}
        >
          {innerText}
        </button>
      </div>

      <Link
        href="/roasters"
        className="absolute z-20 top-20 pb-0.5 left-auto right-2 sm:right-10 bg-black h-max px-2 underline hover:cursor-pointer text-lg border"
      >
        roasters
        <svg
          className="inline mb-1"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
        >
          <path d="M5.25 5.25h6.44L3.97 12.97l1.061 1.061L12.75 6.31V12.75h1.5V3.75H5.25v1.5z" />
        </svg>
      </Link>

      <div className="fixed z-10 left-auto right-5 sm:right-10 top-auto bottom-[10vh] sm:top-48 h-max">
        <button className="p-4 px-6 bg-white/50 text-white rounded-xl h-max w-max small-ping-animation uppercase">
          {innerText}
        </button>
      </div>
    </>
  );
};

export default MagicButton;
