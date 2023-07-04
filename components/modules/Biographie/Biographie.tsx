"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  useAnimation,
} from "framer-motion";
import Image from "next/image";
import img1 from "@/public/78CE788D-F91A-4877-A768-A4DA0F8FB258.jpg";
import "./styles.css";
import img3 from "@/public/connexion.png";
import img4 from "@/public/4380744.png";
import img5 from "@/public/dev-dapplications.png";
import img6 from "@/public/Pasted Graphic.png";
import img7 from "@/public/Pasted Graphic 1.png";
import { Transition } from "@/components/utils";
import { useRouter } from "next/navigation";



export default function App() {
  const [isFrench, setIsFrench] = useState(false);
  const router = useRouter();

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

  const codeContainerAnimation = useAnimation();
  const installingAnimation = useAnimation();
  const doneAnimation = useAnimation();

  const animateCode = async () => {
    await codeContainerAnimation.start({ opacity: 1 });

    await installingAnimation.start({ opacity: 1 });
    await new Promise((resolve) => setTimeout(resolve, 1000));

    await doneAnimation.start({ opacity: 1 });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCode();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("mockup-code");

    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="mt-32 lg:mt-64 " id="StartBio">
        <div className="flex justify-center items-center  flex-col lg:flex-row ">
          <Transition.revealFromLeft>
            <Image
              src={img1}
              alt="/"
              width={300}
              height={300}
              className="rounded-2xl"
            />
          </Transition.revealFromLeft>
          <div className="lg:ml-24 text-sm  lg:text-lg">
            <Transition.revealFromLeft>
              <hr className="w-full h-1 mx-auto my-4 bg-gray-300 border-0 rounded lg:my-10 dark:bg-gray-700" />
            </Transition.revealFromLeft>
            <div className="flex">
              <Transition.revealFromLeft>
                <p className="font-monserrat">
                  {isFrench ? "Prénom : " : "First Name: "}
                  <span className="text-blue-400">Robin</span>
                </p>
              </Transition.revealFromLeft>
            </div>

            <div className="flex mt-2">
              <Transition.revealFromLeft>
                <p className="font-monserrat">
                  {isFrench ? "Surnom : " : "Nickname: "}
                  <span className="text-blue-400">Rob</span>
                </p>
              </Transition.revealFromLeft>
            </div>

            <div className="flex mt-2">
              <Transition.revealFromLeft>
                <p className="font-monserrat">
                  {isFrench ? "Âge : " : "Age: "}
                  <span className="text-blue-400">20</span>
                </p>
              </Transition.revealFromLeft>
            </div>

            <div className="flex mt-2">
              <Transition.revealFromLeft>
                <p className="font-monserrat">
                  {isFrench ? "Statut : " : "Status: "}
                  <span className="text-blue-400">
                    {isFrench ? "Étudiant à Epitech" : "Student at Epitech"}
                  </span>
                </p>
              </Transition.revealFromLeft>
            </div>

            <div className="flex mt-2">
              <Transition.revealFromLeft>
                <p className="font-monserrat">
                  {isFrench ? "Nationalité : " : "Nationality: "}
                  <span className="text-blue-400">
                    {isFrench ? "Français 🇫🇷" : "French 🇫🇷"}
                  </span>
                </p>
              </Transition.revealFromLeft>
            </div>

            <div className="flex mt-2">
              <Transition.revealFromLeft>
                <p className="font-monserrat">
                  {isFrench ? "Langues parlées : " : "Spoken Languages: "}
                </p>
              </Transition.revealFromLeft>
            </div>

            <div className="flex">
              <Transition.revealFromLeft>
                <p className="font-monserrat">
                  &nbsp;&nbsp;&nbsp;&nbsp;{isFrench ? "Français :" : "French: "}
                  &nbsp;
                </p>
              </Transition.revealFromLeft>
              <Transition.revealFromLeft>
                <p className="text-blue-400 font-monserrat">
                  {isFrench ? "langue maternelle" : "native"}
                </p>
              </Transition.revealFromLeft>
            </div>

            <div className="flex">
              <Transition.revealFromLeft>
                <p className="font-monserrat">
                  &nbsp;&nbsp;&nbsp;&nbsp;{isFrench ? "Anglais: " : "English:"}
                  &nbsp;
                </p>
              </Transition.revealFromLeft>
              <Transition.revealFromLeft>
                <p className="text-blue-400 font-monserrat">
                  {isFrench
                    ? "Niveau professionnel complet"
                    : "Full professional capacity"}
                </p>
              </Transition.revealFromLeft>
            </div>

            <div className="flex mt-2">
              <Transition.revealFromLeft>
                <p className="font-monserrat">
                  {isFrench ? "Loisirs:" : "Hobbies:"}&nbsp;
                </p>
              </Transition.revealFromLeft>
              <Transition.revealFromLeft>
                <p className="text-blue-400 font-monserrat">
                  {isFrench
                    ? "natation, ski, programmation"
                    : "swimming, skiing, programming"}
                </p>
              </Transition.revealFromLeft>
            </div>

            <Transition.revealFromLeft>
              <hr className="w-full h-1 mx-auto my-4 bg-gray-300 border-0 rounded lg:my-10 dark:bg-gray-700" />
            </Transition.revealFromLeft>
          </div>
        </div>
        <div className=" mt-12 lg:mt-36 lg:w-2/3 px-6 w-screen lg:mx-auto">
          <div className="text-center ">
            <Transition.revealFromLeft>
              <p className="font-monserrat text-sm   lg:text-lg   mt-12 lg:mt-24">
                {isFrench
                  ? "Je suis actuellement en troisième année à Epitech Lyon, une école d'informatique renommée. Mon parcours à Epitech est enrichissant et stimulant, me permettant de développer mes compétences en programmation."
                  : "I am currently in my third year at Epitech Lyon, a renowned computer science school. My journey at Epitech has been enriching and stimulating, allowing me to develop my programming skills."}
              </p>
            </Transition.revealFromLeft>
          </div>
          <div className="flex justify-center mt-12 lg:mt-2">
            <Transition.revealFromLeft>
              <Image
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/2/2d/Epitech.png"
                }
                alt={"/"}
                width={500}
                height={500}
              />
            </Transition.revealFromLeft>
          </div>

          {/* debut dev algo*/}
          <Transition.revealFromLeft>
            <div id="mockup-code" className="mockup-code mt-24">
              <motion.pre
                initial={{ opacity: 0 }}
                animate={codeContainerAnimation}
                transition={{ delay: 1 }}
                className="code-container"
              >
                <motion.code>npm i Robin Skills</motion.code>
              </motion.pre>

              <motion.pre
                initial={{ opacity: 0 }}
                animate={installingAnimation}
                transition={{ delay: 1 }}
                className="text-warning"
              >
                <motion.code>installing...</motion.code>
              </motion.pre>

              <motion.pre
                initial={{ opacity: 0 }}
                animate={doneAnimation}
                transition={{ delay: 2 }}
                className="text-success"
              >
                <motion.code>Done!</motion.code>
              </motion.pre>
            </div>
          </Transition.revealFromLeft>

          <div>
            <div className="font-monserrat text-sm  md:text-lg mt-12 md:mt-24 flex flex-col md:flex-row justify-between items-center">
              <div className="w-full md:w-1/2 px-4">
                <Transition.revealFromLeft>
                  <p>
                    {isFrench
                      ? "Je suis actuellement en train d'étudier et de pratiquer la programmation algorithmique en langage C et C++. Ces langages sont largement utilisés dans le domaine du développement de logiciels et offrent une base solide pour la mise en œuvre d'algorithmes efficaces. En travaillant en C et C++, je suis en mesure d'améliorer mes compétences en résolution de problèmes et d'acquérir une compréhension plus approfondie des structures de données, de la gestion de la mémoire et de l'optimisation des performances. La programmation algorithmique en C et C++ me permet de relever des défis de programmation stimulants et de développer des solutions robustes."
                      : "I am currently studying and practicing algorithmic programming in C and C++. These languages are widely used in the field of software development and provide a powerful foundation for implementing efficient algorithms. By working with C and C++, I am able to enhance my problem-solving skills and gain a deeper understanding of data structures, memory management, and performance optimization. Algorithmic programming in C and C++ allows me to tackle challenging programming tasks and develop robust solutions."}
                  </p>
                </Transition.revealFromLeft>
              </div>
              <Transition.revealFromLeft>
                <div className="mt-8 md:mt-0">
                  <Image src={img3} alt={"/"} width={350} height={500} />
                </div>
              </Transition.revealFromLeft>
            </div>

            <div className="flex justify-center mt-36 lg:mt-0 items-center h-screen">
              <div className="font-monserrat text-sm lg:text-lg w-3/4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 -mx-4 mt-12 lg:mt-24">
                  <div className="flex items-center justify-center mx-4 my-4 lg:my-0">
                    <Transition.revealFromLeft>
                      <div className="p-4">
                        <Image src={img7} alt="/" width={300} height={350} />
                      </div>
                    </Transition.revealFromLeft>
                  </div>
                  <div className="flex flex-col justify-center mx-4">
                    <div className="flex items-center justify-center">
                      <Transition.revealFromLeft>
                        <div className="p-4">
                          <Image src={img6} alt="/" width={350} height={100} />
                        </div>
                      </Transition.revealFromLeft>
                    </div>
                    <div className="text-center mt-4">
                      <Transition.revealFromLeft>
                        <p className="mb-36 lg:mb-0">
                          {isFrench
                            ? "Les images présentées ici sont les images provenant de LeetCode qui montrent mes compétences et mon niveau. Ces images illustrent les problèmes d'algorithme et les défis auxquels j'ai été confronté. Elles témoignent de ma capacité à résoudre des problèmes complexes et à développer des solutions efficaces."
                            : "The images shown here are the images from LeetCode that demonstrate my skills and proficiency. These images showcase the algorithmic problems and challenges I have encountered. They testify to my ability to solve complex problems and develop efficient solutions."}
                        </p>
                      </Transition.revealFromLeft>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div></div>

            <div className="flex items-center md:mt-12 lg:mt-0 mt-24 justify-center">
              <div className="flex flex-col space-y-5">
                <div className="flex items-center space-x-4">
                  <Transition.revealFromLeft>
                    <p>C</p>
                  </Transition.revealFromLeft>
                  <Transition.revealFromLeft>
                    <progress
                      className="progress progress-info w-56"
                      value="85"
                      max="100"
                    ></progress>
                  </Transition.revealFromLeft>
                </div>
                <div className="flex items-center space-x-4">
                  <Transition.revealFromLeft>
                    <p>C++</p>
                  </Transition.revealFromLeft>
                  <Transition.revealFromLeft>
                    <progress
                      className="progress progress-info w-56"
                      value="75"
                      max="100"
                    ></progress>
                  </Transition.revealFromLeft>
                </div>
                <div className="flex items-center space-x-4">
                  <Transition.revealFromLeft>
                    <p>Python</p>
                  </Transition.revealFromLeft>
                  <Transition.revealFromLeft>
                    <progress
                      className="progress progress-info w-56"
                      value="80"
                      max="100"
                    ></progress>
                  </Transition.revealFromLeft>
                </div>
                <div className="flex items-center space-x-4">
                  <Transition.revealFromLeft>
                    <p>Perl</p>
                  </Transition.revealFromLeft>
                  <Transition.revealFromLeft>
                    <progress
                      className="progress progress-info w-56"
                      value="50"
                      max="100"
                    ></progress>
                  </Transition.revealFromLeft>
                </div>
              </div>
            </div>
          </div>

          {/* fin de dev algo*/}

          {/* dev web */}

          <Transition.revealFromLeft>
            <div className="mockup-window border bg-base-300 mt-24 h-64 flex flex-col">
              <div className="relative flex-grow">
                <Image
                  src="https://images.unsplash.com/photo-1688053793446-197dbc86e237?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Site Internet"
                  layout="fill"
                  objectFit="cover"
                  className="website-image"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-4xl text-center">
                    {isFrench
                      ? "Website Programmation"
                      : "Website Programation"}
                  </p>
                </div>
              </div>
            </div>
          </Transition.revealFromLeft>

          <div className="font-monserrat text-sm  lg:text-lg mt-8 lg:mt-12 w-full flex flex-col-reverse lg:flex-row justify-between items-center">
            <Transition.revealFromLeft>
              <div className="mt-8 lg:mt-24">
                <Image src={img4} alt={"/"} width={450} height={500} />
              </div>
            </Transition.revealFromLeft>

            <div className="w-full lg:w-1/2 text-sm  lg:text-lg mt-12 lg:mt-24 px-4">
              <Transition.revealFromLeft>
                <p>
                  {isFrench
                    ? "Au cours des deux dernières années, je me suis plongé dans le monde du développement web, en me spécialisant en HTML, CSS, JavaScript, React, Next.js et Tailwind CSS. Ce parcours m'a permis de maîtriser l'art de créer des expériences web engageantes et interactives, en exploitant ces technologies puissantes pour construire des sites web modernes, réactifs et esthétiquement plaisants."
                    : "Over the past two years, I have been immersed in the world of web development, specializing in HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS. This journey has allowed me to master the art of creating engaging and interactive web experiences, leveraging these powerful technologies to build modern, responsive, and visually appealing websites."}
                </p>
              </Transition.revealFromLeft>
            </div>
          </div>

          <div className="flex justify-center mt-12 animate-bounce">
            <button
              type="button"
              onClick={() => router.push("/jobs")}
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              {isFrench ? "Voir mes oeuvres" : "See my works"}
            </button>
          </div>

          {/*fin de dev web*/}

          {/* debut dev mobile*/}

          <div className="font-monserrat text-sm  lg:text-lg mt-12 lg:mt-24 w-full flex flex-col lg:flex-row justify-between items-center">
            <div className="w-full lg:w-1/2 px-4">
              <Transition.revealFromLeft>
                <p>
                  {isFrench
                    ? "Au cours de mon parcours professionnel, j'ai eu l'opportunité précieuse de travailler pour une entreprise parisienne pendant une période de cinq mois. Pendant ce temps, j'ai participé au développement d'une application mobile en React Native, en me concentrant spécifiquement sur la création d'une plateforme de réseau social. Cette expérience m'a permis de plonger dans le monde du développement d'applications mobiles, en perfectionnant mes compétences en React Native et en acquérant une expérience pratique dans la création d'interfaces utilisateur intuitives et attrayantes pour une communauté sociale dynamique."
                    : "During my professional journey, I had the valuable opportunity to work for a Parisian company for a period of five months. During this time, I was involved in the development of a React Native mobile application, focusing specifically on creating a social networking platform. This experience allowed me to dive into the world of mobile app development, honing my skills in React Native and gaining hands-on experience in crafting intuitive and engaging user interfaces for a vibrant social community."}
                </p>
              </Transition.revealFromLeft>
            </div>
            <Transition.revealFromLeft>
              <div className="mt-8 lg:mt-0">
                <Image src={img5} alt={"/"} width={350} height={500} />
              </div>
            </Transition.revealFromLeft>
          </div>
          <div className="text-center mt-12 lg:mt-24">
            <Transition.revealFromLeft>
              <p className="font-monserrat text-sm  lg:text-lg px-4">
                {isFrench
                  ? "Je suis passionné par la technologie et la création de solutions innovantes qui améliorent la vie des gens. Mon objectif est de continuer à me développer en tant que développeur polyvalent, en explorant de nouvelles technologies et en repoussant les limites de ce qui est possible."
                  : "I am passionate about technology and creating innovative solutions that improve people's lives. My goal is to continue growing as a versatile developer, exploring new technologies and pushing the boundaries of what is possible."}
              </p>
            </Transition.revealFromLeft>
          </div>
        </div>
      </div>
      {/*fin dev mobile*/}
      <div className="mt-24"></div>
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
                  onClick={() => router.push("/jobs")}
                  className="mr-4 hover:underline md:mr-6 "
                >
                  {isFrench ? "Emplois" : "Jobs"}
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
    </>
  );
}
