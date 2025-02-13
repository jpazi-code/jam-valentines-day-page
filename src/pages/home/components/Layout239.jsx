"use client";

import React from "react";
import three from "../../../assets/pics/wbsite/3.jpg";
import four from "../../../assets/pics/wbsite/4.jpg";
import five from "../../../assets/pics/wbsite/5.jpg";

export function Layout239() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                moments we spent together
              </h2>
              <p className="md:text-md">
                maybe top 3 moments ever but idk its up to u too because its
                subjective
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-6 mb-6 md:mb-8">
                <img
                  src={three}
                  alt="Relume placeholder image"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                NATMUS
              </h3>
              <p>
                we went to natmus, i kinda got tired from walking because we
                didnt know how to go there. ESPECIALLY PAUWI. please change ur
                phone plan so u can buy normal data because we BOTH need google
                maps
              </p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-6 mb-6 md:mb-8">
                <img
                  src={four}
                  alt="Relume placeholder image"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                jan 4
              </h3>
              <p>i like going to malls, especially greenbelt, at night</p>
            </div>
            <div className="flex w-full flex-col items-center text-center">
              <div className="rb-6 mb-6 md:mb-8">
                <img
                  src={five}
                  alt="Relume placeholder image"
                />
              </div>
              <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                MANILA ZOO
              </h3>
              <p>
                the animals were kinda boring and they lowkey look abused. pero
                at least nakita natin ung mga kalahi mo
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8" />
        </div>
      </div>
    </section>
  );
}
