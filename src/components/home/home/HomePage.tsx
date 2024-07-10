import CategoriesSection from "../category/Category";
import FAQ from "../faq section/FAQ";
import FeaturedProducts from "../featuredProducts/FeaturedProducts";
import HeroSection from "../heroSection/HeroSection";
import RecommendedProducts from "../recommendedProducts/RecommendedProducts";
import Testimonials from "../testimonials/Testimonials";
import VideoBlogs from "../videoBlogs/VideoBlogs";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <CategoriesSection />
      <RecommendedProducts />
      <VideoBlogs />
      <FeaturedProducts />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default HomePage;
