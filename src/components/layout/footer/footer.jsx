import React from "react";
import styles from "./footer.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Image, Row } from "react-bootstrap";
import Link from "next/link";
import SocialMedia from "@/components/social_media/social_media";
import TABS from "@/constants/services";
import DownloadButtons from "@/components/download_button/download_button";

export const DownloadSection = ({ isAbout }) => {
  return (
    <Col xs={12} md={6} lg={3}>
      <div className={`${styles.sec} ${styles.sec1}`}>
        <h4>Download Raido</h4>
        <DownloadButtons isHeader />
        {isAbout && <br />}
        <h4>Follow Us On</h4>
        <SocialMedia variant={isAbout && 2} />
      </div>
    </Col>
  );
};
const PAGES = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Privacy Policy",
    href: "/privacy",
  },
  {
    name: "Terms of Service",
    href: "/terms",
  },
  {
    name: "Cookies Policy",
    href: "/cookies",
  },
  {
    name: "Refund Policy",
    href: "/refund",
  },
  {
    name: "Disclaimer",
    href: "/disclamer",
  },
];

// export Download;

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <CustomContainer>
        <Row>
          <Col xs={12} md={6} lg={5}>
            <div className={`${styles.sec} ${styles.sec1}`}>
              <Image src="/logo.png" alt="logo" width={180} />
              <br />
              <p>
                Chennai&apos;s budding bike taxi and auto booking app. We offer the
                most affordable cab service in town with no hidden charges for
                drivers or customers. Unlike others, we charge zero commission
                to our drivers, ensuring fair earnings and exceptional service.
                Providing daily school rides, parents can track their children&apos;s
                journey in real-time.
              </p>
            </div>
          </Col>
          <Col xs={6} md={6} lg={2}>
            <div className={`${styles.sec} ${styles.sec2}`}>
              <h4>Links</h4>
              {PAGES.map((p) => (
                <p key={p.name} className={styles.links}>
                  <Link href={p.href}>{p.name}</Link>
                </p>
              ))}
            </div>
          </Col>
          <Col xs={6} md={6} lg={2}>
            <div className={`${styles.sec} ${styles.sec2}`}>
              <h4>Services</h4>
              {TABS.map((p, i) => (
                <p key={p.name} className={styles.links}>
                  <Link href={`/services?t=${i}`}>{p.name}</Link>
                </p>
              ))}
            </div>
          </Col>

          <DownloadSection />
        </Row>
        <hr />
        <small>All rights reserved by Raido, powerd by Chill City Technology</small>
      </CustomContainer>
    </footer>
  );
};

export default Footer;
