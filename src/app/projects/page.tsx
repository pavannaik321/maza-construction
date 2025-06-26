import Header from '@/components/Header';
import ProjectIntro from "@/components/ProjectIntro";
import ProjectTimeline from "@/components/ProjectTimeline";
import SustainableFocus from "@/components/SustainableFocus";
import TechInConstruction from "@/components/TechInConstruction";
import RecentProjects from "@/components/RecentProjects"
import Footer from '@/components/Footer';

export default function projects() {
  return (
    <>
      <Header />
      <ProjectIntro />
      <ProjectTimeline />
      <SustainableFocus />
      <RecentProjects/>
      <TechInConstruction />
      
    <Footer />
    </>
  );
}

