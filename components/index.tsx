import dynamic from 'next/dynamic';

const InDev = dynamic(() => import('@/components/modules/InDev'));
const HomePage = dynamic(() => import('@/components/modules/HomePage'));
const Skills = dynamic(() => import('@/components/modules/Skills'))
const Jobs = dynamic(() => import('@/components/modules/Jobs'))
const Contact = dynamic(() => import('@/components/modules/Contact'))

export const components = {
  inDev: InDev,
  HomePage: HomePage,
  Skills: Skills,
  Jobs: Jobs,
  Contact: Contact,
};
