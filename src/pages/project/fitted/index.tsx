import React, {
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import classNames from "classnames/bind";
import ActiveLinkContext from "src/store/link-context";
import ProjectHeader from "@components/Project/ProjectHeader";
import ProjectOverview from "@components/Project/ProjectOverview";
import ProjectDesignProcess from "@components/Project/ProjectDesignProcess";
import ProjectOutline from "@components/Project/ProjectOutline";
import ProjectSteps from "@components/Project/ProjectSteps";
import ImageDisplay from "@components/ImageDisplay";
import TextComponent from "@components/TextComponent";
import Meta from "@components/Meta";
import { MetaTags, PageType, RobotsContent } from "@components/Meta/types";

import styles from "./index.module.scss";
import ScrollToTop from "@components/ScrollToTop";
const cx = classNames.bind(styles);

const Livewell = () => {
  const [isTop, setIsTop] = useState(true);
  const observer = useRef<any>(null);

  const activeLinkCtx = useContext(ActiveLinkContext);

  const postMetaTags: MetaTags = {
    canonical: "https://www.bobbieleeghuman.com",
    description: `UX Designer | Portfolio. Responsive fitness App`,
    image: "https://www.bobbieleeghuman.com/images/bobbie.png",
    robots: `${RobotsContent.follow},${RobotsContent.index}`,
    title: `bobbieleeghuman | Fitted`,
    type: PageType.website,
  };

  const callbackFunction = (entries: any) => {
    const [entry] = entries;
    setIsTop(!(!entry.isIntersecting || entry.boundingClientRect.top > 600));
  };

  const topRef = useCallback(
    async (node: any) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(callbackFunction);
      if (node) observer.current.observe(node);
    },
    [isTop]
  );

  const handleClick = () => {
    console.log("clicked");
  };

  useEffect(() => {
    activeLinkCtx.updateActiveLink("other");
  }, []);

  return (
    <>
      <Meta tags={postMetaTags} />
      <ScrollToTop isTop={isTop} />
      <section className={styles.container}>
        <ProjectHeader
          title="-FITTED-"
          image="https://i.imgur.com/BxmyFA3.jpg"
          description="A Responsive Fitness App"
          topRef={topRef}
          splitVersion
        />
      </section>
      <section className={cx("container", "container__nested")}>
        <ProjectOverview
          title="UI Case Study: FITTED"
          about="A responsive, fitness web app designed to motivate people to find a workout routine that fits their level and schedule."
          role={["UX Designer"]}
          duration={["6 months"]}
          tools={["Pencil and paper", "Figma"]}
        />
      </section>
      <section className={styles.container}>
        <ProjectDesignProcess
          items={["Overview", "Empathize", "Ideate", "Design", "Prototype"]}
          projectName="fitted"
        />
      </section>
      <section className={cx("container", "container__nested")} id="overview">
        <ProjectOutline title="01/Project Overview" />
        <ProjectSteps
          title="Objective"
          description={[
            "Motivate users who are new or returning to fitness by getting into a good workout routine so that they can enjoy better health and the associated benefits (better mood, weight management, reduce risks of illness, learning something new).",
          ]}
        />
        <ProjectSteps
          title="Our Product"
          description={[
            "Our responsive web app will provide busy users with the tools to search activities and view routines, guides, daily challenges, and other information on any device. Provide a way for users to  keep a schedule by adding sessions to their personal calendar and track their progress.",
          ]}
        />
      </section>
      <section
        className={cx("container", "container__nested", "container__grey")}
        id="empathize"
      >
        <ProjectOutline
          title="02/Empathize"
          description="To better understand our users’ needs, motivations, and pain points, a proto persona was created from the information provided in the project brief."
        />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/srWgOXb.png",
              alt: "Photo persona",
              height: 350,
              width: 800,
              modal: true,
            },
          ]}
        />
      </section>
      <section className={cx("container", "container__nested")} id="ideate">
        <ProjectOutline
          title="03/Ideate"
          description="The user stories in the project brief were used to to help build user flows diagrams. These diagrams provided guidance when deciding on what screens to design for our app to help our users reach their goals."
        />
        <ProjectSteps
          title="User Story"
          description={[
            "As a new user, I want to learn about different exercises, so that I can figure out what is best for me.",
          ]}
        />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/qArwGnp.png",
              alt: "Diagram that shows different exercises",
              height: 324,
              width: 700,
              modal: true,
            },
          ]}
        />
        <ProjectSteps
          title=""
          description={[
            "As a new user, I want to be shown how the exercises are done, so that I know I am doing them correctly.",
          ]}
        />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/a2MLM9t.png",
              alt: "Diagram that shows how exercises are done",
              height: 324,
              width: 700,
              modal: true,
            },
          ]}
        />
        <ProjectSteps
          title=""
          description={[
            "As a frequent user, I want to complete daily challenges, so that I can have an additional way to stay motivated.",
          ]}
        />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/1qdlsPt.png",
              alt: "Diagram that shows ways to stay motivated",
              height: 324,
              width: 700,
              modal: true,
            },
          ]}
        />
        <ProjectSteps
          title=""
          description={[
            "As a frequent user, I want to track progression and record what I’ve done, so that I can see my progress over time.",
          ]}
        />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/SzFIdOp.png",
              alt: "Diagram that shows how to track progress over time",
              height: 324,
              width: 700,
              modal: true,
            },
          ]}
        />
      </section>
      <section
        className={cx("container", "container__nested", "container__grey")}
        id="design"
      >
        <ProjectOutline
          title="04/Design"
          description="The process from paper wireframes to high-fidelity prototype."
        />
        <ProjectSteps title="Low fidelity screens" />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/5PYiGVD.png",
              alt: "Low fidelity image",
              height: 350,
              width: 800,
              modal: true,
            },
          ]}
        />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/XGdQNhk.png",
              alt: "Low fidelity image",
              height: 437,
              width: 475,
              modal: true,
            },
            {
              src: "https://i.imgur.com/KjzOt5W.png",
              alt: "Low fidelity image",
              height: 437,
              width: 475,
              modal: true,
            },
          ]}
        />
        <ProjectSteps
          title="Low fidelity"
          description={["Responsive breakpoints for the homescreen."]}
        />
        <TextComponent center title={"mobile / tablet / desktop"} />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/V11DS4i.png",
              alt: "Low fidelity image mobile",
              height: 437,
              width: 375,
              modal: true,
            },
            {
              src: "https://i.imgur.com/Uf5Eq7y.png",
              alt: "Low fidelity image tablet",
              height: 437,
              width: 475,
              modal: true,
            },
            {
              src: "https://i.imgur.com/uBFAQ92.png",
              alt: "Low fidelity image desktop",
              height: 437,
              width: 475,
              modal: true,
            },
          ]}
        />
        <ProjectSteps
          title="Mid fidelity screens"
          description={[
            "While working on the mid fidelity screens, basic UI elements and text was added to help convey the form and function of the mobile app.",
          ]}
        />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/BLjdt7J.png",
              alt: "Mid fidelity log in",
              height: 437,
              width: 375,
              modal: true,
            },
            {
              src: "https://i.imgur.com/ezvNtZJ.png",
              alt: "Mid fidelity create account",
              height: 437,
              width: 475,
              modal: true,
            },
            {
              src: "https://i.imgur.com/yo0H7P0.png",
              alt: "Mid fidelity",
              height: 437,
              width: 475,
              modal: true,
            },
            {
              src: "https://i.imgur.com/B1px2a3.png",
              alt: "Mid fidelity",
              height: 437,
              width: 475,
              modal: true,
            },
            {
              src: "https://i.imgur.com/xmOp9lC.png",
              alt: "Mid fidelity",
              height: 437,
              width: 475,
              modal: true,
            },
            {
              src: "https://i.imgur.com/02JaNM0.png",
              alt: "Mid fidelity",
              height: 437,
              width: 475,
              modal: true,
            },
            {
              src: "https://i.imgur.com/aBqQP9g.png",
              alt: "Mid fidelity",
              height: 437,
              width: 475,
              modal: true,
            },
          ]}
        />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/EDCA6Ax.png",
              alt: "Mid fidelity",
              height: 437,
              width: 375,
              modal: true,
            },
            {
              src: "https://i.imgur.com/81qiqaH.png",
              alt: "Mid fidelity",
              height: 437,
              width: 475,
              modal: true,
            },
            {
              src: "https://i.imgur.com/NnoaGSi.png",
              alt: "Mid fidelity",
              height: 437,
              width: 475,
              modal: true,
            },
            {
              src: "https://i.imgur.com/psN94s8.png",
              alt: "Mid fidelity",
              height: 437,
              width: 475,
              modal: true,
            },
            {
              src: "https://i.imgur.com/BitdKc4.png",
              alt: "Mid fidelity",
              height: 437,
              width: 475,
              modal: true,
            },
            {
              src: "https://i.imgur.com/wQ5ZaQl.png",
              alt: "Mid fidelity",
              height: 437,
              width: 475,
              modal: true,
            },
          ]}
        />
        <ProjectSteps
          title="Moodboard"
          description={[
            "In this step, a mood board was created to help set the tone for the app. I came up with two boards and asked potential users for feed back.",
          ]}
        />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/p54YxtG.png",
              alt: "Mood board",
              height: 632,
              width: 800,
              modal: true,
            },
          ]}
        />
        <ProjectSteps title="Visual Styleguide" />
        <p className={styles.outline}>
          <span>a.</span> Logo
        </p>
        <div>
          <ImageDisplay
            position="left"
            images={[
              {
                src: "https://i.imgur.com/2ufOOKF.png",
                alt: "FITTED logo",
                height: 232,
                width: 700,
                modal: true,
              },
            ]}
          />
        </div>
        <p className={styles.outline}>
          <span>b.</span> Typography
        </p>
        <ImageDisplay
          position="left"
          images={[
            {
              src: "https://i.imgur.com/g2sHnqn.png",
              alt: "Headinngs",
              height: 732,
              width: 700,
              modal: true,
            },
          ]}
        />
        <p className={styles.outline}>
          <span>c.</span> Color Pallet
        </p>
        <ImageDisplay
          position="left"
          images={[
            {
              src: "https://i.imgur.com/CreXPh3.png",
              alt: "Colors",
              height: 732,
              width: 700,
              modal: true,
            },
          ]}
        />
        <p className={styles.outline}>
          <span>d.</span> UI Elements
        </p>
        <ImageDisplay
          position="left"
          images={[
            {
              src: "https://i.imgur.com/7BvzKeG.png",
              alt: "UI elements",
              height: 732,
              width: 700,
              modal: true,
            },
          ]}
        />
        <p className={styles.outline}>
          <span>e.</span> Iconography
        </p>
        <ImageDisplay
          position="left"
          images={[
            {
              src: "https://i.imgur.com/FLtPsnc.png",
              alt: "Iconography",
              height: 732,
              width: 700,
              modal: true,
            },
          ]}
        />
        <p className={styles.outline}>
          <span>f.</span> Imagery
        </p>
        <div className={styles.analysis}>
          <div className={styles.analysis__item}>
            <p>
              Images for FITTED should be light in color and include humans
              working out. Avoid images that appear staged with subjects staring
              directly at the camera. There should be a distribution of both
              males (approx 40%) and females (approx 60%).
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Do:</span>
            </p>
            <p>Use clear image light in color.</p>
            <p>Use good lighting.</p>
            <p>Use a combination of indoor and outdoor environments.</p>
            <p>
              <span style={{ fontWeight: "bold" }}>Success Criteria:</span>{" "}
              Activity is successfully added to the app.{" "}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Don&apos;t:</span>
            </p>
            <p>Stare directly at the camera.</p>
            <p>Use poor lighting.</p>
            <p>Use branded images.</p>
            <p>Over saturate images.</p>
          </div>
          <div>
            <ImageDisplay
              direction="column"
              images={[
                {
                  src: "https://i.imgur.com/Ggn4z5B.png",
                  alt: "Imagery",
                  height: 487,
                  width: 600,
                  modal: true,
                },
                {
                  src: "https://i.imgur.com/aPB6vGL.png",
                  alt: "Imagery",
                  height: 487,
                  width: 600,
                  modal: true,
                },
                {
                  src: "https://i.imgur.com/dAvDjCa.png",
                  alt: "Imagery",
                  height: 487,
                  width: 600,
                  modal: true,
                },
                {
                  src: "https://i.imgur.com/kldAueG.png",
                  alt: "Imagery",
                  height: 487,
                  width: 600,
                  modal: true,
                },
              ]}
            />
          </div>
        </div>
        <p className={styles.outline}>
          <span>g.</span> Cards
        </p>
        <ImageDisplay
          position="left"
          images={[
            {
              src: "https://i.imgur.com/h7YBlLe.png",
              alt: "Cards",
              height: 252,
              width: 400,
              modal: true,
            },
            {
              src: "https://i.imgur.com/QFgDlT3.png",
              alt: "Cards",
              height: 252,
              width: 300,
              modal: true,
            },
          ]}
        />
        <p className={styles.outline}>
          <span>h.</span> Break Points and Grids
        </p>
        <ImageDisplay
          position="left"
          images={[
            {
              src: "https://i.imgur.com/FcxDatQ.png",
              alt: "Break points and grids",
              height: 437,
              width: 175,
              modal: true,
            },
            {
              src: "https://i.imgur.com/YZPxPrh.png",
              alt: "Break points and grids",
              height: 437,
              width: 375,
              modal: true,
            },
            {
              src: "https://i.imgur.com/XCt2y3V.png",
              alt: "Break points and grids",
              height: 437,
              width: 475,
              modal: true,
            },
          ]}
        />
        <ProjectSteps title="High fidelity responsive breakpoints for the homescreen. " />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/gIaa87F.png",
              alt: "High fidelity",
              height: 537,
              width: 175,
              modal: true,
            },
            {
              src: "https://i.imgur.com/RGbp4dZ.png",
              alt: "High fidelity",
              height: 537,
              width: 375,
              modal: true,
            },
            {
              src: "https://i.imgur.com/TOichfW.png",
              alt: "High fidelity",
              height: 537,
              width: 475,
              modal: true,
            },
          ]}
        />
        <ProjectSteps title="High fidelity responsive breakpoints for the program screen." />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/KPpBtaq.png",
              alt: "High fidelity",
              height: 537,
              width: 175,
              modal: true,
            },
            {
              src: "https://i.imgur.com/N3T0Agz.png",
              alt: "High fidelity",
              height: 537,
              width: 375,
              modal: true,
            },
            {
              src: "https://i.imgur.com/X3sIGGB.png",
              alt: "High fidelity",
              height: 537,
              width: 475,
              modal: true,
            },
          ]}
        />
        <ProjectSteps title="The Outcome" />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/0jIl2re.png",
              alt: "High fidelity",
              height: 537,
              width: 475,
              modal: true,
            },
            {
              src: "https://i.imgur.com/6pFLCmy.png",
              alt: "High fidelity",
              height: 537,
              width: 475,
              modal: true,
            },
            {
              src: "https://i.imgur.com/lvxYKSJ.png",
              alt: "High fidelity",
              height: 537,
              width: 475,
              modal: true,
            },
            {
              src: "https://i.imgur.com/RPH26en.png",
              alt: "High fidelity",
              height: 537,
              width: 475,
              modal: true,
            },
            {
              src: "https://i.imgur.com/Uqx1sl4.png",
              alt: "High fidelity",
              height: 537,
              width: 475,
              modal: true,
            },
            {
              src: "https://i.imgur.com/I8V0gaT.png",
              alt: "High fidelity",
              height: 537,
              width: 475,
              modal: true,
            },
            {
              src: "https://i.imgur.com/BUj1Vm2.png",
              alt: "High fidelity",
              height: 537,
              width: 475,
              modal: true,
            },
            {
              src: "https://i.imgur.com/1adojnH.png",
              alt: "High fidelity",
              height: 537,
              width: 475,
              modal: true,
            },
            {
              src: "https://i.imgur.com/knCdADP.png",
              alt: "High fidelity",
              height: 537,
              width: 475,
              modal: true,
            },
            {
              src: "https://i.imgur.com/BlUHweb.png",
              alt: "High fidelity",
              height: 537,
              width: 475,
              modal: true,
            },
          ]}
        />
      </section>
      {/* <section className={cx("container", "container__nested")}>
        <TextComponent
          title="Click here to interact with the full prototype!"
          center
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={handleClick} className={styles.button} primary>
            View Demo
          </Button>
        </div>
      </section> */}
    </>
  );
};

export default Livewell;
