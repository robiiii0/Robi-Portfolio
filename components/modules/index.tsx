import dynamic from "next/dynamic";

const InDev = dynamic(() => import("@/components/modules/InDev/InDev"));
const HomePage = dynamic(
  () => import("@/components/modules/HomePage/HomePage")
);
const Skills = dynamic(() => import("@/components/modules/Skills/Skills"));
const Jobs = dynamic(() => import("@/components/modules/Jobs/Jobs"));
const Contact = dynamic(() => import("@/components/modules/Contact/Contact"));
const Biographie = dynamic(
  () => import("@/components/modules/Biographie/Biographie")
);
const Companies = dynamic(() => import('@/components/modules/companies/companies'))
const Stats = dynamic(() => import('@/components/modules/Stats/Stats'))

export const components = {
  inDev: InDev,
  HomePage: HomePage,
  Skills: Skills,
  Jobs: Jobs,
  Contact: Contact,
  Biographie: Biographie,
  Companies: Companies,
  Stats: Stats,
};
