import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import styles from "./why_us.module.scss";

const Card = ({ data }) => {
  const { head, text, id, img } = data;

  return (
    <Col xs={12} md={6} lg={3} className={styles.c}>
      <div className={styles.card}>
        <Image src={`/assets/svg/${img}`} alt={id} height={200} />
        <h4>{head}</h4>
        <p>{text}</p>
      </div>
    </Col>
  );
};

const WhyUs = () => {
  const cards = [
    {
      id: "comm",
      img: "comm.svg",
      head: "0% Commission",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam suscipit provident error?",
    },
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

  return (
    <section className={styles.whyUs}>
      <SectionHeading head="Why Choose Us?" variant={2} />
      <CustomContainer>
        <Row>
          {cards.map((c) => (
            <Card key={c.id} data={c} />
          ))}
        </Row>
      </CustomContainer>
    </section>
  );
};

export default WhyUs;
