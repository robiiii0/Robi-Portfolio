'use client';
import React, { useState, useCallback, useRef, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import styles from "../Styles/styles.module.css";
import Image from "next/image";
import { Transition } from "@/components/utils";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const ref = useRef<ReturnType<typeof setTimeout>[]>([]);
  const [items, set] = useState<string[]>([]);
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
      color: "#28b4d7",
    },
    enter: [{ opacity: 1, height: 80, innerHeight: 80 }],
    leave: [
      { color: "#28b4d7" },
      { innerHeight: 0 },
      { opacity: 0, height: 0 },
    ],
    update: { color: "#28b4d7" },
  });

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(setTimeout(() => set(["Bonjour"]), 1000));
  }, []);

  useEffect(() => {
    reset();
    return () => ref.current.forEach(clearTimeout);
  }, [reset]);

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
      <div className="bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
          >
            <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#09CBFF] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
            />
          </div>
          <div className="w-full mt-[-7rem] mx-auto py-32 sm:py-48 lg:py-52">
            <div className="text-center">
              {transitions(({ innerHeight, ...rest }, item) => (
                  <animated.div className={styles.transitionsItem} style={rest}>
                    <animated.div
                        className={styles.myClass}
                        style={{ height: innerHeight }}
                    >
                      {isFrench ? "Bonjour" : "Hello"}
                    </animated.div>
                  </animated.div>
              ))}
              <div className="flex justify-center lg:mt-8">
                <Transition.reveal>
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    {isFrench ? "Je suis" : "I'm"}
                  </h1>
                </Transition.reveal>
                <Transition.reveal>
                  <h1 className="text-4xl font-bold tracking-tight text-cyan-600 sm:text-6xl">
                    &nbsp;Robin
                  </h1>
                </Transition.reveal>
              </div>
              <div className=" w-full lg:w-2/4 mx-auto">
                <Transition.reveal>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    {isFrench
                        ? "Je suis un développeur web passionné axé sur le développement front-end et je poursuis actuellement mes études à Epitech. Avec un fort dévouement à la création d'expériences web engageantes et conviviales."
                        : "I'm a passionate web developer focused on front-end development, and I'm currently pursuing my studies at Epitech. With a strong dedication to crafting engaging and user-friendly web experiences."}
                  </p>
                </Transition.reveal>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                      href="#"
                      className="rounded-md animate-bounce bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {isFrench ? "Commencer" : "Get started"}
                  </a>
                  <Transition.reveal>

                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=robindevpro1@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold leading-6 text-gray-900 transition ease-in-out duration-300 hover:scale-110"
                    >
                      {isFrench ? "Contactez-moi" : "Contact me"}{" "}
                      <span aria-hidden="true">→</span>
                    </a>
                  </Transition.reveal>
                </div>
              </div>
            </div>
          </div>
          <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
          >
            <div
                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#09CBFF] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
            />
          </div>
        </div>
      </div>
  );
}
