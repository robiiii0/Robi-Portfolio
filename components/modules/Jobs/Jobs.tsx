'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import img2 from "public/Trello.png";
import img1 from "public/image.png";
import { Transition } from "@/components/utils";

export default function Jobs() {
  const [isFrench, setIsFrench] = useState(false);

  useEffect(() => {
    const userLang = navigator.language;

    if (userLang.startsWith("fr")) {
      setIsFrench(true);
    } else {
      setIsFrench(false);
    }
  }, []);

  return (
      <div className="mt-[10rem]">
        <Transition.reveal>
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            {isFrench ? "Emplois" : "Jobs"}
          </h1>
        </Transition.reveal>

        <div>
          <Transition.reveal>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-10/12 mx-auto" />
          </Transition.reveal>

          <div className="flex flex-col lg:flex-row justify-between w-screen px-6 lg:w-3/4 mx-auto lg:gap-8 items-center">
            <div className="w-full lg:w-1/3">
              <Transition.reveal>
                <p className="font-Monserat text-base md:text-2xl px-4 mt-4 md:mt-24 font-bold mb-4 lg:mb-8">
                  {isFrench
                      ? "Réalisation de composants réactifs pour le site web et les produits d'Eloken"
                      : "Realization of Responsive Components for Eloken's Website and Products"}
                </p>
              </Transition.reveal>
              <Transition.reveal>
                <p className="font-Monserat text-sm md:text-lg px-4  mt-12 md:mt-0">
                  {isFrench
                      ? "Dans le cadre du projet de développement web d'Eloken, j'ai réalisé des composants réactifs pour leur site web et les produits présentés sur leur plateforme en ligne. En appliquant leur expertise en développement front-end."
                      : "In the context of Eloken, the web development project involved the realization of responsive components for both their website and the products featured on their online platform. By applying their expertise in front-end development."}
                </p>
              </Transition.reveal>
              <div className="flex text-sm md:text-lg mt-12 md:mt-5 ">
                <p className="rounded-2xl bg-gray-500 py-2 px-4 text-white ">
                  Next.js
                </p>
                <p className="rounded-2xl bg-gray-500 py-2 px-4 text-white ml-5">
                  Tailwind
                </p>
              </div>
            </div>

            <a
                href="https://eloken.com"
                className="hover:scale-110 transition duration-300 text-sm mt-12 md:mt-0 md:text-lg px-4 "
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
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700  w-10/12 mx-auto" />
          </Transition.reveal>
          <div className="flex flex-col-reverse lg:flex-row justify-between px-6  w-11/12 lg:w-3/4 mx-auto lg:gap-8 items-center">
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
                <p className="font-Monserat text-base md:text-lg mt-12 md:mt-24 font-bold mb-4 lg:mb-8">
                  {isFrench
                      ? "Création d'un clone de haute qualité de Trello"
                      : "Creating a High-Quality Clone of Trello"}
                </p>
              </Transition.reveal>
              <Transition.reveal>
                <p className="font-Monserat text-sm md:text-lg mt-5 md:mt-12">
                  {isFrench
                      ? "Dans le cadre de mon portfolio, j'ai entrepris le projet de créer un clone du célèbre site web Trello. Tout au long de cette entreprise, j'ai développé une interface réactive et intuitive qui reproduit fidèlement les fonctionnalités principales de Trello."
                      : "In the context of my portfolio, I undertook the project of creating a clone of the renowned website Trello. Throughout this endeavor, I successfully developed a responsive and intuitive interface that faithfully replicated the core features and functionalities of Trello."}
                </p>
              </Transition.reveal>
              <div className="flex text-sm md:text-lg mt-5 md:mt-24">
                <Transition.reveal>
                  <p className="rounded-2xl bg-gray-500 py-2 px-4 text-white">
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
