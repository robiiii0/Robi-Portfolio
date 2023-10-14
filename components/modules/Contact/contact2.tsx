"use client";
import React, { useEffect, useState } from "react";
import { Transition } from "@/components/utils";
import { useRouter } from "next/navigation";

export default function Contact2() {
  const [isFrench, setIsFrench] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const userLang = navigator.language;

    if (userLang.startsWith("fr")) {
      setIsFrench(true);
    } else {
      setIsFrench(false);
    }
  }, []);
  return (
    <div className={"bg-black"}>
      <div className="relative min-h-screen grid bg-black">
        <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0">
          <div
            className="relative sm:w-1/2 xl:w-3/5 bg-blue-500 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden text-white bg-no-repeat bg-cover"
            style={{
              backgroundImage:
                "url(/927EA8A3-9BFA-431A-86AE-08774F5139A9.jpg  )",
            }}
          >
            <div className="absolute bg-black opacity-25 inset-0 z-0"></div>
            <div className="w-full lg:max-w-2xl md:max-w-md z-10 items-center text-center">
              <div className="font-bold leading-tight mb-6 mx-auto w-full content-center items-center"></div>
            </div>
          </div>

          <div className="md:flex md:items-center md:justify-left w-full sm:w-auto md:h-full xl:w-1/2 p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none">
            <div className="max-w-xl w-full space-y-12">
              <div className="lg:text-left text-center">
                <div className="flex items-center justify-center">
                  <div className="bg-black flex flex-col w-80 border border-gray-700 rounded-lg px-8 py-10">
                    <form className="flex flex-col space-y-8 mt-10">
                      <p
                        className={"font-bold text-2xl text-white text-center"}
                      >
                        {isFrench ? "me contacter" : "contact me"}
                      </p>
                      <label className="font-bold text-lg text-white text-center">
                        {isFrench ? "Par Mail" : "By Mail"}
                      </label>
                      <Transition.revealFromLeft>
                        <div
                          onClick={() =>
                            router.push(
                              "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=robindevpro1@gmail.com"
                            )
                          }
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 md:h-20 md:w-20"
                            aria-label="Gmail"
                            role="img"
                            viewBox="0 0 512 512"
                          >
                            <rect fill="#ffffff" />
                            <path
                              d="M158 391v-142l-82-63V361q0 30 30 30"
                              fill="#4285f4"
                            />
                            <path
                              d="M 154 248l102 77l102-77v-98l-102 77l-102-77"
                              fill="#ea4335"
                            />
                            <path
                              d="M354 391v-142l82-63V361q0 30-30 30"
                              fill="#34a853"
                            />
                            <path
                              d="M76 188l82 63v-98l-30-23c-27-21-52 0-52 26"
                              fill="#c5221f"
                            />
                            <path
                              d="M436 188l-82 63v-98l30-23c27-21 52 0 52 26"
                              fill="#fbbc04"
                            />
                          </svg>
                        </div>
                      </Transition.revealFromLeft>
                      <label className="font-bold text-lg text-white text-center">
                        {isFrench ? "Par Linkedin" : "By Linkedin"}
                      </label>
                      <Transition.revealFromLeft>
                        <div
                          onClick={() =>
                            router.push(
                              "https://www.linkedin.com/in/robin-chabert-863105232/"
                            )
                          }
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 md:h-20 text-blue-500 md:w-20"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                          </svg>
                        </div>
                      </Transition.revealFromLeft>
                      <label className="font-bold text-lg text-white text-center">
                        {isFrench ? "Mon Github" : "My Github"}
                      </label>
                      <Transition.revealFromLeft>
                        <div
                          onClick={() => "https://github.com/robiiii0"}
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 md:h-20 text-gray-700 md:w-20"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </div>
                      </Transition.revealFromLeft>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"bg-black h-full"}>
        <footer className="bg-black rounded-lg shadow m-4 dark:bg-gray-800">
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
                  onClick={() => router.push("/jobs")}
                  className="hover:underline"
                >
                  {isFrench ? "Emplois" : "Jobs"}
                </button>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}
