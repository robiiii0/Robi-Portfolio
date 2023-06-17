"use client";
import React, { useRef, useEffect, useState } from "react";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import img1 from "@/public/78CE788D-F91A-4877-A768-A4DA0F8FB258.jpg";
import "./styles.css";
import img3 from "@/public/connexion.png";
import img4 from "@/public/developpement-web.png";
import img5 from "@/public/dev-dapplications.png";
import { Transition } from "@/components/utils";

function Section({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function App() {
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [mouseX, setMouseX] = useState(0);

  const [isFrench, setIsFrench] = useState(false);

  useEffect(() => {
    const userLang = navigator.language;

    if (userLang.startsWith("fr")) {
      console.log("Texte en français");
      setIsFrench(true);
    } else {
      console.log("Text in English");
      setIsFrench(false);
    }
  }, []);

  return (
      <div className="mt-32 md:mt-64 " id="StartBio">
        <div className="flex justify-center items-center  flex-col md:flex-row ">
          <Transition.reveal>
            <Image
                src={img1}
                alt="/"
                width={300}
                height={300}
                className="rounded-2xl"
            />
          </Transition.reveal>
          <div className="lg:ml-24 text-sm  md:text-lg">
            <Transition.reveal>
              <hr className="w-full h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-700" />
            </Transition.reveal>
            <div className="flex">
              <Transition.reveal>
                <p className="font-monserrat">
                  {isFrench ? "Prénom : " : "First Name: "}
                  <span className="text-blue-400">Robin</span>
                </p>
              </Transition.reveal>
            </div>

            <div className="flex mt-2">
              <Transition.reveal>
                <p className="font-monserrat">
                  {isFrench ? "Surnom : " : "Nickname: "}
                  <span className="text-blue-400">Rob</span>
                </p>
              </Transition.reveal>
            </div>

            <div className="flex mt-2">
              <Transition.reveal>
                <p className="font-monserrat">
                  {isFrench ? "Âge : " : "Age: "}
                  <span className="text-blue-400">20</span>
                </p>
              </Transition.reveal>
            </div>

            <div className="flex mt-2">
              <Transition.reveal>
                <p className="font-monserrat">
                  {isFrench ? "Statut : " : "Status: "}
                  <span className="text-blue-400">
              {isFrench ? "Étudiant à Epitech" : "Student at Epitech"}
            </span>
                </p>
              </Transition.reveal>
            </div>

            <div className="flex mt-2">
              <Transition.reveal>
                <p className="font-monserrat">
                  {isFrench ? "Nationalité : " : "Nationality: "}
                  <span className="text-blue-400">
              {isFrench ? "Français 🇫🇷" : "French 🇫🇷"}
            </span>
                </p>
              </Transition.reveal>
            </div>

            <div className="flex mt-2">
              <Transition.reveal>
                <p className="font-monserrat">
                  {isFrench ? "Langues parlées : " : "Spoken Languages: "}
                </p>
              </Transition.reveal>
            </div>

            <div className="flex">
              <Transition.reveal>
                <p className="font-monserrat">
                  &nbsp;&nbsp;&nbsp;&nbsp;{isFrench ? "Français :" : "French: "}&nbsp;
                </p>
              </Transition.reveal>
              <Transition.reveal>
                <p className="text-blue-400 font-monserrat">
                  {isFrench ? "langue maternelle" : "native"}
                </p>
              </Transition.reveal>
            </div>

            <div className="flex">
              <Transition.reveal>
                <p className="font-monserrat">
                  &nbsp;&nbsp;&nbsp;&nbsp;{isFrench ? "Anglais: " : "English:"}&nbsp;
                </p>
              </Transition.reveal>
              <Transition.reveal>
                <p className="text-blue-400 font-monserrat">
                  {isFrench ? "Niveau professionnel complet" : "Full professional capacity"}
                </p>
              </Transition.reveal>
            </div>

            <div className="flex mt-2">
              <Transition.reveal>
                <p className="font-monserrat">
                  {isFrench ? "Loisirs:" : "Hobbies:"}&nbsp;
                </p>
              </Transition.reveal>
              <Transition.reveal>
                <p className="text-blue-400 font-monserrat">
                  {isFrench ? "natation, ski, programmation" : "swimming, skiing, programming"}
                </p>
              </Transition.reveal>
            </div>

            <Transition.reveal>
              <hr className="w-full h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-700" />
            </Transition.reveal>

          </div>
        </div>
        <div className=" mt-12 md:mt-36 md:w-2/3 px-6 w-screen md:mx-auto">
          <div className="text-center ">
            <Transition.reveal>
              <p className="font-monserrat text-sm   md:text-lg   mt-12 md:mt-24">
                {isFrench
                    ? "Je suis actuellement en troisième année à Epitech Lyon, une école d'informatique renommée. Mon parcours à Epitech est enrichissant et stimulant, me permettant de développer mes compétences en programmation."
                    : "I am currently in my third year at Epitech Lyon, a renowned computer science school. My journey at Epitech has been enriching and stimulating, allowing me to develop my programming skills."}
              </p>
            </Transition.reveal>
          </div>
          <div className="flex justify-center mt-12 md:mt-2">
            <Transition.reveal>
              <Image
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/2/2d/Epitech.png"
                  }
                  alt={"/"}
                  width={500}
                  height={500}
              />
            </Transition.reveal>
          </div>

          <div className="font-monserrat text-sm  md:text-lg mt-12 md:mt-24 flex flex-col md:flex-row justify-between items-center">
            <div className="w-full md:w-1/2 px-4">
              <Transition.reveal>
                <p>
                  {isFrench
                      ? "Je suis actuellement en train d'étudier et de pratiquer la programmation algorithmique en langage C et C++. Ces langages sont largement utilisés dans le domaine du développement de logiciels et offrent une base solide pour la mise en œuvre d'algorithmes efficaces. En travaillant en C et C++, je suis en mesure d'améliorer mes compétences en résolution de problèmes et d'acquérir une compréhension plus approfondie des structures de données, de la gestion de la mémoire et de l'optimisation des performances. La programmation algorithmique en C et C++ me permet de relever des défis de programmation stimulants et de développer des solutions robustes."
                      : "I am currently studying and practicing algorithmic programming in C and C++. These languages are widely used in the field of software development and provide a powerful foundation for implementing efficient algorithms. By working with C and C++, I am able to enhance my problem-solving skills and gain a deeper understanding of data structures, memory management, and performance optimization. Algorithmic programming in C and C++ allows me to tackle challenging programming tasks and develop robust solutions."}
                </p>
              </Transition.reveal>
            </div>
            <Transition.reveal>
              <div className="mt-8 md:mt-0">
                <Image src={img3} alt={"/"} width={350} height={500} />
              </div>
            </Transition.reveal>
          </div>
          <div className="font-monserrat text-sm  md:text-lg mt-8 md:mt-12 w-full flex flex-col-reverse md:flex-row justify-between items-center">
            <a href="https://www.flaticon.com/fr/icones-gratuites/developpement-web">
              <Transition.reveal>
                <div className="mt-8 md:mt-24">
                  <Image src={img4} alt={"/"} width={350} height={500} />
                </div>
              </Transition.reveal>
            </a>

            <div className="w-full md:w-1/2 text-sm  md:text-lg mt-12 md:mt-24 px-4">
              <Transition.reveal>
                <p>
                  {isFrench
                      ? "Au cours des deux dernières années, je me suis plongé dans le monde du développement web, en me spécialisant en HTML, CSS, JavaScript, React, Next.js et Tailwind CSS. Ce parcours m'a permis de maîtriser l'art de créer des expériences web engageantes et interactives, en exploitant ces technologies puissantes pour construire des sites web modernes, réactifs et esthétiquement plaisants."
                      : "Over the past two years, I have been immersed in the world of web development, specializing in HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS. This journey has allowed me to master the art of creating engaging and interactive web experiences, leveraging these powerful technologies to build modern, responsive, and visually appealing websites."}
                </p>
              </Transition.reveal>
            </div>
          </div>
          <div className="font-monserrat text-sm  md:text-lg mt-12 md:mt-24 w-full flex flex-col md:flex-row justify-between items-center">
            <div className="w-full md:w-1/2 px-4">
              <Transition.reveal>
                <p>
                  {isFrench
                      ? "Au cours de mon parcours professionnel, j'ai eu l'opportunité précieuse de travailler pour une entreprise parisienne pendant une période de cinq mois. Pendant ce temps, j'ai participé au développement d'une application mobile en React Native, en me concentrant spécifiquement sur la création d'une plateforme de réseau social. Cette expérience m'a permis de plonger dans le monde du développement d'applications mobiles, en perfectionnant mes compétences en React Native et en acquérant une expérience pratique dans la création d'interfaces utilisateur intuitives et attrayantes pour une communauté sociale dynamique."
                      : "During my professional journey, I had the valuable opportunity to work for a Parisian company for a period of five months. During this time, I was involved in the development of a React Native mobile application, focusing specifically on creating a social networking platform. This experience allowed me to dive into the world of mobile app development, honing my skills in React Native and gaining hands-on experience in crafting intuitive and engaging user interfaces for a vibrant social community."}
                </p>
              </Transition.reveal>
            </div>
            <a href="https://www.flaticon.com/fr/icones-gratuites/mobile">
              <Transition.reveal>
                <div className="mt-8 md:mt-0">
                  <Image src={img5} alt={"/"} width={350} height={500} />
                </div>
              </Transition.reveal>
            </a>
          </div>
          <div className="text-center mt-12 md:mt-24">
            <Transition.reveal>
              <p className="font-monserrat text-sm  md:text-lg px-4">
                {isFrench
                    ? "Je suis passionné par la technologie et la création de solutions innovantes qui améliorent la vie des gens. Mon objectif est de continuer à me développer en tant que développeur polyvalent, en explorant de nouvelles technologies et en repoussant les limites de ce qui est possible."
                    : "I am passionate about technology and creating innovative solutions that improve people's lives. My goal is to continue growing as a versatile developer, exploring new technologies and pushing the boundaries of what is possible."}
              </p>
            </Transition.reveal>
          </div>
        </div>
      </div>

  );
}
