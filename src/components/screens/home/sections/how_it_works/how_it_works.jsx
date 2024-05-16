import React from "react";
import styles from "./how_it_works.module.scss";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Image, Row } from "react-bootstrap";

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
      text: "Curabitur ac quam aliquam urna vehicula semper sed vel elit. Sed et leo purus. Vivamus vitae sapien.",
    },
    {
      id: "driver",
      head: "Get a Driver",
      text: "Curabitur ac quam aliquam urna vehicula semper sed vel elit. Sed et leo purus. Vivamus vitae sapien.",
    },
    {
      id: "track",
      head: "Track your Driver",
      text: "Curabitur ac quam aliquam urna vehicula semper sed vel elit. Sed et leo purus. Vivamus vitae sapien.",
    },
    {
      id: "arrive",
      head: "Arrive safely",
      text: "Curabitur ac quam aliquam urna vehicula semper sed vel elit. Sed et leo purus. Vivamus vitae sapien.",
    },
  ];

  return (
    <section className={styles.howItWorksSection}>
      <SectionHeading head="How It Works" />
      <CustomContainer>
        <Row>
          <Col xs={12} md={6}>
            <div className={styles.left} data-aos='fade-right'>
              <h3>Lorem ipsum dolor sit.</h3>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia,
                in, molestiae mollitia ipsam delectus est provident quaerat ex
                quidem beatae repudiandae iste et eaque commodi, aperiam
                sapiente vel! Consectetur enim eaque reprehenderit, fugiat
                minima debitis aperiam veritatis sed commodi facilis dolores
                molestias reiciendis harum earum eveniet quibusdam voluptate
                dicta esse iure excepturi, adipisci at. Hic exercitationem
                doloremque corrupti velit repellendus dolores dolorum fuga
                adipisci quae quo, enim nisi libero vero aperiam inventore
                deleniti odit laboriosam harum qui labore? Sit, repellat amet.
                Corporis eum iusto illo eligendi sapiente impedit illum sit id
                ipsa, soluta doloribus sed cumque debitis repellat, nisi quas.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className={styles.right} data-aos='fade-left'>
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
