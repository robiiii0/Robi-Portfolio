"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import img2 from "public/Trello.png";
import img1 from "public/image.png";
import img3 from "@/public/gk.png";
import { Transition } from "@/components/utils";
import { useRouter } from "next/navigation";

export default function Jobs() {
  const router = useRouter();
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
    <>
      <div className={`mt-24 md:mt-[-3rem] lg:mt-[-5rem]`}>
        <Transition.revealFromLeft>
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            {isFrench ? "Emplois" : "Jobs"}
          </h1>
        </Transition.revealFromLeft>

        <div>
          <Transition.revealFromLeft>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-10/12 mx-auto" />
          </Transition.revealFromLeft>

          <div className="flex flex-col lg:flex-row justify-between w-screen px-6 lg:w-3/4 mx-auto lg:gap-8 items-center">
            <div className="w-full lg:w-1/3">
              <Transition.revealFromLeft>
                <p className="font-Monserat text-base md:text-2xl px-4 mt-4 md:mt-24 font-bold mb-4 lg:mb-8">
                  {isFrench
                    ? "Réalisation de composants réactifs pour le site web et les produits d'Eloken"
                    : "Realization of Responsive Components for Eloken's Website and Products"}
                </p>
              </Transition.revealFromLeft>
              <Transition.revealFromLeft>
                <p className="font-Monserat text-sm md:text-lg px-4  mt-12 md:mt-0">
                  {isFrench
                    ? "Dans le cadre du projet de développement web d'Eloken, j'ai réalisé des composants réactifs pour leur site web et les produits présentés sur leur plateforme en ligne. En appliquant leur expertise en développement front-end."
                    : "In the context of Eloken, the web development project involved the realization of responsive components for both their website and the products featured on their online platform. By applying their expertise in front-end development."}
                </p>
              </Transition.revealFromLeft>
              <div className="flex text-sm md:text-lg mt-12 md:mt-5 ">
                <p className="rounded-2xl bg-gray-500 py-2 px-4 text-white ">
                  Next.js
                </p>
                <p className="rounded-2xl bg-gray-500 py-2 px-4 text-white ml-5">
                  Tailwind
                </p>
              </div>
            </div>

            <button
              onClick={() => router.push("https://eloken.com")}
              className="hover:scale-110 transition duration-300 text-sm mt-12 md:mt-0 md:text-lg px-4 "
            >
              <Transition.revealFromLeft>
                <Image
                  src={img1}
                  width={img1.width / 5}
                  height={img1.height}
                  alt="/"
                />
              </Transition.revealFromLeft>
            </button>
          </div>
        </div>

        <div>
          <Transition.revealFromLeft>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700  w-10/12 mx-auto" />
          </Transition.revealFromLeft>
          <div className="flex flex-col-reverse lg:flex-row justify-between px-6  w-11/12 lg:w-3/4 mx-auto lg:gap-8 items-center">
            <button
              onClick={() => router.push("https://trello.com")}
              className="hover:scale-110 transition duration-300  mt-12 md:mt-0"
            >
              <Transition.revealFromLeft>
                <Image
                  src={img2}
                  width={img2.width / 5}
                  height={img2.height}
                  alt="/"
                />
              </Transition.revealFromLeft>
            </button>
            <div className="w-full lg:w-1/3">
              <Transition.revealFromLeft>
                <p className="font-Monserat text-base md:text-lg mt-12 md:mt-24 font-bold mb-4 lg:mb-8">
                  {isFrench
                    ? "Création d'un clone de haute qualité de Trello"
                    : "Creating a High-Quality Clone of Trello"}
                </p>
              </Transition.revealFromLeft>
              <Transition.revealFromLeft>
                <p className="font-Monserat text-sm md:text-lg mt-5 md:mt-12">
                  {isFrench
                    ? "Dans le cadre de mon portfolio, j'ai entrepris le projet de créer un clone du célèbre site web Trello. Tout au long de cette entreprise, j'ai développé une interface réactive et intuitive qui reproduit fidèlement les fonctionnalités principales de Trello."
                    : "In the context of my portfolio, I undertook the project of creating a clone of the renowned website Trello. Throughout this endeavor, I successfully developed a responsive and intuitive interface that faithfully replicated the core features and functionalities of Trello."}
                </p>
              </Transition.revealFromLeft>
              <div className="flex text-sm md:text-lg mt-5 md:mt-24">
                <Transition.revealFromLeft>
                  <p className="rounded-2xl bg-gray-500 py-2 px-4 text-white">
                    Next.js
                  </p>
                </Transition.revealFromLeft>
                <Transition.revealFromLeft>
                  <p className="rounded-2xl bg-gray-500 py-2 px-4 text-white ml-5">
                    Tailwind
                  </p>
                </Transition.revealFromLeft>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between w-screen px-6 lg:w-3/4 mx-auto lg:gap-8 items-center">
          <div className="w-full lg:w-1/3">
            <Transition.revealFromLeft>
              <p className="font-Monserat text-base md:text-2xl px-4 mt-4 md:mt-24 font-bold mb-4 lg:mb-8">
                {isFrench
                  ? "Réalisation d'une application mobile chez GamersKingdoms"
                  : "Development of a Mobile Application at GamersKingdoms"}
              </p>
            </Transition.revealFromLeft>
            <Transition.revealFromLeft>
              <p className="font-Monserat text-sm md:text-lg px-4 mt-12 md:mt-0">
                {isFrench
                  ? "Pendant une période de 4 mois, j'ai réalisé un stage chez GamersKingdoms, où j'ai été chargé de développer une application mobile. Malheureusement, en raison de son état actuel de développement, je ne suis pas en mesure de présenter des images de l'application."
                  : "During a 4-month period, I completed an internship at GamersKingdoms, where I was tasked with developing a mobile application. Unfortunately, due to its current development stage, I am unable to showcase any images of the application."}
              </p>
            </Transition.revealFromLeft>
            <div className="flex text-sm md:text-lg mt-12 md:mt-5 ">
              <p className="rounded-2xl bg-gray-500 py-2 px-4 text-white ">
                React native
              </p>
            </div>
          </div>

          <div className="hover:scale-110 transition duration-300 text-sm mt-12 md:mt-0 md:text-lg px-4 ">
            <Transition.revealFromLeft>
              <Image
                src={img3}
                width={img3.width / 3}
                height={img3.height}
                alt="/"
              />
            </Transition.revealFromLeft>
          </div>
        </div>

        <div className="mt-36"></div>
        <div>
          <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                {isFrench
                  ? "© 2023 Robin Chabert™. Tous les droits sont réservés."
                  : "© 2023 Robin Chabert™. All Rights Reserved."}
              </span>
              <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                  <button
                    onClick={() => router.push("/")}
                    className="mr-4 hover:underline md:mr-6"
                  >
                    {isFrench ? "Accueil" : "Home"}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => router.push("/aboutme")}
                    className="mr-4 hover:underline md:mr-6 "
                  >
                    {isFrench ? "À propos de moi" : "About me"}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => router.push("/contact")}
                    className="hover:underline"
                  >
                    {isFrench ? "Contact" : "Contact"}
                  </button>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
