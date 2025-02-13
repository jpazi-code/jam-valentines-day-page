"use client";

import React from "react";
import one from "../../../assets/pics/wbsite/1.jpg";

export function Header36() {
  return (
    <section
      id="relume"
      className="grid grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:grid-cols-2 lg:pt-0"
    >
      <div className="mx-[5%] sm:max-w-md md:justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
        <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
          this is u, jasmine martha e. abaquita
        </h1>
        <p className="md:text-md">
          cute right? i agree. sorry for not making you a website for christmas.
          i actually tried but i didnt know anything about javascript or
          deploying a website and i felt so dumb. i hope this impresses u and u
          give me 1029838127 kisses.
        </p>
      </div>
      <div>
        <img
          src={one}
          alt="Relume placeholder image"
          className="w-full object-cover lg:h-screen lg:max-h-[60rem]"
        />
      </div>
    </section>
  );
}
