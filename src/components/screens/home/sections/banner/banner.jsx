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
              <h1>
                Book Your <span className={styles.sp1}>Eco</span> {' '}
                <span className={styles.sp2}>Friendly</span> Bike Taxi
                Today
              </h1>
              <p>Booking an ride with Raido is as easy as 1-2-3. <br/>Simply download our app.</p>

              <Link href="/">
                <Image src="/assets/playbtn.png" alt="logo" fluid width={200} />
              </Link>
            </div>
          </div>
          <div className={styles.hero}>
            <Image src="/assets/svg/hero2.svg" alt="hero" fluid />
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default BannerSection;
