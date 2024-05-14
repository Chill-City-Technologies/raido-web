import React from "react";
import styles from "./download.module.scss";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Image, Row } from "react-bootstrap";
import hexToFilter from "css-filter-converter";
import { COLORS } from "@/constants/styles";
import Link from "next/link";

const DownloadSection = () => {
  return (
    <section className={styles.downloadSection}>
      <SectionHeading head="Download Raido" variant={3} />
      <CustomContainer>
        <Row>
          <Col xs={12} md={7}>
            <div className={styles.left}>
              <h3>Download the <span>Raido</span> mobile application</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, quibusdam qui neque in necessitatibus non perferendis
                magnam architecto facere minima enim deleniti molestiae aliquam
                fugiat incidunt nam consequuntur explicabo. Accusamus. neque in
                necessitatibus non perferendis magnam architecto facere minima
                enim deleniti molestiae aliquam fugiat incidunt nam consequuntur
                explicabo. Accusamus.
              </p>
              <Link href="/">
                <Image src="/assets/playbtn.png" alt="logo" fluid width={200} />
              </Link>
            </div>
          </Col>
          <Col xs={12} md={5}>
            <div className={styles.imgs}>
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
                src="/assets/svg/phone_map.svg"
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
