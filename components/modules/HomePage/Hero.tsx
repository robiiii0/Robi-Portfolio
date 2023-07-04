"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import img1 from "@/public/Robz_black.jpg";
import Image from "next/image";
import { componentsHome, componentsDescribe } from "@/components/modules";
import { useRouter } from "next/router";

const MOBILE_NAV_ITEMS = [
  {
    id: 0,
    navTitle: "home",
    href: "/",
  },
  {
    id: 1,
    navTitle: "showreel",
    href: "/",
  },
  {
    id: 2,
    navTitle: "services",
    href: "/",
  },
  {
    id: 3,
    navTitle: "about",
    href: "/",
  },
];

export default function Hero() {
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
  const screenAnimation = useAnimation();
  const textAnimation = useAnimation();
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const startAnimation = async () => {
      // Wait for 4 seconds
      await new Promise((resolve) => setTimeout(resolve, 4000));

      screenAnimation.start({
        width: "100vw",
        height: 0,
        opacity: 0,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      });

      // Trigger the text disappearance animation
      textAnimation.start({
        y: -100,
        opacity: 0,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      });

      setAnimationComplete(true);
    };

    startAnimation();
  }, [screenAnimation, textAnimation]);

  return (
    <>
      <motion.div
        style={{
          background: "black",
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 1,
          flexDirection: "column",
        }}
        initial={{ opacity: 1 }}
        animate={screenAnimation}
      >
        <motion.h1
          style={{ color: "white", fontSize: "4rem" }}
          initial={{ y: 100, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 1,
              type: "spring",
              stiffness: 100,
            },
          }}
          exit={{
            y: -100,
            opacity: 0,
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
        >
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ opacity: 0, y: 50 }}
            className={"font-rubik"}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.2,
                duration: 0.5,
              },
            }}
          >
            H
          </motion.span>
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ opacity: 0, y: 50 }}
            className={"font-rubik"}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.4,
                duration: 0.5,
              },
            }}
          >
            e
          </motion.span>
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ opacity: 0, y: 50 }}
            className={"font-rubik"}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.6,
                duration: 0.5,
              },
            }}
          >
            l
          </motion.span>
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ opacity: 0, y: 50 }}
            className={"font-rubik"}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.8,
                duration: 0.5,
              },
            }}
          >
            l
          </motion.span>
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ opacity: 0, y: 50 }}
            className={"font-rubik"}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 1,
                duration: 0.5,
              },
            }}
          >
            o
          </motion.span>
        </motion.h1>

        <motion.h2
          style={{ color: "white", fontSize: "2rem", marginTop: "1rem" }}
          initial={{ y: 100, opacity: 0 }}
          className={"font-rubik"}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              delay: 1.5,
              duration: 1,
              type: "spring",
              stiffness: 100,
            },
          }}
          exit={{
            y: -100,
            opacity: 0,
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
        >
          {isFrench ? "Bienvenue sur mon site" : "Welcome to my website"}
        </motion.h2>
      </motion.div>

      {animationComplete && (
        <>
          <div>
            <div className="text-6xl font-rubik font-mono space-y-5 mt-24">
              <motion.p
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="px-16"
              >
                Robin
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="px-24"
              >
                Chabert
              </motion.p>
              <div className="flex justify-between flex-wrap lg:flex-nowrap">
                <div className="w-full lg:w-2/4 md:text-2xl text-base md:mt-24 mt-8 md:px-24 px-12 space-y-6">
                  <motion.p
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1.4 }}
                  >
                    {isFrench
                      ? "Bienvenue sur mon site web! Je suis ravi de vous accueillir ici et de partager avec vous mes passions, mon travail et mes réalisations."
                      : "Welcome to my website! I am excited to welcome you here and share with you my passions, work, and achievements."}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1.7 }}
                  >
                    {isFrench
                      ? "Ce site est conçu pour vous donner un aperçu de qui je suis et de ce que je fais. Explorez les différentes sections et découvrez mes projets."
                      : "This site is designed to give you an overview of who I am and what I do. Explore the different sections and discover my projects."}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1.9 }}
                  >
                    {isFrench
                      ? "N'hésitez pas à me contacter si vous avez des questions ou des collaborations en tête."
                      : "Feel free to contact me if you have any questions or potential collaborations in mind."}
                  </motion.p>
                </div>
                <div className="w-full lg:w-auto px-20 lg:mt-0 mt-12">
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1.3 }}
                  >
                    <Image
                      className="rounded-2xl"
                      src={img1}
                      alt="/"
                      width={400}
                      height={img1.height}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900">
            <componentsHome.Finder />
          </div>
        </>
      )}
    </>
  );
}
