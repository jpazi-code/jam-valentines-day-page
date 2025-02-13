"use client";

import React from "react";
import eleven from "../../../assets/pics/wbsite/11.jpg";
import twelve from "../../../assets/pics/wbsite/12.jpg";
import thirteen from "../../../assets/pics/wbsite/13.jpg";
import fourteen from "../../../assets/pics/wbsite/14.jpg";


export function Gallery4_1() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
        </div>
        <div className="grid grid-cols-2 items-start justify-center gap-6 md:gap-8 lg:grid-cols-4">
          <a href="#">
            <img
              src={eleven}
              alt="Relume placeholder image 1"
              className="size-full object-cover"
            />
          </a>
          <a href="#">
            <img
              src= {twelve}
              alt="Relume placeholder image 2"
              className="size-full object-cover"
            />
          </a>
          <a href="#">
            <img
              src={thirteen}
              alt="Relume placeholder image 3"
              className="size-full object-cover"
            />
          </a>
          <a href="#">
            <img
              src={fourteen}
              alt="Relume placeholder image 4"
              className="size-full object-cover"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
