import React, { useState } from "react";
import styles from "./services.module.scss";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Image } from "react-bootstrap";
import Link from "next/link";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { StarFill } from "react-bootstrap-icons";
import SocialMedia from "@/components/social_media/social_media";
import RaidoTabs from "@/components/ui/tabs/tabs";
import TABS from "@/constants/services";
import { useRouter } from "next/router";

const Service = ({ isRight, data }) => {
  const { head, text, img, noMargin, cta } = data;

  return (
    <div className={`${styles.service} ${isRight ? styles.right : ""}`}>
      <div className={`${styles.img} ${noMargin ? styles.noMargin : ""}`}>
        <Image fluid src={`/assets/svg/${img}.svg`} alt="auto1" />
      </div>
      <div className={styles.text}>
        <h2>{head}</h2>
        <hr />
        <div>{text}</div>
        <br />
        {cta}
      </div>
    </div>
  );
};

const ServicesScreen = () => {

  const router = useRouter()

  const tabId = router.query.t || '0'

  const [currentTab, setCurrentTab] = useState(TABS[tabId]);

  return (
    <main className={styles.servicesScreen}>
      <SectionHeading head="Our Services" />
      <CustomContainer>
        <RaidoTabs
          tabs={TABS}
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          variant={2}
        />
        <br/>
        <p className={styles.cap}>
          {/* Welcome to Raido, where hassle-free travel meets affordability. With
          Raido&apos;s subscription-based model, enjoy the convenience of
          unlimited rides without worrying about additional commissions. For a
          flat monthly fee, gain access to an extensive network of vehicles,
          eliminating the stress of fluctuating fares or unexpected charges. */}
          {currentTab.caption}
        </p>
        <div className={styles.gap} />

        {currentTab.services.map((s, i) => (
          <Service key={s.id} data={s} isRight={!(i % 2)} />
        ))}
      </CustomContainer>
    </main>
  );
};

export default ServicesScreen;
