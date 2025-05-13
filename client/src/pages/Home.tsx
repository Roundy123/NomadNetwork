import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import DestinationShowcase from "@/components/DestinationShowcase";
import LifestyleShowcase from "@/components/LifestyleShowcase";
import Community from "@/components/Community";
import WorkspaceShowcase from "@/components/WorkspaceShowcase";
import Membership from "@/components/Membership";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Nomads - Live Anywhere. Work Everywhere.</title>
        <meta 
          name="description" 
          content="Join our global community of remote workers and explore the world while growing your career." 
        />
        <meta property="og:title" content="Nomads - Live Anywhere. Work Everywhere." />
        <meta property="og:description" content="Join our global community of remote workers and explore the world while growing your career." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <DestinationShowcase />
        <LifestyleShowcase />
        <Community />
        <WorkspaceShowcase />
        <Membership />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
