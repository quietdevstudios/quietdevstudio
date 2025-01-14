import brandLogo from "/assets/images/apple-touch-icon.png";

const Profilesection = () => {
  return (
    <div className="flex items-center tracking-tighter px-5 py-2 gap-4">
      <div className="border border-orange-400 w-20 rounded-full">
        <img src={brandLogo} />
      </div>
      <h2 className="leading-normal text-2xl text-orange-100">
        Hi, Udeme
        <p className="text-white text-sm tracking-wide">Welcome back</p>
      </h2>
    </div>
  );
};

export default Profilesection;
