const { default: Blob1 } = require("@/components/blobs/blob1");

import Blob2 from "@/components/blobs/blob2";
import styles from "./banner.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Image } from "react-bootstrap";
import Link from "next/link";
import DownloadButtons from "@/components/download_button/download_button";

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
                <span className={styles.highlight}>
                  0% <span className={styles.sp2}>Commission</span> is our{" "}
                  <span className={styles.sp1}>Mission</span>
                </span>
                <br />
                <br />
                Book Your <span className={styles.sp2}>Safest</span> &{" "}
                <span className={styles.sp1}>Affordable</span> Bike, Auto &
                School Rides Today
              </h1>
              <p data-aos="fade-up">
                Introducing Raido&apos;s New &quot;Raido School&quot; for your
                children&apos;s safest daily school rides. Download Raido Now.
                <br />
              </p>

              <p data-aos="fade-up" className={styles.comingSoon}>
                Coming Soon...
              </p>
              <DownloadButtons />
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
