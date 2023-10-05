import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/modules/HomePage/Hero"));
const Finder = dynamic(() => import("@/components/modules/Finder/Finder"));
const Contact2 = dynamic(() => import("@/components/modules/Contact/contact2"));

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
const Companies = dynamic(
  () => import("@/components/modules/companies/companies")
);
const Stats = dynamic(() => import("@/components/modules/Stats/Stats"));

export const componentsHome = {
  inDev: InDev,
  HomePage: Hero,
  Finder: Finder,
};

export const componentsDescribe = {
  Skills: Skills,
  Jobs: Jobs,
  Contact: Contact,
  Contact2: Contact2,
  Biographie: Biographie,
  Companies: Companies,
  Stats: Stats,
};
