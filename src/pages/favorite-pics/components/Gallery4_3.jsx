"use client";

import React from "react";
import nineteen from "../../../assets/pics/wbsite/19.jpg";
import twenty from "../../../assets/pics/wbsite/20.jpg";
import twentyone from "../../../assets/pics/wbsite/21.jpg";
import twentytwo from "../../../assets/pics/wbsite/22.jpg";

export function Gallery4_3() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
        </div>
        <div className="grid grid-cols-2 items-start justify-center gap-6 md:gap-8 lg:grid-cols-4">
          <a href="#">
            <img
              src=  {nineteen}
              alt="Relume placeholder image 1"
              className="size-full object-cover"
            />
          </a>
          <a href="#">
            <img
              src= {twenty}
              alt="Relume placeholder image 2"
              className="size-full object-cover"
            />
          </a>
          <a href="#">
            <img
              src= {twentyone}
              alt="Relume placeholder image 3"
              className="size-full object-cover"
            />
          </a>
          <a href="#">
            <img
              src= {twentytwo}
              alt="Relume placeholder image 4"
              className="size-full object-cover"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
