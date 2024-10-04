import AboutSection from "./sections/about/about";
import BannerSection from "./sections/banner/banner";
import DownloadSection from "./sections/download/download";
import HowItWorksSection from "./sections/how_it_works/how_it_works";
import ReviewsSection from "./sections/reviews/reviews";
import WhyUs from "./sections/why_us/why_us";

const HomeScreen = () => {
  return (
    <main>
      <BannerSection />
      <AboutSection />
      <WhyUs />
      <HowItWorksSection />
      <DownloadSection />
    </main>
  );
};

export default HomeScreen;
