import React from "react";
import profileImg from "/profile.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { Input } from "../../components/Form/Input";
import { Link } from "react-router-dom";

const Account_Settings = () => {
  return (
    <section className="font-montserrat">
      <div className="text-center bg-zinc-800 font-semibold tracking-wide leading-tight uppercase flex items-center justify-center text-2xl py-10 text-orange-200">
        Account Settings
      </div>
      <main className="mx-auto md:w-[60%]  lg:w-[40%] xl:w-[30%]">
        <section className="py-6 m-2 shadow p-6 rounded">
          <h2 className="text-2xl font-medium text-gray-800 mb-4">
            Basic Information
          </h2>
          <div className="w-fit mx-auto rounded-full flex items-center justify-center relative">
            <img
              src={profileImg}
              alt="profile photo"
              className="w-32 rounded-full border border-zinc-50"
            />
            <button>
              <FontAwesomeIcon
                icon={faPencil}
                color="white"
                size="lg"
                className="bg-green-700 p-3 rounded-full absolute right-0 bottom-0"
              />
            </button>
          </div>

          <form className="flex flex-col gap-4">
            <Input
              label="Full Name"
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your fullName"
            />
            <Input
              label="Email"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </form>
          <div className="text-center flex items-center justify-end mt-8">
            <button className="bg-green-700 px-6 py-3 rounded-lg text-white tracking-wide font-medium uppercase">
              Update
            </button>
          </div>
        </section>

        <section className="py-6 m-2 p-6 rounded shadow">
          <h2 className="text-2xl font-medium text-gray-800 mb-4">
            Password and Security
          </h2>
          <Input
            label="Current Password"
            type="password"
            id="password"
            name="password"
            placeholder="Enter current password"
          />
          <Input
            label="New Password"
            type="password"
            id="password"
            name="password"
            placeholder="Enter new password"
          />
          <Input
            label="Confirm New Password"
            type="confirmPassword"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm new password"
          />
          <p className="mt-4 text-sm font-medium tracking-wider">
            Can't remember your current password?{" "}
            <Link className="text-green-700 underline">
              Reset your password
            </Link>
          </p>
          <div className="text-center flex items-center justify-end mt-8">
            <button className="bg-green-700 px-6 py-3 rounded-lg text-white tracking-wide font-medium uppercase">
              Update
            </button>
            {/* <button className="bg-red-700 px-6 py-3 rounded-lg text-white tracking-wide font-medium uppercase">
              Delete
            </button> */}
          </div>
        </section>
      </main>
    </section>
  );
};

export default Account_Settings;
