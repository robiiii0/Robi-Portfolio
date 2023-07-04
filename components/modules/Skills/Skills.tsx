import React from "react";
import Image from "next/image";
import { Transition } from "@/components/utils";

export default function Skills() {
  return (
      <>
        <div className="w-screen h-screen flex flex-col justify-center items-center">
          <Transition.revealFromLeft>
            <h1 className="font-bold text-center md:text-left md:mt-0 mt-36">
              The programming languages I practice.
            </h1>

          </Transition.revealFromLeft>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
            <div className="flex flex-col items-center">
              <Transition.revealFromLeft>
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
                    alt="/"
                    width={100}
                    height={100}
                />
              </Transition.revealFromLeft>
              <Transition.revealFromLeft>
                <p className="font-bold mt-2">JavaScript</p>
              </Transition.revealFromLeft>
            </div>

            <div className="flex flex-col items-center">
              <Transition.revealFromLeft>
                <Image
                    src="https://www.svgrepo.com/show/354113/nextjs-icon.svg"
                    alt="/"
                    width={100}
                    height={100}
                />
              </Transition.revealFromLeft>
              <Transition.revealFromLeft>
                <p className="font-bold mt-2">Next.js</p>
              </Transition.revealFromLeft>
            </div>

            <div className="flex flex-col items-center">
              <Transition.revealFromLeft>
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png"
                    alt="/"
                    width={90}
                    height={100}
                />
              </Transition.revealFromLeft>
              <Transition.revealFromLeft>
                <p className="font-bold mt-2">C++</p>
              </Transition.revealFromLeft>
            </div>

            <div className="flex flex-col items-center">
              <Transition.revealFromLeft>
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png"
                    alt="/"
                    width={115}
                    height={100}
                />
              </Transition.revealFromLeft>
              <Transition.revealFromLeft>
                <p className="font-bold mt-2">React.js</p>
              </Transition.revealFromLeft>
            </div>

            <div className="flex flex-col items-center">
              <Transition.revealFromLeft>
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
                    alt="/"
                    width={100}
                    height={100}
                />
              </Transition.revealFromLeft>
              <Transition.revealFromLeft>
                <p className="font-bold mt-2">Tailwind CSS</p>
              </Transition.revealFromLeft>
            </div>
          </div>
        </div>
      </>
  );
}
