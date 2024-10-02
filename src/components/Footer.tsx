const Footer: React.FC = () => {
  return (
    <div className="w-full text-2xs text-left uppercase px-2 mb-10 mt-10 sm:mt-20 sm:mx-10 z-20">
      <p>
        made with {`<3`} by{" "}
        <a
          href="https://elia-orsini.com"
          rel="noreferrer"
          target="_blank"
          className="underline"
        >
          elia
        </a>{" "}
        © 2024. all data stored in notion. frontend crafted using next.js.
      </p>
    </div>
  );
};

export default Footer;
