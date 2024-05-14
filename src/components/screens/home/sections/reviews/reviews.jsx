const {
  default: CustomContainer,
} = require("@/components/ui/custom_container/custom_container");

import { Image } from "react-bootstrap";
import styles from "./reviews.module.scss";
import { StarFill, StarHalf } from "react-bootstrap-icons";
import SectionHeading from "@/components/ui/section_heading/section_heading";

const Review = () => {
  return (
    <div className={styles.scrItem}>
      <div className={styles.img}>
        <Image src="/assets/user.jpg" fluid alt="user" />
      </div>
      <div className={styles.text}>
        <p className={styles.name}>John Doe</p>
        <div>
          <StarFill className={styles.star} />
          <StarFill className={styles.star} />
          <StarFill className={styles.star} />
          <StarFill className={styles.star} />
          <StarHalf className={styles.star} />
        </div>

        <small className={styles.cont}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
          voluptatem illo nesciunt, accusamus beatae eius esse ipsa rem
          assumenda officia doloribus odit. Sequi quis placeat aut rem saepe
          totam eius!
        </small>
      </div>
    </div>
  );
};

const ReviewsSection = ({ isAbout }) => {
  const aboutData = [
    {
      text: "250+ Standard quality checks",
    },
    {
      text: "3 Years free maintanance",
    },
    {
      text: "On time delivery",
    },
    {
      text: "Lifetime service support",
    },
    {
      text: "Tech-enabled Compnay",
    },
  ];

  const data = aboutData;

  return (
    <section className={styles.reviewsSection}>
      <div className={styles.overlay} />
      {/* <CustomContainer> */}
        <div className={styles.scroller}>
          <div className={styles.scrollHolder}>
            {data.map((d, i) => {
              return <Review key={`scr_${i}`} data={d} />;
            })}
          </div>
          <div className={styles.scrollHolder}>
            {data.map((d, i) => {
              return <Review key={`scr_${i}`} data={d} />;
            })}
          </div>
        </div>
      {/* </CustomContainer> */}
    </section>
  );
};

export default ReviewsSection;
