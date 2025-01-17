import React from "react";
import styles from "./contact.module.scss";
import { Col, Row } from "react-bootstrap";
import ContactForm from "./contact_form/contact_form";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import SocialMedia from "@/components/social_media/social_media";
import {
  Envelope,
  EnvelopeAtFill,
  PhoneFill,
  PinMap,
  PinMapFill,
} from "react-bootstrap-icons";

const ContactScreen = () => {
  return (
    <main className={styles.contactScreen}>
      <CustomContainer>
        {/* <SectionHeading head="Contact Us" /> */}
        <div className={styles.box}>
          <div className={styles.info}>
            <h1>
              Let&apos;s talk on something <span>great</span> together
            </h1>
            <div className={styles.details}>
              <div className={styles.det}>
                <EnvelopeAtFill />
                <p>admin@raidotaxi.com</p>
              </div>
              <div className={styles.det}>
                <PhoneFill />
                <p>+91 86677 28057</p>
              </div>
              <div className={styles.det}>
                <PinMapFill />
                <p>Chennai, Coimbatore</p>
              </div>
               <div className={styles.det}>
               
                <p>Head Office : 25-B, Second Floor, Ram Nagar North Extension,<br/>Second Street, Velachery<br/>Chennai - 600 042</p>
              </div>
            </div>
            <div>
              <h4>Follow Us on</h4>
              <SocialMedia />
            </div>
          </div>
          <ContactForm />
        </div>
      </CustomContainer>
    </main>
  );
};

export default ContactScreen;
