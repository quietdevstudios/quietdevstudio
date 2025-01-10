import React from "react";
import brandLogo from "/assets/images/apple-touch-icon.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faFacebookF,
  faGithub,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white text-left p-6 py-10 font-montserrat">
      <div className="max-w-7xl mx-auto xl:grid xl:grid-cols-3 text-white">
        <section className="grid gap-6">
          <div className="flex items-center tracking-tighter">
            <img src={brandLogo} className="w-12 cursor-pointer" />
            <h2 className="h-12 leading-normal text-2xl">Quietdev Studios</h2>
          </div>
          <p>
            High-quality coding education designed and delivered by experienced
            professionals.
          </p>
          <section className="flex gap-10">
            <a href="#" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#" target="_blank">
              <FontAwesomeIcon icon={faDiscord} />
            </a>
            <a href="#" target="_blank">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" target="_blank">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </section>
        </section>

        {/* section 2 */}
        <section className="mt-16 grid grid-cols-2 xl:col-span-2 xl:mt-0">
          {/* div 1 */}
          <div className="md:grid md:grid-cols-2">
            <div>
              <h3 className="font-semibold leading-6">About us</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="#" className="text-sm leading-6">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm leading-6">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm leading-6">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm leading-6">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <h3 className="font-semibold leading-6">Support</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="#" className="text-sm leading-6">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm leading-6">
                    Contribute
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm leading-6">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* div 2 */}
          <div className="md:grid md:grid-cols-2">
            <div>
              <h3 className="font-semibold leading-6">Guides</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="#" className="text-sm leading-6">
                    Community guides
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm leading-6">
                    Installation guides
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <h3 className="font-semibold leading-6">Legal</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a href="#" className="text-sm leading-6">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm leading-6">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      {/* copyright message */}
      <section className="border-t border-orange-800/10 mt-16 pt-8 sm:mt-20 xl:max-w-7xl xl:mx-auto">
        <p className="text-xs leading-5">
          &copy; 2024 QuietdevStudios. All rights reserved.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
