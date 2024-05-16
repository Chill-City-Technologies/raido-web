import React from "react";
import styles from "./abput.module.scss";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import { Col, Image, Row } from "react-bootstrap";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import CustomButton from "@/components/ui/custom_button/custom_button";

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <SectionHeading head="Know Us Better" />
      <CustomContainer >
        <Row>
          <Col xs={12} md={8}>
            <div className={styles.left} data-aos='fade-right'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam aliquam eos perferendis, iusto esse corporis voluptates
                obcaecati maxime atque tempore architecto fugiat alias ratione
                nisi a impedit corrupti voluptatem. Assumenda vitae, illum
                tenetur unde aut nemo corrupti neque iure harum similique
                nesciunt illo hic, et dolor fuga, expedita ab. Deserunt, ut
                alias ipsum est nobis dicta, repudiandae veritatis similique,
                corporis nemo nihil qui? Minima magnam dolorem aliquid repellat
                cum earum. Atque aliquam minima quidem nemo? Sequi, molestiae
                sint provident temporibus dicta alias, ducimus ex non veritatis,
                autem fugit explicabo a. Quaerat quo quibusdam maxime vero,
                pariatur unde odit animi, similique incidunt eius officia
                adipisci voluptatibus commodi aliquid saepe impedit provident ab
                dolor, obcaecati doloremque sunt ex ullam. In ratione, dicta
                nostrum nisi optio nihil, impedit nulla, saepe molestiae culpa
                corrupti! Velit nisi optio, inventore sint ullam, ratione beatae
                est eius non tempore voluptate ad dolores, facere facilis qui.
                Vel tempora eligendi dignissimos at sunt. Velit rem, veritatis
                nostrum debitis officiis ratione repudiandae aspernatur soluta
                ad facilis sed dicta voluptatibus porro necessitatibus
                laboriosam illum voluptates quaerat excepturi quidem quae animi
                qui! Deleniti error delectus necessitatibus nulla rerum
                asperiores doloribus dolorem dolore molestiae. Suscipit minus
                asperiores consectetur ad saepe vel, molestiae voluptatibus.
              </p>
              <CustomButton>Know More</CustomButton>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className={styles.img} data-aos='fade-left'>
              <Image src="/assets/auto.jpg" alt="auto" fluid />
            </div>
          </Col>
        </Row>
      </CustomContainer>
    </section>
  );
};

export default AboutSection;
