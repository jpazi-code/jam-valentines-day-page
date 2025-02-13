"use client";

import React from "react";
import two from "../../../assets/pics/wbsite/2.jpg";

export function Layout192() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src={two}
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              another picture of u
            </h2>
            <p className="md:text-md">
              i aspire to be as cute as u one day. wait i thought of a poem
              <br /><br />
              jasmine, o jasmine <br />
              hot like the sun <br />
              she likes warm water <br />
              shes very fun <br />
              lives kinda far away <br />
              takes the uv <br />
              but i am just happy that she<br />
              is with me <br />
              <br />
              dba ang galing ko. thank u very much
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
