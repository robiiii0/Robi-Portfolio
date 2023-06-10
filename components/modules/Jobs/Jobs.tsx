import React from "react";
import Image from "next/image";
import img2 from "public/Trello.png";
import img1 from "public/image.png";
import { Transition } from "@/components/utils";

export default function Jobs() {
  return (
    <div className="mt-[10rem]">
      <Transition.reveal>
        <h1 className="text-3xl font-bold text-gray-900 text-center">Jobs</h1>
      </Transition.reveal>

      <div>
        <Transition.reveal>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-10/12 mx-auto" />
        </Transition.reveal>

        <div className="flex flex-col lg:flex-row justify-between w-12/12 lg:w-3/4 mx-auto lg:gap-8 items-center">
          <div className="w-full lg:w-1/3">
            <Transition.reveal>
              <p className="font-Monserat  text-base  md:text-2xl mt-12 md:mt-24 font-bold mb-4 lg:mb-8">
                Realization of Responsive Components for Eloken&apos;s Website
                and Products
              </p>
            </Transition.reveal>
            <Transition.reveal>
              <p className=" font-Monserat text-sm  md:text-lg mt-12 md:mt-24">
                In the context of Eloken, the web development project involved
                the realization of responsive components for both their website
                and the products featured on their online platform. By applying
                their expertise in front-end development.
              </p>
            </Transition.reveal>
            <div className="flex  text-sm  md:text-lg mt-12 md:mt-5">
              <p className="rounded-2xl bg-gray-500 py-2 px-4 text-white">
                Next.js
              </p>
              <p className="rounded-2xl bg-gray-500 py-2 px-4 text-white ml-5">
                Tailwind
              </p>
            </div>
          </div>

          <a
            href="https://eloken.com"
            className="hover:scale-110 transition duration-300 text-sm mt-12 md:mt-0 md:text-lg "
          >
            <Transition.reveal>
              <Image
                src={img1}
                width={img1.width / 5}
                height={img1.height}
                alt="/"
              />
            </Transition.reveal>
          </a>
        </div>
      </div>
      <div>
        <Transition.reveal>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-10/12 mx-auto" />
        </Transition.reveal>
        <div className="flex flex-col-reverse lg:flex-row justify-between w-11/12 lg:w-3/4 mx-auto lg:gap-8 items-center">
          <a
            href="https://trello.com"
            className="hover:scale-110 transition duration-300  mt-12 md:mt-0"
          >
            <Transition.reveal>
              <Image
                src={img2}
                width={img2.width / 5}
                height={img2.height}
                alt="/"
              />
            </Transition.reveal>
          </a>
          <div className="w-full lg:w-1/3">
            <Transition.reveal>
              <p className="font-Monserat text-base  md:text-lg mt-12 md:mt-24 font-bold mb-4 lg:mb-8">
                Creating a High-Quality Clone of Trello
              </p>
            </Transition.reveal>
            <Transition.reveal>
              <p className="font-Monserat text-sm  md:text-lg mt-5 md:mt-12">
                In the context of my portfolio, I undertook the project of
                creating a clone of the renowned website Trello. Throughout this
                endeavor, I successfully developed a responsive and intuitive
                interface that faithfully replicated the core features and
                functionalities of Trello.
              </p>
            </Transition.reveal>
            <div className="flex text-sm md:text-lg mt-5 md:mt-24" >
              <Transition.reveal>
                <p className="rounded-2xl bg-gray-500 py-2 px-4 text-white ">
                  Next.js
                </p>
              </Transition.reveal>
              <Transition.reveal>
                <p className="rounded-2xl bg-gray-500 py-2 px-4 text-white ml-5">
                  Tailwind
                </p>
              </Transition.reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
