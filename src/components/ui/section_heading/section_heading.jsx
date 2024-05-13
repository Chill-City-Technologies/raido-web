import React from "react";
import styles from "./section_heading.module.scss";
import fonts from "@/styles/fonts";
import { Image } from "react-bootstrap";

const SectionHeading = ({ head = "", variant = 1 }) => {
  return (
    <div className={`${styles.sectionHead} ${styles[`v${variant}`]}`}>
      {head && (
        <div>
          <h1 className={fonts.sofadi}>{head}</h1>
          <hr/>
        </div>
      )}
    </div>
  );
};

export default SectionHeading;
