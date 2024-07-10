import FAQ from "../faq section/FAQ";
import HeroSection from "../heroSection/HeroSection";
import RecommendedProducts from "../recommendedProducts/RecommendedProducts";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <RecommendedProducts />
      <FAQ />
    </div>
  );
};

export default HomePage;
