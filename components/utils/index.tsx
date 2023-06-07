import dynamic from "next/dynamic";

const reveal = dynamic(() => import("@/components/utils/reveal"));

export const Transition = {
  reveal: reveal,
};
