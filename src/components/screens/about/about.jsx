import SectionHeading from "@/components/ui/section_heading/section_heading";
import React from "react";
import styles from "./about.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Image, Row } from "react-bootstrap";
import { DownloadSection } from "@/components/layout/footer/footer";

const AboutScreen = () => {
  return (
    <main className={styles.aboutScreen}>
      <SectionHeading head="About Us" />
      <CustomContainer>
        <p className={styles.caption}>
          Welcome to Raido: Powered by Chill City Technology, your trusted car,
          auto, and ambulance booking app, now serving cities across India. We
          offer the most affordable transportation services in town, with no
          hidden charges for drivers or customers. Unlike others, we charge zero
          commission to our drivers, ensuring fair earnings and exceptional
          service. From daily commutes to ambulance services, Raido prioritizes
          your safety and convenience. Parents can track their children's school
          rides in real-time, ensuring peace of mind. Every ride is insured,
          with experienced and well-trained drivers at your service. Our
          user-friendly app simplifies booking with GPS tracking and instant
          notifications. Join Raido for reliable, transparent, and safe travel
          solutions wherever you are. Ride with us and experience the difference
          today!
        </p>
        <br />
        <br />
        <br />
        <div className={styles.ceo}>
          <Row>
            <Col xs={12} md={4}>
              <Image src="/assets/user.jpg" alt="User" fluid />
            </Col>
            <Col>
              <div className={styles.message}>
                <h1>
                  Message From The <span>CEO</span>
                </h1>
                <p className={styles.msg2}>
                  <span>&quot;</span>
                  Safety is at the core of everything we do. From rigorous
                  driver training programs to comprehensive ride insurance, we
                  leave no stone unturned in ensuring your journey with Raido is
                  secure and comfortable. Our advanced technology, featuring
                  real-time GPS tracking and instant notifications, enhances
                  transparency and convenience, making every ride smooth and
                  predictable.
                  <span>&quot;</span>
                </p>
                <br />
                <p className={styles.msg}>
                  <span>&quot;</span>
                  <span>
                    Thank you for choosing Raido. We are excited to be part of
                    your daily commute and are committed to continuously
                    improving our services to meet your needs. Together, let’s
                    make every ride a great one.&quot;
                  </span>
                </p>
                <br />
                <p>
                  <strong>Abishek Muniasamy</strong>
                </p>
                <p>CEO, Raido.</p>
              </div>
            </Col>
          </Row>
        </div>
        <br />
        <br />
        <div className={styles.more}>
          <h1>
            More about <span>Raido</span>
          </h1>
          <hr />
          <div>
            <p>
              What sets Raido apart from other apps is our unique business
              model: we charge zero commission to our drivers. This allows us to
              support our hardworking drivers, enabling them to earn a fair and
              sustainable income while delivering exceptional service to our
              customers. By fostering a positive and supportive environment for
              our drivers, we ensure they are motivated and dedicated to
              providing the best possible experience for you.
            </p>
          </div>
          <br />

          <div>
            <p>
              In addition to car and auto services, Raido is proud to offer
              ambulance services in partnership with leading hospitals and fleet
              operators. Whether it’s an emergency or a planned medical
              transfer, Raido ensures reliable and timely ambulance availability
              at your fingertips.
            </p>
          </div>
          <br />

          <div>
            <p>
              Raido also supports families with daily school rides for children.
              We understand the importance of ensuring the safety and well-being
              of young passengers, which is why we provide real-time tracking
              for parents. This feature allows parents to monitor their child’s
              journey from start to finish, providing peace of mind and ensuring
              a secure travel experience.
            </p>
          </div>
          <br />
          <div>
            <p>
              Safety is our foremost concern at Raido. We go above and beyond to
              protect our customers and drivers. Every ride is insured, offering
              an additional layer of security and peace of mind. Our drivers
              undergo rigorous training and are highly experienced, ensuring
              that you are in safe hands from the moment you book a ride to your
              final destination.
            </p>
          </div>
          <br />
          <div>
            <p>
              Our user-friendly app makes booking a ride quick and effortless.
              With real-time GPS tracking, instant notifications, and a seamless
              interface, Raido offers a convenient and stress-free travel
              solution for everyone. Whether you’re commuting to work, running
              errands, ensuring your child gets to school safely, or needing
              medical transportation, Raido is here to make your journey smooth
              and reliable. ai travels. Choose Raido for a ride you can trust,
              every time.
            </p>
          </div>
          <br />
          <div>
            <p>
              Join the Raido community today and experience the difference. With
              our commitment to affordability, transparency, and safety, we are
              dedicated to transforming the way India travels. Choose Raido for
              a ride you can trust, every time.
            </p>
          </div>
          <br />
        </div>
        <div>{/* <DownloadSection isAbout /> */}</div>
      </CustomContainer>
    </main>
  );
};

export default AboutScreen;
