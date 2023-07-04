"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
}

const RevealForTitle: React.FC<Props> = ({ children, width = "fit-content" }) => {
    const mainControls = useAnimation();
    const slideControls = useAnimation();
    const upwardControls = useAnimation();

    const ref = useRef<HTMLDivElement>(null);
    const [hasTriggered, setHasTriggered] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (!hasTriggered && entries[0].isIntersecting) {
                slideControls.start("visible").then(() => {
                    mainControls.start("visible").then(() => {
                        setTimeout(() => {
                            upwardControls.start("visible");
                        }, 500); // Delay before starting the upward motion
                    });
                });
                setHasTriggered(true);
            }
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [hasTriggered, mainControls, slideControls, upwardControls]);

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
                style={{
                    position: "relative",
                    overflow: "hidden",
                }}
            >
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
                        top: 0,
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        background: "var(--brand)",
                        zIndex: 20,
                    }}
                />
                {children}
            </motion.div>
        </div>
    );
};

export default RevealForTitle;
