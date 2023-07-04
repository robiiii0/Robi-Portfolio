"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import imgMe from "@/public/IMG_6690.jpg";
import { Transition } from "@/components/utils";
import { useRouter } from "next/router";
import Link from "next/link";

const Finder = () => {
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
      mainControls.start("visible");
    } else {
      slideControls.start("hidden");
      mainControls.start("hidden");
    }
  }, [isInView, mainControls, slideControls]);

  const fadeInVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  const screenVariants = {
    hidden: { x: "100vw" },
    visible: { x: 0 },
  };

  const screenTransition = {
    duration: 0.5,
    ease: "easeInOut",
  };

  const handleAnimationComplete = () => {
    // Replace the router.push() with Link component
    // Make sure to replace "/contact" with the desired page URL
    return (
        <Link href="/contact">
          <a />
        </Link>
    );
  };

  return (
      <div className="bg-gray-900 h-full mt-12">
        <hr className="mt-2" />
        <Transition.revealFromBottom>
          <hr className="h-px mt-12 w-6/12 mx-auto bg-white border-0 dark:bg-gray-700" />
        </Transition.revealFromBottom>
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-center px-6 py-6">
          <div className="flex justify-center items-center">
            <a
                href={"/aboutme"}
                className="mt-6 text-white font-rubik text-2xl font-semibold"
            >
              <Transition.revealFromBottom>
                <p>{isFrench ? "À propos de moi" : "About me"}</p>
              </Transition.revealFromBottom>
              <Transition.revealFromBottom>
                <Image
                    src={imgMe}
                    alt={"/"}
                    width={500}
                    height={500}
                    className="rounded-2xl mt-8 hover:scale-110 transition ease-in"
                />
              </Transition.revealFromBottom>
            </a>
          </div>
          <div className="flex flex-col justify-center items-center sm:pl-6">
            <div className="flex justify-center items-center">
              <a
                  href={"/jobs"}
                  className="mt-6 text-white font-rubik text-2xl font-semibold"
              >
                <Transition.revealFromBottom>
                  <p>{isFrench ? "Mes emplois" : "My Jobs"}</p>
                </Transition.revealFromBottom>
                <Transition.revealFromBottom>
                  <Image
                      className="rounded-2xl mt-8 hover:scale-110 transition ease-in"
                      src="https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt={"/"}
                      width={450}
                      height={500}
                  />
                </Transition.revealFromBottom>
              </a>
            </div>
            <Link href="/contact" legacyBehavior>
              <a
                  className="mt-6 text-white font-rubik text-2xl font-semibold"
                  onClick={handleClick}
              >
                <Transition.revealFromBottom>
                  <p>{isFrench ? "Contactez-moi" : "Contact me"}</p>
                </Transition.revealFromBottom>
                <Transition.revealFromBottom>
                  <Image
                      className="rounded-2xl mt-6 hover:scale-110 transition ease-in"
                      src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhhbmRzaGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
                      alt={"/"}
                      width={450}
                      height={500}
                  />
                </Transition.revealFromBottom>
              </a>
            </Link>
          </div>
          <div className="mt-24"></div>
        </div>
      </div>
  );
};

export default Finder;
