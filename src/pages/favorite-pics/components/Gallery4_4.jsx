"use client";

import React from "react";
import twentythree from "../../../assets/pics/wbsite/23.jpg";
import twentyfour from "../../../assets/pics/wbsite/24.jpg";
import twentyfive from "../../../assets/pics/wbsite/25.jpg";
import two from "../../../assets/pics/wbsite/2.jpg";

export function Gallery4_4() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
        </div>
        <div className="grid grid-cols-2 items-start justify-center gap-6 md:gap-8 lg:grid-cols-4">
          <>
            <img
              src= {twentythree}
              alt="Relume placeholder image 1"
              className="size-full object-cover"
            />
          </>
          <>
            <img
              src= {twentyfour}
              alt="Relume placeholder image 2"
              className="size-full object-cover"
            />
          </>
          <>
            <img
              src= {twentyfive}
              alt="Relume placeholder image 3"
              className="size-full object-cover"
            />
          </>
          <>
            <img
              src= {two}
              alt="Relume placeholder image 4"
              className="size-full object-cover"
            />
          </>
        </div>
      </div>
    </section>
  );
}
