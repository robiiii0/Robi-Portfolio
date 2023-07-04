"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
}

const RevealFromLeft: React.FC<Props> = ({ children, width = "fit-content" }) => {
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    const ref = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        if (ref.current) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                    } else {
                        setIsInView(false);
                    }
                });
            });

            observer.observe(ref.current);

            return () => {
                observer.disconnect();
            };
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

    return (
        <div ref={ref}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: -505 },
                    visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.7, delay: 0.35 }}
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: "100%" },
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration: 0.5, ease: "easeIn" }}
                style={{
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    background: "var(--brand)",
                    zIndex: 20,
                }}
            />
        </div>
    );
};

export default RevealFromLeft;
