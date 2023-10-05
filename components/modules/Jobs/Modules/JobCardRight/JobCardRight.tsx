"use client";
import React, { useEffect, useState } from "react";
import { Transition } from "@/components/utils";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface JobCardRightProps {
  title: string;
  englishTitle: string;
  description: string;
  englishDescription: string;
  imgSrc: any;
  competences: string[];
  route: string;
  resize: number;
}

export default function JobCardRight({
  title,
  englishTitle,
  description,
  englishDescription,
  imgSrc,
  competences,
  route,
  resize,
}: JobCardRightProps) {
  const router = useRouter();
  const [isFrench, setIsFrench] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const userLang = navigator.language;

    if (userLang.startsWith("fr")) {
      setIsFrench(true);
    } else {
      setIsFrench(false);
    }
  }, []);

  return (
    <div>
      <Transition.revealFromLeft>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-10/12 mx-auto" />
      </Transition.revealFromLeft>

      <div className="flex flex-col lg:flex-row justify-center lg:justify-between w-screen px-6 space-y-10 lg:w-3/4 mx-auto lg:gap-8 items-center">
        <div className="w-full lg:w-1/3">
          <Transition.revealFromLeft>
            <p className="font-Monserat text-base md:text-2xl px-4 mt-4 md:mt-2 font-bold mb-4 lg:mb-8">
              {isFrench ? title : englishTitle}
            </p>
          </Transition.revealFromLeft>
          <Transition.revealFromLeft>
            <p className="font-Monserat text-sm md:text-lg px-4  mt-12 md:mt-0">
              {isFrench ? description : englishDescription}
            </p>
          </Transition.revealFromLeft>
          <div className="grid grid-cols-3 space-y-3 items-center text-sm md:text-lg space-x-5 mt-12 md:mt-5 ">
            {competences.map((competence, index) => (
              <Transition.revealFromLeft key={index}>
                <p
                  key={index}
                  className="rounded-2xl bg-gray-500 py-2 text-center text-white"
                >
                  {competence}
                </p>
              </Transition.revealFromLeft>
            ))}
          </div>
        </div>
        <div className="hover:scale-110 transition duration-300 text-sm mt-12 md:mt-0 md:text-lg px-8 ">
          <button
            onClick={() => router.push(route)}
            className=" hover:scale-110 transition duration-300  mt-12 md:mt-0"
          >
            <Transition.revealFromLeft>
              <Image
                src={imgSrc}
                width={imgSrc.width / resize}
                height={imgSrc.height}
                alt="/"
              />
            </Transition.revealFromLeft>
          </button>
        </div>
      </div>
    </div>
  );
}
