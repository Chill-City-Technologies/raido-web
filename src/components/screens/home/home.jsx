import AboutSection from "./sections/about/about";
import BannerSection from "./sections/banner/banner";
import WhyUs from "./sections/why_us/why_us";

const HomeScreen = () => {
  return (
    <>
      <BannerSection />
      <AboutSection/>
      <WhyUs/>
    </>
  );
};

export default HomeScreen;
