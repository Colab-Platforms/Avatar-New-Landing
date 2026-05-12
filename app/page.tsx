import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import StatsStrip from "@/components/StatsStrip";
import WhyChooseUs from "@/components/WhyChooseUs";
import Programs from "@/components/Programs";
import WhatYouLearn from "@/components/WhatYouLearn";
import DemoVideo from "@/components/DemoVideo";
import Benefits from "@/components/Benefits";
import Certifications from "@/components/Certifications";
import HowToEnroll from "@/components/HowToEnroll";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <HeroSlider />
        <StatsStrip />
        <WhyChooseUs />
        <Programs />
        <WhatYouLearn />
        <DemoVideo />
        <Benefits />
        <Certifications />
        <HowToEnroll />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
