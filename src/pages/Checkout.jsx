import React from "react";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CheckoutForm from "../components/Form/CheckoutForm";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <section className="text-white font-montserrat">
      <section className="flex items-center justify-between bg-zinc-800 p-6">
        <div className="flex flex-col gap-2 items-center justify-center p-2">
          <FontAwesomeIcon
            icon={faChevronRight}
            color="#fff"
            size="2xs"
            className="bg-orange-800 p-1 rounded-full w-3 h-3"
          />
          <p className="text-[10.5px] tracking-widest font-semibold">ACCOUNT</p>
        </div>
        <hr className="border w-28 border-zinc-700" />

        <div className="w-fit flex flex-col gap-2 items-center justify-center p-2">
          {/* <FontAwesomeIcon
            icon={faChevronRight}
            color="#fff"
            size="2xs"
            className="bg-zinc-800 p-1 rounded-full w-3 h-3"
          /> */}
          <div className="bg-orange-800 p-[9px] rounded-full w-3 h-3"></div>
          <p className="text-[10.5px] tracking-widest font-semibold">PAYMENT</p>
        </div>
        <hr className="border w-28 border-zinc-700" />

        <div className="w-fit flex flex-col gap-2 items-center justify-center p-2">
          {/* <FontAwesomeIcon
            icon={faChevronRight} 
            color="#fff"
            size="2xs"
            className="bg-zinc-800 p-1 rounded-full w-3 h-3"
          /> */}
          <div className="bg-orange-800 p-[9px] rounded-full w-3 h-3"></div>
          <p className="text-[10.5px] tracking-widest font-semibold">REVIEW</p>
        </div>
      </section>

      <section className="bg-[#1b2432] h-screen p-8 border">
        <form>
          <h1 className="flex items-center gap-3 text-2xl font-bold mb-2 text-[#b76d68]">
            <p className="bg-zinc-800 w-7 h-7 rounded-full flex items-center justify-center pt-[2px]">
              1
            </p>
            Account details
          </h1>
          <p className="text-xs mt-1">
            Already have an account?{" "}
            <Link to="/signin" className="hover:underline text-[#b76d68]">
              Sign in
            </Link>
          </p>
          <CheckoutForm />
        </form>
      </section>
    </section>
  );
};

export default Checkout;
