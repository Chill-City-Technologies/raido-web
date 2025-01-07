import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import styles from "./why_us.module.scss";
import RaidoTabs from "@/components/ui/tabs/tabs";

const Card = ({ data, isEven }) => {
  const { head, text, id, img } = data;

  return (
    <Col xs={12} md={6} lg={3} className={styles.c}>
      <div
        className={styles.card}
        data-aos={`flip-${isEven ? "right" : "left"}`}
      >
        <Image src={`/assets/svg/${img}`} alt={id} height={200} />
        <h4>{head}</h4>
        <p>{text}</p>
      </div>
    </Col>
  );
};

const WhyUs = () => {
  const customerCards = [
    {
      id: "pickup",
      img: "ra3.svg",
      head: "Pick-Up at Door",
      text: "We will pick you up from where you are and drop you exactly where you need to be.",
    },
    {
      id: "drop",
      img: "ra4.svg",
      head: "Quick Drop",
      text: "With Raido's experienced and well trained Drivers, We are the Trend setters of smart commute be it traffic or rush hours.",
    },

    {
      id: "price2",
      img: "price3.svg",
      head: "Affordable Price",
      text: "Raido provides the most affordable cab service in the town. NO HIDDEN CHARGES!0%. NO COMMISSION!",
    },
    {
      id: "insurance",
      img: "insurance2.svg",
      head: "Insured Rides",
      text: "With Raido, You are in safe hands. Your Safety is out top-most Priority. Your Each and every ride is insured",
    },
  ];

  const riderCards = [
    {
      id: "earn",
      img: "earn.svg",
      head: "Earn What You Drive",
      text: "No Commission! No Hidden Charges!. Raido provides comparatively the highest earning opportunity for drivers.",
    },
    {
      id: "comm",
      img: "comm.svg",
      head: "0% Commission",
      text: "Not a single penny from your hard work would reach our pocket. Start the day by paying a fixed amount. That's All!",
    },
    {
      id: "transparent",
      img: "transparent.svg",
      head: "Transparency",
      text: "Transparency is the key. That's how Raido roll. Track your each and every step with our simple user-friendly interface.",
    },
    // {
    //   id: "finance",
    //   img: "finance.svg",
    //   head: "Flexible Subscription",
    //   // text: "With our latest payment integration technology, Payments are flawless and spontaneous. ",
    //   text: "With our new flexible subscription, Payments made easy",
    // },
    {
      id: "finance",
      img: "finance.svg",
      head: "Flawless Payments",
      text: "With our latest payment integration technology, Payments are flawless and spontaneous any time.",
    },
  ];

  const tabs = [
    {
      id: "customer",
      name: "As a Customer",
      content: customerCards,
    },
    {
      id: "rider",
      name: "As a Raido Star",
      content: riderCards,
    },
  ];

  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <section className={styles.whyUs}>
      <SectionHeading head="Why Choose Us?" variant={2} />

      <CustomContainer>
        <div data-aos="fade-up">
          <RaidoTabs
            tabs={tabs}
            setCurrentTab={setCurrentTab}
            currentTab={currentTab}
          />
        </div>
        <br />
        <br />
        <Row>
          {currentTab.content.map((c, i) => (
            <Card key={c.id} data={c} isEven={i % 2} />
          ))}
        </Row>
      </CustomContainer>
    </section>
  );
};

export default WhyUs;
