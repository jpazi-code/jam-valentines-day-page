"use client";

import React from "react";
import fifteen from "../../../assets/pics/wbsite/15.jpg";
import sixteen from "../../../assets/pics/wbsite/16.jpg";
import seventeen from "../../../assets/pics/wbsite/17.jpg";
import eighteen from "../../../assets/pics/wbsite/18.jpg";


export function Gallery4_2() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
        </div>
        <div className="grid grid-cols-2 items-start justify-center gap-6 md:gap-8 lg:grid-cols-4">
          <a href="#">
            <img
              src={fifteen}
              alt="Relume placeholder image 1"
              className="size-full object-cover"
            />
          </a>
          <a href="#">
            <img
              src= {sixteen}
              alt="Relume placeholder image 2"
              className="size-full object-cover"
            />
          </a>
          <a href="#">
            <img
              src= {seventeen}
              alt="Relume placeholder image 3"
              className="size-full object-cover"
            />
          </a>
          <a href="#">
            <img
              src=  {eighteen}
              alt="Relume placeholder image 4"
              className="size-full object-cover"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
