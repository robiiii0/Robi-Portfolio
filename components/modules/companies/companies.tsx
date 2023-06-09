'use client';
import Image from "next/image";

import { Transition } from "@/components/utils";
import { useEffect, useState } from "react";

const TrustedClients = () => {
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
        <div className="text-center mt-24">
            <Transition.reveal>
                <h2 className="text-3xl font-bold mb-4">
                    {isFrench ? "Ils m'ont fait confiance" : "They Trusted Me"}
                </h2>
            </Transition.reveal>
            <div className="mx-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                <Transition.reveal>
                    <Image
                        src="https://www.eloken.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.9cbeff77.png&w=1200&q=75"
                        alt={isFrench ? "Clients de confiance" : "Trusted Clients"}
                        width={300}
                        height={200}
                        className="rounded-md"
                    />
                </Transition.reveal>
            </div>
        </div>
    );
};

export default TrustedClients;
