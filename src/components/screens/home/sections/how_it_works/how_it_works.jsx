import React from "react";
import styles from "./how_it_works.module.scss";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Image, Row } from "react-bootstrap";
import CustomButton from "@/components/ui/custom_button/custom_button";
import Link from "next/link";

const Step = ({ data }) => {
  const { id, head, text } = data;

  return (
    <div className={styles.step}>
      <div className={styles.img}>
        <Image src={`/assets/webp/${id}.webp`} alt={id} />
      </div>
      <div className={styles.text}>
        <h4>{head}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

const HowItWorksSection = () => {
  const steps = [
    {
      id: "book",
      head: "Book in Just 3 Taps",
      text: "Choose where you want to be picked up. Select the destination on the map. Tap Book.",
    },
    {
      id: "driver",
      head: "Get a Raido Star",
      text: "Our intelligent algorithm will list your nearest Raidos Star automatically. You can choose your preferred Raido Star. Or let Raido choose for you.",
    },
    {
      id: "track",
      head: "Track your Ride",
      text: "Once booked, You can track your ride from pick-up to drop in our user friendly interface. Just sit-back and relax.",
    },
    {
      id: "arrive",
      head: "Arrive safely",
      text: "Your safety is always our foremost concern. Our Well-trained and experienced Stars will make sure you arrive safely. allowing you to ride confidently and securely.",
    },
  ];

  return (
    <section className={styles.howItWorksSection}>
      <SectionHeading head="How It Works" />
      <CustomContainer>
        <Row>
          <Col xs={12} md={6}>
            <div className={styles.left} data-aos="fade-right">
              <h3>Your Easiest Way To Book a Raid</h3>
              <hr />
              <p>
                Getting started with Raido is seamless and hassle-free. Simply
                download our easy-to-use app from the App Store or Google Play
                Store, sign up, and create your account. Booking a ride is as
                simple as setting your pickup and drop-off locations and
                selecting your preferred vehicle type. Track your ride in
                real-time, stay updated with instant notifications about your
                driver’s arrival, and enjoy a smooth, stress-free experience.
                With automatic in-app payments, there’s no need for cash – and
                with our transparent pricing, you’ll always know the fare before
                confirming your booking. Discover effortless travel with Raido –
                Tamil Nadu’s trusted app for cab and ambulance bookings.
              </p>
              <br />
              <CustomButton>
                <Link href="/services">Other Services</Link>
              </CustomButton>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className={styles.right} data-aos="fade-left">
              <div className={styles.strip} />
              {steps.map((s) => (
                <Step key={s.id} data={s} />
              ))}
            </div>
          </Col>
        </Row>
      </CustomContainer>
    </section>
  );
};

export default HowItWorksSection;
