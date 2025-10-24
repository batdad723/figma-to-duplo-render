import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import UseCases from "@/components/UseCases";
import BuildYourOwn from "@/components/BuildYourOwn";
import PoweredBy from "@/components/PoweredBy";
import GrowingLibrary from "@/components/GrowingLibrary";
import BlogCards from "@/components/BlogCards";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <TrustedBy />
        <UseCases />
        <BuildYourOwn />
        <PoweredBy />
        <GrowingLibrary />
        <BlogCards />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
