import React from "react";
import styles from "./download.module.scss";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Image, Row } from "react-bootstrap";
import hexToFilter from "css-filter-converter";
import { COLORS } from "@/constants/styles";
import Link from "next/link";
import DownloadButtons from "@/components/download_button/download_button";

const DownloadSection = () => {
  return (
    <section className={styles.downloadSection}>
      <SectionHeading head="Download Raido" variant={3} />
      <CustomContainer>
        <Row>
          <Col xs={12} md={7}>
            <div className={styles.left} data-aos="fade-left">
              <h3>
                Download the <span>Raido</span> mobile application
              </h3>
              <p>
                Download the Raido app today and experience seamless
                transportation solutions right at your fingertips. Available for
                both iOS and Android devices, our user-friendly app allows you
                to book bike taxi and auto rides with ease. Simply visit the App
                Store or Google Play Store, search for &quot;Raido&quot; and
                download the app for free. Once installed, sign up to create
                your account and start booking rides instantly. With Raido, you
                can enjoy the convenience of real-time GPS tracking, instant
                notifications, and secure payment options. Say goodbye to
                waiting for taxis or dealing with cash transactions – Raido
                streamlines your travel experience for maximum efficiency and
                convenience. Join thousands of satisfied customers who rely on
                Raido for affordable, safe, and reliable transportation in
                Chennai. Download the app today and discover a better way to get
                around the city.
              </p>
              <DownloadButtons />
            </div>
          </Col>
          <Col xs={12} md={5}>
            <div className={styles.imgs} data-aos="fade-right">
              <Image
                src="/assets/svg/blob1.svg"
                className={styles.blob}
                alt="phone_map"
                fluid
                style={{
                  filter: hexToFilter.hexToFilter(COLORS.color_1).color,
                }}
              />
              <Image
                // src="/assets/svg/phone_map.svg"
                src="/assets/phone.png"
                className={styles.img}
                alt="phone_map"
                fluid
              />
            </div>
          </Col>
        </Row>
      </CustomContainer>
    </section>
  );
};

export default DownloadSection;
