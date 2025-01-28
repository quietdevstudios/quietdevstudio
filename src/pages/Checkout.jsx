import React from "react";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CheckoutForm from "../components/Form/CheckoutForm";
import { Link } from "react-router-dom";
import { Input } from "../components/Form/Input";

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

      <section className="bg-[#1b2432] p-8 border-4 border-[#8a524e]">
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

      <section className="bg-[#1b2432] p-8 border-4 border-[#8a524e]">
        <>
          <h1 className="flex items-center gap-3 text-2xl font-bold mb-2 text-[#b76d68]">
            <p className="bg-zinc-800 w-7 h-7 rounded-full flex items-center justify-center pt-[2px]">
              2
            </p>
            Payment
          </h1>
          <p className="text-xs mt-1">
            Select a payment method{" "}
            <Link to="/signin" className="hover:underline text-[#b76d68]">
              Why do we need this for a free trial?
            </Link>
          </p>
          <hr className="my-3 border border-zinc-600" />

          <form>
            <section className="bg-zinc-800 px-1 pb-4 flex items-center justify-between gap-2">
              <div>
                <Input
                  label="Name on card*"
                  type="text"
                  id="cardName"
                  name="cardName"
                />
                <Input
                  label="Expiration*"
                  type="text"
                  id="cardName"
                  name="cardName"
                />
                <Input
                  label="Address*"
                  type="text"
                  id="cardName"
                  name="cardName"
                />
                <Input
                  label="Country*"
                  type="text"
                  id="cardName"
                  name="cardName"
                />
                <Input
                  label="State*"
                  type="text"
                  id="cardName"
                  name="cardName"
                />
              </div>
              <div>
                <Input
                  label="Card number*"
                  type="number"
                  id="cardNumber"
                  name="cardNumber"
                />
                <Input
                  label="CVV*"
                  type="number"
                  id="cardNumber"
                  name="cardNumber"
                />
                <Input
                  label="Address (cont)*"
                  type="number"
                  id="cardNumber"
                  name="cardNumber"
                />
                <Input
                  label="City*"
                  type="number"
                  id="cardNumber"
                  name="cardNumber"
                />
                <Input
                  label="Postal code*"
                  type="number"
                  id="cardNumber"
                  name="cardNumber"
                />
              </div>
            </section>
          </form>
        </>
      </section>
    </section>
  );
};

export default Checkout;
