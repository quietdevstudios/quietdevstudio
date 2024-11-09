import React from "react";
import { COUNTDOWN } from "../../data";

const CountdownTimer = () => {
  return (
    <main className="w-full flex items-center justify-center flex-col">
      <h1 className="flex items-center justify-center text-3xl text-orange-600 font-semibold uppercase text-center">
        We're Launching Soon...
      </h1>

      <section className="flex gap-4 items-center justify-center">
        {COUNTDOWN.map((countdown) => {
          const { topNumber, bottomNumber, unitsOfTime } = countdown;
          return (
            <div className="flex items-center justify-center flex-col min-h-screen text-center bg-orange-300 p-2">

              <div className="flipCard flex flex-col rounded-lg text-[2rem]">

                <div className="text-red-500 bg-orange-400 text-center">{topNumber}</div>

                <div>{bottomNumber}</div>
                
              </div>

              {/* <h6 className="mt-6 text-center">{unitsOfTime}</h6> */}
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default CountdownTimer;
