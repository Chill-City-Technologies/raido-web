import React from "react";
import styles from "./abput.module.scss";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import { Col, Image, Row } from "react-bootstrap";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomButton from "@/components/ui/custom_button/custom_button";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <SectionHeading head="Know Us Better" />
      <CustomContainer>
        <Row>
          <Col xs={12} md={7}>
            <div className={styles.left} data-aos="fade-right">
              <h3>Let Us Be Your Riding Partner</h3>
              <hr />
              <p>
                Welcome to Raido, Chennai's budding auto cab and ambulance
                booking app. We offer the most affordable transportation service
                in town with no hidden charges for drivers or customers. Unlike
                others, we charge zero commission to our drivers, ensuring fair
                earnings and exceptional service. Providing daily school rides,
                parents can track their children's journey in real-time. Safety
                is our priority, with every ride insured and our experienced,
                well-trained drivers. Our user-friendly app makes booking
                effortless with GPS tracking and instant notifications. Join
                Raido for reliable, transparent, and safe travel solutions in
                Chennai. Ride with us and experience the difference today!
              </p>
              <p>
                At Raido, we make commuting affordable and convenient in
                Chennai. Our auto cab and ambulance services are designed to
                offer the lowest rates around. Whether you're heading to work,
                traveling with family, or requiring emergency medical transport,
                we ensure you get there without high costs. With clear and
                transparent pricing, there are no hidden fees. Auto cab owners
                pay just <strong>25 INR per day</strong>, and ambulance owners
                enjoy zero commission, ensuring all your earnings stay with you.
                Choose Raido for an economical, efficient, and life-saving
                travel experience.
              </p>
              <p></p>
              <p>
                Join the Raido community today and experience the difference.
                With our commitment to affordability, transparency, and safety,
                we are dedicated to transforming the way Chennai travels. Choose
                Raido for a ride you can trust, every time.
              </p>
              <br />
              <CustomButton>
                <Link href="/about">Know More</Link>
              </CustomButton>
            </div>
          </Col>
          <Col xs={12} md={5}>
            <div className={styles.img} data-aos="fade-left">
              <Image src="/logo.png" alt="auto" fluid />
              <div className={styles.logos}>
                <Image
                  src="/assets/svg/raido_stars_logo.svg"
                  alt="auto"
                  fluid
                />
                <Image src="/assets/svg/school1.svg" alt="auto" fluid />
              </div>
            </div>
          </Col>
        </Row>
      </CustomContainer>
    </section>
  );
};

export default AboutSection;
