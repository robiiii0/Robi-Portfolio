import dynamic from "next/dynamic";

const revealFromBottom = dynamic(
  () => import("@/components/utils/revealFromBottom")
);
const revealForTitle = dynamic(() => import("@/components/utils/revealTitle"));
const revealFromLeft = dynamic(
  () => import("@/components/utils/revealFromLeft")
);

export const Transition = {
  revealFromLeft: revealFromLeft,
  revealForTitle: revealForTitle,
  revealFromBottom: revealFromBottom,
};
