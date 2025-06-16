import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import AboutBook from "@/components/AboutBook";
import FeatureCards from "@/components/FeaturedCards";
import WebLayout from "@/components/Layouts/WebLayout";

const HomePage: React.FC = () => {
  return (
    <WebLayout>
      <Hero />
      <AboutBook />
      <FeatureCards />
      <Hero />
      <Container>

        <FAQ />

        <CTA />
      </Container>
    </WebLayout>
  );
};

export default HomePage;
