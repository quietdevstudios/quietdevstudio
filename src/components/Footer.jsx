import React from "react";
import brandLogo from "/assets/images/apple-touch-icon.png";

const Footer = () => {
  return (
    <footer className="bg-orange-100 text-orange-500 text-left absolute bottom-0 right-0 left-0 border-2 border-red-400 p-6">
      <section className="flex flex-col gap-2">
        <div className="flex items-center tracking-tighter">
          <img src={brandLogo} className="w-24 h-24 cursor-pointer" />
          <h2 className="h-12 leading-normal text-2xl">Quietdev Studios</h2>
        </div>
        <p>
          High quality coding education maintained by an open source community.
        </p>
        <section className="flex gap-2">
          <a href="#" target="_blank">
            github
          </a>
          <a href="#" target="_blank">
            discord
          </a>
          <a href="#" target="_blank">
            facebook
          </a>
          <a href="#" target="_blank">
            twitter
          </a>
        </section>
      </section>

      {/* section 2 */}
      <section></section>
    </footer>
  );
};

export default Footer;
