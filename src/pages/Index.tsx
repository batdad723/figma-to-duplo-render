import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import ExploreMore from "@/components/ExploreMore";
import Integrations from "@/components/Integrations";
import SecurityCompliance from "@/components/SecurityCompliance";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <TrustedBy />
        <ExploreMore />
        <Integrations />
        <SecurityCompliance />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
