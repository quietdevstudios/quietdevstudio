import React from "react";
import { COUNTDOWN } from "../../data";

const CountdownTimer = () => {
  return (
    <main>
      <h1 className="flex items-center justify-center text-3xl text-orange-600">
        We're Launching Soon...
      </h1>

      <section className="countdown">
        {COUNTDOWN.map((countdown) => {
          const { topNumber, bottomNumber, unitsOfTime } = countdown;

          return (
            <div className="weekdays">
              <div className="flipCard">
                <div>{topNumber}</div>
                <div>{bottomNumber}</div>
              </div>
              <h6>{unitsOfTime}</h6>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default CountdownTimer;
