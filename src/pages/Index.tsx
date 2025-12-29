import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeaderHome from "@/components/HeaderHome";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Clients from "@/components/Clients";
import EventsLaunches from "@/components/EventsLaunches";
import WhyChoose from "@/components/WhyChoose";
import Process from "@/components/Process";
import HowWeHelp from "@/components/HowWeHelp";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";
import News from "@/components/News";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToId) {
      const el = document.getElementById(location.state.scrollToId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100); // slight delay to ensure DOM is rendered
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <HeaderHome />
      <Hero />
      <About />
      <Services />
      <Clients />
     {/*<EventsLaunches />*/} 
      {/*<WhyChoose />*/}
      {/* <Process /> */}
      <HowWeHelp />
      <Testimonials />
        {/* <Work /> */}
      <News />
      <Footer />
    </div>
  );
};

export default Index;
