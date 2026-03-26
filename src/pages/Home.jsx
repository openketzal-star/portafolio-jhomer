import { ArrowRight, Code, Video, Search, Globe, Mail, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import HeroSection from '../components/sections/HeroSection';
import StatsSection from '../components/sections/StatsSection';
import ServicesSection from '../components/sections/ServicesSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import CTASection from '../components/sections/CTASection';

const Home = () => {
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 });





  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="space-y-20 md:space-y-28">
      <HeroSection />

      <StatsSection />

      <ServicesSection />

      <ProjectsSection />

      <CTASection />
    </div>
  );
};

export default Home;