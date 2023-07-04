"use client";
import React, { useEffect, useState } from "react";
import { Transition } from "@/components/utils";

const EmailIcon = () => {
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
    <div className="text-center font-monserrat">
      <Transition.revealFromLeft>
        <p className="text-blue-400 font-monserrat text-6xl">
          {isFrench ? "Contactez-moi maintenant !" : "Let's contact me now!"}
        </p>
      </Transition.revealFromLeft>
      <div className="flex flex-col md:flex-row justify-center mt-16 md:mt-36 space-y-8 md:space-y-0 md:space-x-20">
        <div className="text-blue-500 flex flex-col items-center">
          <Transition.revealFromLeft>
            <span>
              {isFrench ? "Voici mon LinkedIn" : "Here's my LinkedIn"}
            </span>
          </Transition.revealFromLeft>
          <Transition.revealFromLeft>
            <a
              href="https://www.linkedin.com/in/robin-chabert-863105232/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 md:h-20 md:w-20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
          </Transition.revealFromLeft>
        </div>
        <div className="text-gray-500 flex flex-col items-center">
          <Transition.revealFromLeft>
            <span>{isFrench ? "Voici mon Github" : "Here's my Github"}</span>
          </Transition.revealFromLeft>
          <Transition.revealFromLeft>
            <a
              href="https://github.com/robiiii0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 md:h-20 md:w-20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </Transition.revealFromLeft>
        </div>
        <div className="text-red-500 flex flex-col items-center">
          <Transition.revealFromLeft>
            <span>{isFrench ? "Voici mon Gmail" : "Here's my Gmail"}</span>
          </Transition.revealFromLeft>
          <Transition.revealFromLeft>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=robindevpro1@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 md:h-20 md:w-20"
                aria-label="Gmail"
                role="img"
                viewBox="0 0 512 512"
              >
                <rect fill="#ffffff" />
                <path d="M158 391v-142l-82-63V361q0 30 30 30" fill="#4285f4" />
                <path
                  d="M 154 248l102 77l102-77v-98l-102 77l-102-77"
                  fill="#ea4335"
                />
                <path d="M354 391v-142l82-63V361q0 30-30 30" fill="#34a853" />
                <path
                  d="M76 188l82 63v-98l-30-23c-27-21-52 0-52 26"
                  fill="#c5221f"
                />
                <path
                  d="M436 188l-82 63v-98l30-23c27-21 52 0 52 26"
                  fill="#fbbc04"
                />
              </svg>
            </a>
          </Transition.revealFromLeft>
        </div>
      </div>
      <div className="mt-24" />
    </div>
  );
};

export default EmailIcon;
