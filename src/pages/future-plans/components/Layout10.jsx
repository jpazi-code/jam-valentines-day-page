"use client";

import React from "react";
import travel from "../../../assets/travel.png";
import money from "../../../assets/money.png";
import swe from "../../../assets/swe.jpg";

export function Layout10() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              ive always dreamed of NOT working in the philippines.
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              im pretty sure we both know that the salary for biochemists and
              computer engineers is pretty ass in the philippines.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src={travel}
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  travel goals
                </h6>
                <p>
                  i wanna go to japan please please please but I wanna live in
                  america
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <img
                    src={money}
                    className="size-12"
                    alt="Relume logo 1"
                  />
                </div>
                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl">
                  we need to be super super rich
                </h6>
                <p>
                  i want to buy a lot of groceries and other stuff like valorant skins or smth
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={swe}
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
