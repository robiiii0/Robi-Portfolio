"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import img2 from "public/Trello.png";
import img3 from "@/public/gk.png";
import img1 from "public/image.png";
import img4 from "public/HiddenHills.png";
import img5 from "public/IROC.png";
import { Transition } from "@/components/utils";
import { useRouter } from "next/navigation";
import { JobCardComponent } from "./Modules/index";

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

        <JobCardComponent.JobCardRight
          resize={5}
          title="Réalisation de composants réactifs pour le site web et les produits d'Eloken"
          englishTitle="Realization of Responsive Components for Eloken's Website and Products"
          description="Dans le cadre du projet de développement web d'Eloken, j'ai réalisé des composants réactifs pour leur site web et les produits présentés sur leur plateforme en ligne. En appliquant leur expertise en développement front-end."
          englishDescription="In the context of Eloken, the web development project involved the realization of responsive components for both their website and the products featured on their online platform. By applying their expertise in front-end development."
          imgSrc={img1}
          competences={["Next.js", "Tailwind CSS"]}
          route="https://eloken.com"
        />
        <JobCardComponent.JobCardLeft
          resize={5}
          title="Création d'un clone de haute qualité de Trello"
          englishTitle="Creating a High-Quality Clone of Trello"
          description="Dans le cadre de mon portfolio, j'ai entrepris le projet de créer un clone du célèbre site web Trello. Tout au long de cette entreprise, j'ai développé une interface réactive et intuitive qui reproduit fidèlement les fonctionnalités principales de Trello."
          englishDescription="In the context of my portfolio, I undertook the project of creating a clone of the renowned website Trello. Throughout this endeavor, I successfully developed a responsive and intuitive interface that faithfully replicated the core features and functionalities of Trello."
          route="https://trello.com"
          competences={["Next.js", "Tailwind CSS"]}
          imgSrc={img2}
        />

        <JobCardComponent.JobCardRight
          resize={2}
          title="Réalisation d'une application mobile chez GK"
          englishTitle="Development of a Mobile Application at GK"
          description="Pendant une période de 4 mois, j'ai réalisé un stage chez GK, où j'ai été chargé de développer une application mobile. Malheureusement, en raison de son état actuel de développement, je ne suis pas en mesure de présenter des images de l'application."
          englishDescription="During a 4-month period, I completed an internship at GK, where I was tasked with developing a mobile application. Unfortunately, due to its current development stage, I am unable to showcase any images of the application."
          imgSrc={img3}
          competences={["React Native"]}
          route="#"
        />
        <JobCardComponent.JobCardLeft
          resize={3}
          title="Collaboration avec HiddensHills"
          englishTitle="Collaboration with HiddensHills"
          description="Lors d'une mission en freelance j'ai dû concevoir de nouvelles fonctionnalités pour le site E-commerce de HiddensHills, une société basée à Los Angeles, je me suis donc occupé de toute la partie front-end."
          englishDescription="During a freelance mission I had to design new features for the E-commerce site of HiddensHills, a company based in Los Angeles, so I took care of the entire front-end part."
          route="hidden-hills.vercel.app"
          competences={["Next.js", "Tailwind CSS", "English"]}
          imgSrc={img4}
        />
        <JobCardComponent.JobCardRight
          resize={3}
          title="Developpement Full-Stack Chez IROC"
          englishTitle="Full-Stack Development at IROC"
          description="Pendant une période de 1 mois, j'ai réalisé une mission en freelance chez IROC, où j'ai été chargé de développer de nouvelles features en front-end et en back-end ainsi que de maintenanir le back-end et la base de donnée de l'application"
          englishDescription="During 1 month, I carried out a freelance mission at IROC, where I was responsible for developing new front-end and back-end features as well as maintaining the back-end and the application database"
          imgSrc={img5}
          competences={["React.js", "MongoDb", "AWS", "Python"]}
          route="https://www.iroc.app/"
        />

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
