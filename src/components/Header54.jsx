"use client";

import React from "react";
import japanImage from '../assets/japan.jpeg'; // Adjust the path


export function Header54() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10">
        <div className="w-full max-w-lg">
          <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl text-white">
            Our Future Together
          </h1>
          <p className="text-text-alternative md:text-md text-white">
            i got a lotta plans, and so do u
          </p>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src= {japanImage}
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
