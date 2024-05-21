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
      img: "pickup.svg",
      head: "Pick-Up at Door",
      text: "We will pick you up from where you are and drop you exactly where you need to be.",
    },
    {
      id: "drop",
      img: "drop.jpg",
      head: "Quick Drop",
      text: "Trend setters of smart commute be it traffic or rush hours.",
    },

    {
      id: "price2",
      img: "price2.svg",
      head: "Affordable Price",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam suscipit provident error?",
    },
  ];

  const riderCards = [
    {
      id: "comm",
      img: "comm.svg",
      head: "0% Commission",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam suscipit provident error?",
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
      name: "As a Rider Star",
      content: riderCards,
    },
  ];

  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <section className={styles.whyUs}>
      <SectionHeading head="Why Choose Us?" variant={2} />
      <CustomContainer>
       <div data-aos='fade-up'>
       <RaidoTabs
          tabs={tabs}
          setCurrentTab={setCurrentTab}
          currentTab={currentTab}
        />
       </div>
        <br/>
        <br/>
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
