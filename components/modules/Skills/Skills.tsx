import React from "react";
import Image from "next/image";
import { Transition } from "@/components/utils";

export default function Skills() {
  return (
      <div className="w-3/4 mx-auto text-center mt-[-5rem]">
        <Transition.reveal>
          <h1 className="font-bold">The programming languages I practice.</h1>
        </Transition.reveal>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:flex flex-wrap justify-center gap-4 mt-8">
          <div className="flex flex-col items-center">
            <Transition.reveal>
              <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
                  alt="/"
                  width={100}
                  height={100}
              />
            </Transition.reveal>
            <Transition.reveal>
              <p className="font-bold mt-2">JavaScript</p>
            </Transition.reveal>
          </div>

          <div className="flex flex-col items-center">
            <Transition.reveal>
              <Image
                  src="https://www.svgrepo.com/show/354113/nextjs-icon.svg"
                  alt="/"
                  width={100}
                  height={100}
              />
            </Transition.reveal>
            <Transition.reveal>
              <p className="font-bold mt-2">Next.js</p>
            </Transition.reveal>
          </div>

          <div className="flex flex-col items-center">
            <Transition.reveal>
              <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png"
                  alt="/"
                  width={90}
                  height={100}
              />
            </Transition.reveal>
            <Transition.reveal>
              <p className="font-bold mt-2">C++</p>
            </Transition.reveal>
          </div>

          <div className="flex flex-col items-center">
            <Transition.reveal>
              <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png"
                  alt="/"
                  width={115}
                  height={100}
              />
            </Transition.reveal>
            <Transition.reveal>
              <p className="font-bold mt-2">React.js</p>
            </Transition.reveal>
          </div>

          <div className="flex flex-col items-center">
            <Transition.reveal>
              <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
                  alt="/"
                  width={100}
                  height={100}
              />
            </Transition.reveal>
            <Transition.reveal>
              <p className="font-bold mt-2">Tailwind CSS</p>
            </Transition.reveal>
          </div>
        </div>
      </div>
  );
}
