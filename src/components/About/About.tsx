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
          style={{ position: "absolute", top: "-60px", left: 0 }}
        ></div>
      </div>
      <Heading title="about" />
      <div className={styles.container}>
        <p className={styles.text}>
          Hi, I’m Bobbie. I am a UX designer with over 12 years experience
          working in healthcare and wellness promotion. I have seen many
          problems in the healthcare industry, many of which I strongly believe
          can be solved through technology and functional design. With my
          compassionate nature in caring for others, creative ability, and
          passion for research and design, I want to make that happen. My
          current position is at a healthcare start-up company where I work as a
          virtual nurse. I work alongside the PYM team. I am excited to expand
          my research and design-thinking skills, and to create functional
          products and services to make the world a better place, one happy user
          at a time
        </p>
        <p className={styles.text}>
          I am a UX designer with a background in the healthcare and wellness
          industry. I currently work at a startup healthcare company where I get
          to use my passion for helping others through a technology based
          platform. After years of working in healthcare and identifying
          problems within the system, I am ready to use my creative thinking
          skills and passion for research and design to solve real life issues
          (not just place a bandage on them).
        </p>
      </div>
    </section>
  );
};

export default About;
