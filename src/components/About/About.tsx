import React, { useCallback, useContext, useRef } from "react";
import Heading from "@components/Heading";
import ActiveLinkContext from "src/store/link-context";

import styles from "./About.module.scss";

const About = () => {
  const observer = useRef<any>();
  const activeLinkCtx = useContext(ActiveLinkContext);

  const callbackFunction = (entries: any) => {
    if (entries[0].isIntersecting) {
      activeLinkCtx.updateActiveLink("about");
    }
  };

  const options = {
    root: null,
    rootMargin: "1px",
    threshold: 1.0,
  };

  const aboutRef = useCallback(
    async (node: any) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(callbackFunction, options);
      if (node) observer.current.observe(node);
    },
    [activeLinkCtx.activeLink]
  );

  return (
    <section ref={aboutRef} className={styles.section}>
      <div style={{ position: "relative" }}>
        <div
          id="about"
          style={{ position: "absolute", top: "-70px", left: 0 }}
        ></div>
      </div>
      <Heading title="about" />
      <div className={styles.container}>
        <p className={styles.text}>
          Hi, I’m Bobbie. I am a UX designer with over 12 years experience
          working in healthcare and wellness promotion. I have seen many
          problems in the healthcare industry, many of which I strongly believe
          can be solved through technology and functional design. I want to
          solve these problems, using my compassionate nature in caring for
          others, creative ability, and passion for research and design.
        </p>
        <p className={styles.text}>
          My current position is at a healthcare start-up company where I work
          as a virtual nurse. I work alongside the PYM team. I am excited to
          expand my research and design-thinking skills, and to create
          functional products and services to make the world a better place, one
          happy user at a time.
        </p>
      </div>
    </section>
  );
};

export default About;
