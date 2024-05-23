const { default: Blob1 } = require("@/components/blobs/blob1");

import Blob2 from "@/components/blobs/blob2";
import styles from "./banner.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Image } from "react-bootstrap";
import Link from "next/link";

const BannerSection = () => {
  return (
    <section className={styles.bannerSection}>
      <Blob1 />
      <Blob2 />
      <CustomContainer>
        <div className={styles.banner}>
          <div className={styles.cont}>
            <div>
              <h1 data-aos="fade-down">
                Book Your <span className={styles.sp2}>Safest</span> &{" "}
                <span className={styles.sp1}>Affordable</span> Bike, Auto &
                School Rides Today
              </h1>
              <p data-aos="fade-up">
                Introducing Raido&apos;s New &quot;Raido School&quot; for your
                children&apos;s safest daily school rides. Download Raido Now.
                <br />
                {/* Simply download our app. */}
              </p>

              <Link href="/" data-aos="flip-up">
                <Image src="/assets/playbtn.png" alt="logo" fluid width={200} />
              </Link>
            </div>
          </div>
          <div className={styles.hero}>
            <Image
              src="/assets/svg/hero2.svg"
              alt="hero"
              fluid
              data-aos="fade-left"
            />
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default BannerSection;
