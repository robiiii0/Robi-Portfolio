import dynamic from "next/dynamic";

const JobCardLeft = dynamic(
  () => import("@/components/modules/Jobs/Modules/JobCardLeft/JobCardLeft")
);
const JobCardRight = dynamic(
  () => import("@/components/modules/Jobs/Modules/JobCardRight/JobCardRight")
);

export const JobCardComponent = {
  JobCardLeft: JobCardLeft,
  JobCardRight: JobCardRight,
};
