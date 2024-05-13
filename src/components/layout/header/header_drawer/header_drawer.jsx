import React from "react";
import { Image, Offcanvas } from "react-bootstrap";
import styles from "./header_drawer.module.scss";
import PAGES from "@/constants/pages";
import Link from "next/link";

const HeaderDrawer = ({ show, setShow, router }) => {
  return (
    <Offcanvas show={show} placement="end">
      <Offcanvas.Header
        className={styles.head}
        closeButton
        onHide={() => {
          setShow(false);
        }}
      >
        <Image src="/logo.png" alt="logo" fluid width={100} />
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className={styles.body}>
          {PAGES.map((page) => {
            return (
              <Link
                href={page.href}
                key={page.name}
                className={router.pathname === page.href ? styles.active : ""}
              >
                {page.name}
              </Link>
            );
          })}

          <Link href="/">
            <Image src="/assets/playbtn.png" alt="logo" fluid width={200} />
          </Link>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default HeaderDrawer;