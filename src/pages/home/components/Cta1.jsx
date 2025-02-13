"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import six from "../../../assets/pics/wbsite/6.jpg";

export function Cta1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              another pic.
            </h2>
            <p className="md:text-md">
              ITS KINDA HARD TO THINK OF WHAT ELSE TO ADD. IM REALLY NERVOUS ITS MY FIRST TIME MAKING A WEBSITE SO LIKE ALL OF MY BRAIN POWER IS GOING TOWARDS HOW TO MAKE THIS LOOK GOOD. I HOPE IT LOOKS GOOD. I HOPE YOU LIKE IT. I HOPE YOU LIKE ME
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            </div>
          </div>
          <div>
            <img
              src={six}
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
