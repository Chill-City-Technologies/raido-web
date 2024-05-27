import React from "react";
import styles from "./footer.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Image, Row } from "react-bootstrap";
import Link from "next/link";
import PAGES from "@/constants/pages";
import SocialMedia from "@/components/social_media/social_media";
import TABS from "@/constants/services";
import DownloadButtons from "@/components/download_button/download_button";

export const DownloadSection = ({isAbout}) => {
  return <Col xs={12} md={6} lg={3}>
    <div className={`${styles.sec} ${styles.sec1}`}>
      <h4>Download Raido</h4>
      <DownloadButtons isHeader />
      {
        isAbout && <br/>
      }
      <h4>Follow Us On</h4>
      <SocialMedia variant={isAbout && 2}/>
    </div>
  </Col>;
};

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                fuga vero maxime! Numquam accusamus, nulla incidunt, dolore
                voluptate fuga consectetur dolores, maiores sapiente culpa sint
                odit. Suscipit facere rerum accusamus!
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

          <DownloadSection/>
        </Row>
        <hr />
      </CustomContainer>
    </footer>
  );
};

export default Footer;
