import FAQ from "../faq section/FAQ";
import HeroSection from "../heroSection/HeroSection";
import RecommendedProducts from "../recommendedProducts/RecommendedProducts";
import Testimonials from "../testimonials/Testimonials";
import VideoBlogs from "../videoBlogs/VideoBlogs";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <RecommendedProducts />
      <VideoBlogs />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default HomePage;
