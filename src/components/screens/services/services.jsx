import React from "react";
import styles from "./services.module.scss";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Image, Row } from "react-bootstrap";
import Link from "next/link";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { StarFill } from "react-bootstrap-icons";
import SocialMedia from "@/components/social_media/social_media";

const Service = ({ isRight, data }) => {
  const { head, text, img, noMargin, cta } = data;

  return (
    <div className={`${styles.service} ${isRight ? styles.right : ""}`}>
      <div className={styles.text}>
        <h2>{head}</h2>
        <hr />
        <p>{text}</p>
        <br />
        {cta}
      </div>
      <div className={`${styles.img} ${noMargin ? styles.noMargin : ""}`}>
        <Image fluid src={`/assets/svg/${img}.svg`} alt="auto1" />
      </div>
    </div>
  );
};

const ServicesScreen = () => {
  const services = [
    {
      id: "1",
      head: "Unlimited Rides, One Monthly Fee",
      img: "subs",
      text: "Experience the freedom of unlimited rides with Raido's subscription-based model, all without the burden of additional commissions. For a flat monthly fee, users can access an extensive network of vehicles without worrying about fluctuating fares or hidden charges. Raido's commitment to transparency means that what you see is what you pay, with 0% commission on all rides. Say goodbye to the hassle of calculating fares and hello to seamless travel with Raido's unlimited ride feature.",
      cta: (
        <Link href="/">
          <Image src="/assets/playbtn.png" alt="logo" fluid width={170} />
        </Link>
      ),
    },
    {
      id: "2",
      head: "Hassle-Free School Transportation",
      img: "auto1",
      noMargin: true,
      text: "Raido understands the paramount importance of safety and reliability when it comes to transporting students to and from school. With our dedicated school pickup and drop services, parents can rest assured knowing that their child's journey is in capable hands. Our specially trained drivers adhere to strict safety protocols, and parents can track their child's ride in real-time through the Raido app. With instant notifications for every pickup and drop-off, Raido ensures a stress-free school transportation experience for both parents and students.",
      cta: <CustomButton>Contact Us Now</CustomButton>,
    },
    {
      id: "3",
      head: "Real-Time Tracking and Notifications",
      img: "track",
      text: "Stay connected and informed throughout your journey with Raido's real-time tracking and notification feature. Using advanced GPS technology, users can track their ride from start to finish, ensuring transparency and peace of mind. Parents can also monitor their child's school transportation in real-time, receiving notifications for every ride update. Whether it's tracking your ride's progress or staying updated on your child's whereabouts, Raido's real-time tracking and notifications feature puts you in control every step of the way.",
      cta: (
        <SocialMedia variant={2}/>
      ),
    },
    {
      id: "4",
      head: "Convenient Booking With Zero Commission",
      img: "comm",
      text: "Raido's user-friendly interface makes booking a ride quick, easy, and convenient, with 0% commission on all bookings. Simply open the app, enter your destination, and select your preferred ride option. Whether you need a ride immediately or want to schedule one for later, Raido offers flexible booking options to suit your needs, all without any additional fees. Enjoy the convenience of seamless booking with Raido, your trusted transportation partner.",
      cta: (
        <CustomButton>
          <p>Rate us</p>
          <StarFill />
          <StarFill />
          <StarFill />
          <StarFill />
          <StarFill />
        </CustomButton>
      ),
    },

    {
      id: "5",
      head: "Exceptional Service, Every Time",
      img: "service",
      text: "At Raido, we prioritize customer satisfaction and safety above all else. Our team of professional drivers undergo rigorous training to ensure that every ride with Raido is safe, comfortable, and enjoyable. From friendly greetings to efficient navigation, Raido's drivers are committed to providing exceptional service with every journey. Whether you're commuting to work, running errands, or heading out for a night on the town, you can trust Raido to deliver a superior transportation experience, every time. Experience the difference with Raido and enjoy peace of mind on the road.",
      cta: <CustomButton>Post a Review</CustomButton>,
    },
  ];

  return (
    <main className={styles.servicesScreen}>
      <SectionHeading head="Our Services" />
      <CustomContainer>
        <p className={styles.cap}>
          Welcome to Raido, where hassle-free travel meets affordability. With
          Raido&apos;s subscription-based model, enjoy the convenience of
          unlimited rides without worrying about additional commissions. For a
          flat monthly fee, gain access to an extensive network of vehicles,
          eliminating the stress of fluctuating fares or unexpected charges.
        </p>
        {services.map((s, i) => (
          <Service key={s.id} data={s} isRight={i % 2} />
        ))}
      </CustomContainer>
    </main>
  );
};

export default ServicesScreen;
