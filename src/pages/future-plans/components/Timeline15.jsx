"use client";
import car from "../../../assets/car.jpeg";
import house from "../../../assets/house.jpg";
import airfryer1 from "../../../assets/airfryer1.jpeg";
import airfryer2 from "../../../assets/airfryer2.jpeg";
import airfryer3 from "../../../assets/airfryer3.jpg";

import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import React, { useState } from "react";
import { RxChevronRight } from "react-icons/rx";

const useTabAnimation = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].value);

  const isTabActive = (index) => {
    const activeIndex = tabs.findIndex((tab) => tab.value === activeTab);
    return index <= activeIndex;
  };

  const progressWidth = () => {
    const activeIndex = tabs.findIndex((tab) => tab.value === activeTab);
    return `${(100 / (tabs.length * 2)) * (activeIndex * 2 + 1)}%`;
  };

  const circleClassName = (index) => {
    return `z-20 flex size-[0.9375rem] flex-none items-center justify-center rounded-full shadow-[0_0_0_8px_white] transition-colors duration-300 ${
      isTabActive(index) ? "bg-neutral-black" : "bg-neutral-light"
    }`;
  };

  const triggerClassName = (index) => {
    return `relative flex flex-1 flex-col items-center justify-center gap-2 border-0 px-0 transition-colors duration-300 data-[state=active]:bg-transparent ${
      isTabActive(index)
        ? "data-[state=active]:text-text-primary"
        : "text-neutral-light"
    }`;
  };

  return {
    activeTab,
    setActiveTab,
    progressWidth,
    circleClassName,
    triggerClassName,
  };
};

export function Timeline15() {
  const tabAnimation = useTabAnimation({
    tabs: [
      {
        value: "tab-one",
        trigger: "Date",
        content: {
          date: "Date",
          heading: "Long heading is what you see here in this feature section",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          buttons: [
            { title: "Button", variant: "secondary" },
            {
              title: "Button",
              variant: "link",
              size: "link",
              iconRight: <RxChevronRight />,
            },
          ],
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Relume placeholder image 1",
          },
        },
      },
      {
        value: "tab-two",
        trigger: "Date",
        content: {
          date: "Date",
          heading: "Long heading is what you see here in this feature section",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          buttons: [
            { title: "Button", variant: "secondary" },
            {
              title: "Button",
              variant: "link",
              size: "link",
              iconRight: <RxChevronRight />,
            },
          ],
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Relume placeholder image 2",
          },
        },
      },
      {
        value: "tab-three",
        trigger: "Date",
        content: {
          date: "Date",
          heading: "Long heading is what you see here in this feature section",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          buttons: [
            { title: "Button", variant: "secondary" },
            {
              title: "Button",
              variant: "link",
              size: "link",
              iconRight: <RxChevronRight />,
            },
          ],
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Relume placeholder image 3",
          },
        },
      },
      {
        value: "tab-four",
        trigger: "Date",
        content: {
          date: "Date",
          heading: "Long heading is what you see here in this feature section",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          buttons: [
            { title: "Button", variant: "secondary" },
            {
              title: "Button",
              variant: "link",
              size: "link",
              iconRight: <RxChevronRight />,
            },
          ],
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Relume placeholder image 4",
          },
        },
      },
      {
        value: "tab-five",
        trigger: "Date",
        content: {
          date: "Date",
          heading: "Long heading is what you see here in this feature section",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
          buttons: [
            { title: "Button", variant: "secondary" },
            {
              title: "Button",
              variant: "link",
              size: "link",
              iconRight: <RxChevronRight />,
            },
          ],
          image: {
            src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
            alt: "Relume placeholder image 5",
          },
        },
      },
    ],
  });
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative">
        <div
          className="absolute bottom-[99px] z-10 h-[3px] bg-neutral-black transition-[width] duration-300 md:bottom-[3.5625rem]"
          style={{ width: tabAnimation.progressWidth() }}
        />
        <Tabs
          defaultValue="tab-one"
          onValueChange={tabAnimation.setActiveTab}
          className="relative flex flex-col"
        >
          <TabsContent
            value="tab-one"
            className="grid grid-cols-1 gap-x-12 gap-y-12 data-[state=active]:animate-tabs md:grid-cols-2 md:items-center md:gap-y-16 lg:gap-x-20"
          >
            <div>
              <h3 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
                2028
              </h3>
              <h4 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                This is when we'll buy our first house
              </h4>
              <p className="md:text-md">im not delusional</p>
            </div>
            <div>
              <img
                src={house}
                alt="Relume placeholder image 1"
                className="w-full object-cover"
              />
            </div>
          </TabsContent>
          <TabsContent
            value="tab-two"
            className="grid grid-cols-1 gap-x-12 gap-y-12 data-[state=active]:animate-tabs md:grid-cols-2 md:items-center md:gap-y-16 lg:gap-x-20"
          >
            <div>
              <h3 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
                2030
              </h3>
              <h4 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                This is when we'll buy an air fryer
              </h4>
              <p className="md:text-md">
                This date marks a significant milestone in our relationship.
                Let's cherish every moment leading up to it.
              </p>
              
            </div>
            <div>
              <img
                src={airfryer1}
                alt="Relume placeholder image 2"
                className="w-full object-cover"
              />
            </div>
          </TabsContent>
          <TabsContent
            value="tab-three"
            className="grid grid-cols-1 gap-x-12 gap-y-12 data-[state=active]:animate-tabs md:grid-cols-2 md:items-center md:gap-y-16 lg:gap-x-20"
          >
            <div>
              <h3 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
                2034
              </h3>
              <h4 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                This is when we'll buy our first car.
              </h4>
              <p className="md:text-md">
                I'll brag about it to my friends and family. I'll be so proud of us.
              </p>
            </div>
            <div>
              <img
                src={car}
                alt="Relume placeholder image 3"
                className="w-full object-cover"
              />
            </div>
          </TabsContent>
          <TabsContent
            value="tab-four"
            className="grid grid-cols-1 gap-x-12 gap-y-12 data-[state=active]:animate-tabs md:grid-cols-2 md:items-center md:gap-y-16 lg:gap-x-20"
          >
            <div>
              <h3 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
                2037
              </h3>
              <h4 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                This is when we'll buy our second air fryer.
              </h4>
              <p className="md:text-md">
                This date signifies the beginning of our next chapter together.
                A small, yet significant upgrade from our previous air fryer.
              </p>
            </div>
            <div>
              <img
                src={airfryer2}
                alt="Relume placeholder image 4"
                className="w-full object-cover"
              />
            </div>
          </TabsContent>
          <TabsContent
            value="tab-five"
            className="grid grid-cols-1 gap-x-12 gap-y-12 data-[state=active]:animate-tabs md:grid-cols-2 md:items-center md:gap-y-16 lg:gap-x-20"
          >
            <div>
              <h3 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
                2038
              </h3>
              <h4 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                The third air fryer.
              </h4>
              <p className="md:text-md">
                This will be a massive jump from the previous one, including two compartments for extra air fryer capacity. We'll be able to cook two meals at once. It's a game changer.
              </p>
            </div>
            <div>
              <img
                src={airfryer3}
                alt="Relume placeholder image 5"
                className="w-full object-cover"
              />
            </div>
          </TabsContent>
          <TabsList className="no-scrollbar relative mb-12 ml-[-5vw] mt-16 flex w-screen items-center justify-start border-b border-b-transparent px-[5vw] md:mb-0 md:ml-0 md:w-auto md:justify-between md:px-0">
            <TabsTrigger
              value="tab-one"
              className={tabAnimation.triggerClassName(0)}
            >
              <div className="absolute left-0 top-3.5 z-20 h-[6px] w-16 bg-gradient-to-l from-transparent to-background-primary" />
              <div className="flex w-full items-center">
                <div className="h-[3px] w-full bg-neutral-lighter" />
                <div className={tabAnimation.circleClassName(0)} />
                <div className="h-[3px] w-full bg-neutral-lighter" />
              </div>
              <span className="text-xl font-bold md:text-2xl">
                2028
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="tab-two"
              className={tabAnimation.triggerClassName(1)}
            >
              <div className="flex w-full items-center">
                <div className="h-[3px] w-full bg-neutral-lighter" />
                <div className={tabAnimation.circleClassName(1)} />
                <div className="h-[3px] w-full bg-neutral-lighter" />
              </div>
              <span className="text-xl font-bold md:text-2xl">
                2030
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="tab-three"
              className={tabAnimation.triggerClassName(2)}
            >
              <div className="flex w-full items-center">
                <div className="h-[3px] w-full bg-neutral-lighter" />
                <div className={tabAnimation.circleClassName(2)} />
                <div className="h-[3px] w-full bg-neutral-lighter" />
              </div>
              <span className="text-xl font-bold md:text-2xl">
                2034
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="tab-four"
              className={tabAnimation.triggerClassName(3)}
            >
              <div className="flex w-full items-center">
                <div className="h-[3px] w-full bg-neutral-lighter" />
                <div className={tabAnimation.circleClassName(3)} />
                <div className="h-[3px] w-full bg-neutral-lighter" />
              </div>
              <span className="text-xl font-bold md:text-2xl">
                2037
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="tab-five"
              className={tabAnimation.triggerClassName(4)}
            >
              <div className="flex w-full items-center">
                <div className="h-[3px] w-full bg-neutral-lighter" />
                <div className={tabAnimation.circleClassName(4)} />
                <div className="h-[3px] w-full bg-neutral-lighter" />
              </div>
              <span className="text-xl font-bold md:text-2xl">
                2038
              </span>
              <div className="absolute right-0 top-3.5 z-0 h-2 w-16 bg-gradient-to-r from-transparent to-background-primary" />
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </section>
  );
}
