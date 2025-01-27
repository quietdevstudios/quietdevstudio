import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CheckoutForm from "../components/Form/CheckoutForm";

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

      <section className="bg-zinc-700 h-screen p-8 border">
        <form>
          <h1 className="flex items-center gap-3 text-lg font-semibold">
            <p className="bg-zinc-800 w-7 h-7 rounded-full flex items-center justify-center pt-[2px]">
              1
            </p>
            Account details
          </h1>
          <p className="text-xs mt-1">
            Already have an account?{" "}
            <span
              type="button"
              className="text-orange-200 hover:text-orange-400 cursor-pointer"
            >
              Sign in
            </span>
          </p>
          <CheckoutForm />
        </form>
      </section>
    </section>
  );
};

export default Checkout;
