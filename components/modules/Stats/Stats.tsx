'use client';
import { useEffect, useState } from "react";
import { Transition } from "@/components/utils";

const statsEnglish = [
    { id: 1, name: "Missions carried out", value: "4 / 4" },
    { id: 2, name: "Satisfied customers", value: "100 %" },
    { id: 3, name: "Order in France", value: "3 / 4" },
];

const statsFrench = [
    { id: 1, name: "Missions réalisées", value: "4 / 4" },
    { id: 2, name: "Clients satisfaits", value: "100 %" },
    { id: 3, name: "Commandes en France", value: "3 / 4" },
];

export default function Stats() {
    const [isFrench, setIsFrench] = useState(false);
    const currentStats = isFrench ? statsFrench : statsEnglish;

    useEffect(() => {
        const userLang = navigator.language;

        if (userLang.startsWith("fr")) {
            setIsFrench(true);
        } else {
            setIsFrench(false);
        }
    }, []);

    return (
        <>
            <div className="bg-white py-24 sm:py-32">
                <Transition.reveal>
                <p className="text-center text-4xl font-monserrat font-bold">
                    {isFrench ? "Robin c'est" : "Robin it's"}
                </p>
                    </Transition.reveal>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-12">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        {currentStats.map((stat) => (
                            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <Transition.reveal>
                                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                                    </Transition.reveal>
                                <Transition.reveal>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                    {stat.value}
                                </dd>
                                    </Transition.reveal>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </>
    );
}
