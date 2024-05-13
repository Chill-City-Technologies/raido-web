import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import styles from "./why_us.module.scss";

const Card = ({ data }) => {
  const { head, text, id } = data;

  return (
    <Col xs={12} md={6} lg={3}>
      <div className={styles.card}>
        <Image src={`/assets/svg/${id}.svg`} alt={id} width={200} />
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
      head: "0% Commission",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam suscipit provident error?",
    },
    {
      id: "pickup",
      head: "Pick-Up at Door",
      text: "We will pick you up from where you are and drop you exactly where you need to be.",
    },
    {
      id: "drop",
      head: "Quick Drop",
      text: "Trend setters of smart commute be it traffic or rush hours.",
    },

    {
      id: "price2",
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
