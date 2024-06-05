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
                Using Raido is simple and efficient. First, download our
                user-friendly app from the App Store or Google Play Store. Sign
                up and enter your details to create an account. To book a ride,
                simply open the app, set your pickup and drop-off locations, and
                choose your preferred vehicle type. You can track your ride in
                real-time and receive notifications about your driver&apos;s arrival
                and trip status. Once your ride is complete, payment is
                automatically processed through the app, eliminating the need
                for cash transactions. With our transparent pricing and no
                hidden charges, you&apos;ll know exactly what to expect before
                confirming your booking. Experience hassle-free travel with
                Raido – Chennai&apos;s premier bike taxi and auto booking app.
              </p>
              <br/>
              <CustomButton>
                <Link href='/services'>Other Services</Link>
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
