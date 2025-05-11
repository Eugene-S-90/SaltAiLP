
import ScrollManager from "./components/ScrollManager";

import PageMotionWrapper from "./sections/PageMotionWrapper";
import ParallaxBackground from "./sections/ParallaxBg";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import CrowdsourcingSection from "./sections/CrowdsourcingSection";
import Container from './sections/Container';
import ScrollBoundSections from "./sections/ScrollBoundSections"


export default function Home() {
  return (
    <>
      <ScrollManager />
      <PageMotionWrapper>
        <ParallaxBackground />
        <Container>
          <HeroSection />
          <ProjectsSection />
          <CrowdsourcingSection />
        </Container>
        <ScrollBoundSections />
      </PageMotionWrapper>
    </>
  );
}
