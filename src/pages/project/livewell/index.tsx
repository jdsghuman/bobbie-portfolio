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
import ProjectNotesList from "@components/Project/ProjectNotes/ProjectNotesList";
import ProjectNotes from "@components/Project/ProjectNotes";
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
    description: `UX Designer | Portfolio. Health and Wellness App`,
    image: "https://www.bobbieleeghuman.com/images/bobbie.png",
    robots: `${RobotsContent.follow},${RobotsContent.index}`,
    title: `bobbieleeghuman | Livewell`,
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
          title="-LIVE  WELL-"
          image="https://i.imgur.com/m7zuwve.png"
          topRef={topRef}
        />
      </section>
      <section className={cx("container", "container__nested")}>
        <ProjectOverview
          about="Live Well is a health and wellness responsive web app that provides users access to tools to improve their holistic well-being through lifestyle modifications, habit and health tracking (labs and vitals), and educational content. The app is designed for health conscious people that want to live a healthier lifestyle."
          role={["UX Designer"]}
          duration={["5 months"]}
          tools={[
            "Pencil and paper",
            "Figma",
            "Optimalsort",
            "Usabilityhub",
            "Google forms",
          ]}
        />
      </section>
      <section className={styles.container}>
        <ProjectDesignProcess
          items={[
            "Understand",
            "Observe",
            "Point of View",
            "Ideate",
            "Prototype",
            "Test",
          ]}
          projectName="livewell"
        />
      </section>
      <section className={cx("container", "container__nested")} id="understand">
        <ProjectOutline
          count="01/"
          title="Understand"
          description="In this stage of the Design Thinking Process, my goal is to understand the problem and empathize with the user."
        />
        <ProjectSteps
          title="Competitive Analysis"
          description={[
            "A competitive analysis was completed on 2 apps currently in the market, AccessElite and NOOM. My goal was to discover both strengths and weaknesses of the apps and come up with features to include and areas to be improved upon.",
          ]}
        />
        <div className={styles.flex__container}>
          <div className={styles.item}>
            <div className={styles.header}>
              <h4>Problem</h4>
              <h4>Statement</h4>
            </div>
          </div>
          <div className={styles.item}>
            <p>
              Health and wellness seeking individuals need a lifestyle tracking
              tool/app to track their progress (diet, exercise, sleep,
              meditation, etc.), provide motivation, and monitor trends in their
              vital signs and labs in relation to lifestyle modifications they
              have applied. We will know this to be true when users get a better
              understanding of how their lifestyle affects their health, as well
              as communicate better and efficiently with their providers.
            </p>
          </div>
        </div>
        <ProjectSteps
          title="Competitive Analysis"
          description={[
            "A competitive analysis was completed on 2 apps currently in the market, AccessElite and NOOM. My goal was to discover both strengths and weaknesses of the apps and come up with features to include and areas to be improved upon",
          ]}
        />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/UJ5fKgD.png",
              alt: "",
              height: 373,
              width: 283,
            },
            {
              src: "https://i.imgur.com/ts649oL.png",
              alt: "",
              height: 373,
              width: 283,
            },
          ]}
        />
      </section>
      <section
        className={cx("container", "container__nested", "container__grey")}
        id="observe"
      >
        <ProjectOutline
          count="02/"
          title="Observe"
          description="During the observe stage of the Design Thinking Process, I performed research on potential users through in-person and online interviews and survey."
        />
        <ProjectSteps
          title="User Research"
          description={[
            "I conducted user surveys and interviews on potential users to gain a better understanding of the problem. As well, identify their goals and needs.  The survey was 13 questions long and completed by 21 participants via google forms. The Interview was a total of 12 questions, completed on 4 participants. The findings were then sorted onto stickynotes and grouped in themes and common insights. See below for main insights from each method.",
          ]}
        />
        <TextComponent title="Key  Insights" />
        <ProjectNotesList>
          <>
            <ProjectNotes
              title="Survey Insights - 21 participants"
              list
              text={[
                "Most participants are between 35-44 years old",
                "Something important to note is that 71.4% of the participants in this group have NEVER been diagnosed with a chronic disease.",
                "Participants are actively working on lifestyle habits, strongly towards exercise and food related but also note that they still would like to improve their habits. Stress, sleep, and socialization are other areas many people are working on also. One thing I noted is how many people chose stress as a barrier in their lifestyle yet very few people attend therapy (I question if this is due to the stigma around it).",
                "Lack of time appears to be one of the biggest barriers in people’s lives when it comes to living a healthy lifestyle. Even more reason when an app may beneficial vs going to a facility.",
                "Nearly half the participants reported using a health and wellness app at some point. ",
                "Looking into participants goals, 20 of the 21 answered. Common goals were to lose weight, gain muscle, eat healthier, maintain health, less stress, and improve some person issues (foot, liver). These are goals related to health habits and reassuring that we are working towards a meaningful problem.",
                "According to the results: progress tracker, accountability partner, meal/exercise plans, a way to log/track information, and challenges were some of the more popular features participants find helpful and motivating in reaching goals.",
              ]}
            />
            <ProjectNotes
              title="Interview Insights -  4 participants"
              list
              text={[
                "Potential users are currently trying to work on improving their health (physical, mental, holistically) and are also struggling and wanting help with motivation, habit formation, and education.",
                "Potential users share a common view of what 'healthy lifestyle' means along with aligning goals to achieve.",
                "Want features such as motivation (quotes, tips, reminders), an app that covers lifestyle as a whole, social component, achievements and rewards, accountability, and calendar to track workouts.",
                "Users lack motivation and wasn't motivation from an app for help them reach their health goals.",
              ]}
            />
          </>
        </ProjectNotesList>
      </section>
      <section
        className={cx("container", "container__nested")}
        id="pointofview"
      >
        <ProjectOutline
          count="03/"
          title="Point of View"
          description="The goal during this stage was to place myself into the shoes of the user. To do this I analyzed the information from the previous stage and sorted it into wants, goals, and needs. I then regrouped the categories and main insights. After doing this a general idea of our user population was identified and user personas were created."
        />
        <ProjectSteps
          title="Affinity Mapping"
          description={[
            "Affinity mapping was used to explore findings, create visual maps of relationships, themes, and insights, allowing us to truly understand our participants.",
          ]}
        />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/XqvdttI.png",
              alt: "Insight #1",
              height: 324,
              width: 600,
              modal: true,
            },
          ]}
        />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/jtfZy88.png",
              alt: "Insight #2",
              height: 324,
              width: 600,
              modal: true,
            },
          ]}
        />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/aysT6aH.png",
              alt: "Insight #3",
              height: 324,
              width: 600,
              modal: true,
            },
          ]}
        />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/nI6c9R6.png",
              alt: "Insight #4",
              height: 324,
              width: 600,
              modal: true,
            },
          ]}
        />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/ILk8afL.png",
              alt: "Insight #5",
              height: 324,
              width: 600,
              modal: true,
            },
          ]}
        />
        <ProjectSteps
          title="User Personas"
          description={[
            "Two user personas were created from the information gathered during the survey and interviews. The user personas were an important part of the design process as they helped to keep the focus on the users wants, needs, and goals, while also striving to achieve the business goals.",
          ]}
        />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/2N1b0aw.png",
              alt: "User persona 1",
              height: 350,
              width: 600,
              modal: true,
            },
          ]}
        />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/yG9AWHD.png",
              alt: "User persona 2",
              height: 350,
              width: 600,
              modal: true,
            },
          ]}
        />
      </section>
      <section className={cx("container", "container__nested")} id="ideate">
        <ProjectOutline
          count="04/"
          title="Ideate"
          description="In the Ideate stage, with my user persona as a focus, I reviewed all the observations and collected data to come up with a full range of ideas and possible solutions to the identified problem. User flows and task analysis were created to show how users will use the app. Card sorting was used to help identify how to best organize the apps information in a way the is beneficial for the user."
        />
        <ProjectSteps title="User Journeys" />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/D00zgZV.png",
              alt: "User journey 1",
              height: 350,
              width: 600,
              modal: true,
            },
          ]}
        />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/6ATrsnl.png",
              alt: "User journey 2",
              height: 350,
              width: 600,
              modal: true,
            },
          ]}
        />
        <ProjectSteps
          title="Task Analysis"
          description={[
            "Using the user stories from the user journey maps, it was determined which tasks were need for users to complete the goals. From there user flows were created from those tasks to complete the goals and create user flows for each of those tasks.",
          ]}
        />
        <div className={styles.analysis}>
          <div className={styles.analysis__item}>
            <p className={styles.heading}>Task Analysis #1 - Add Activity</p>
            <p>
              <span style={{ fontWeight: "bold" }}>Objective:</span> As a busy
              individual who wants to run a 5K race, I want to track my daily
              activity so that I can see how much I am improving.
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Entry point:</span> Create
              account/Sign up
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Success Criteria:</span>{" "}
              Activity is successfully added to the app.{" "}
            </p>
          </div>
          <div>
            <ImageDisplay
              images={[
                {
                  src: "https://i.imgur.com/lT5E500.png",
                  alt: "Task analysis 1",
                  height: 387,
                  width: 239,
                  modal: true,
                },
              ]}
            />
          </div>
        </div>
        <div className={styles.analysis}>
          <div className={styles.analysis__item}>
            <p className={styles.heading}>
              Task Analysis #2 - Favorite a Recipe
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Objective:</span> As an
              individual who wants to lower his cholesterol through dietary
              measures, I want to search plant focused/plant based recipes and
              save them to a favorites list, so that I can have a stored recipe
              list for future use.
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Entry point:</span> Log in
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Success Criteria:</span>{" "}
              Recipe is successfully saved as a favorite
            </p>
          </div>
          <div>
            <ImageDisplay
              images={[
                {
                  src: "https://i.imgur.com/ke6IpYX.png",
                  alt: "Task analysis 2",
                  height: 387,
                  width: 239,
                  modal: true,
                },
              ]}
            />
          </div>
        </div>
        <ProjectSteps
          title="Card Sorting"
          description={[
            "A site map was created and refined through a closed card sort. This help organize the content and app structure to best suit the needs and preferences of the users. I used a tool called OptimalSort to conduct the activity.",
          ]}
        />
        <TextComponent title="Original Site Map" />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/uIi5O9u.png",
              alt: "Site map",
              height: 208,
              width: 800,
              modal: true,
            },
          ]}
        />
        <TextComponent title="Card Sorting Results" />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/awzomJe.png",
              alt: "Card sorting results",
              height: 632,
              width: 800,
              modal: true,
            },
          ]}
        />
        <TextComponent
          text={[
            "“After analyzing the results from the card sort, it is clear that some modifications need to be made on the original site map so that it matches the users needs.“",
          ]}
        />
        <TextComponent
          unorderedList
          text={[
            "For the category “Habits/Goals” I kept all the items listed like the original and allowed for the item “Track Habits/Goals” to be tracked in the “Track” category also. This was necessary as most participants selected “Track” category for this item. Through 4/6 chose the item to in the “Track” category it may be due to the item having the word track on it. For this reason I kept it in both.",
            "For the category “Connect” I considered removing the item “Challenge” as participants equally chose for it to fall under both “Connect” and “Track”. After great consideration the decision was made and we included it in both as “Challenges” are a way for people to connect and the challenge needs to be tracked. The item “Support” was not added due to lack of clarification (see below).",
            "For the category “Profile” no changes were made. I was considering moving “Support” to the category “Connect” due to 4/6 participants placing it there but after clarifying with participants, together we decided it belonged under profile. (Habit/Goal support vs web app support)”",
          ]}
        />
        <TextComponent title="Revised Site Map" />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/dLSUTF7.png",
              alt: "Revised site map",
              height: 208,
              width: 800,
              modal: true,
            },
          ]}
        />
      </section>
      <section
        className={cx("container", "container__nested", "container__grey")}
        id="prototype"
      >
        <ProjectOutline
          count="05/"
          title="Prototype"
          description="Following the sitemap and user flows, paper wireframes and low-fidelity prototypes were created and iterated on. Starting with paper sketches and testing the design in this low fidelity format is important as it allows me to catch any errors or flaws in the design and make necessary corrections prior to reaching a high fidelity prototype."
        />
        <ProjectSteps title="Wireframes" />
        <TextComponent title="Low-Fidelity Wireframes" />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/WJPkHqZ.png",
              alt: "Low fidelity wireframes 1",
              height: 437,
              width: 475,
              modal: true,
            },
            {
              src: "https://i.imgur.com/tIPByxJ.png",
              alt: "Low fidelity wireframes 1",
              height: 437,
              width: 475,
              modal: true,
            },
          ]}
        />
        <TextComponent title="Mid-Fidelity Wireframes" />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/nL3eW0s.png",
              alt: "Mid fidelity wireframes 1",
              height: 437,
              width: 475,
              modal: true,
            },
            {
              src: "https://i.imgur.com/fOFT5vb.png",
              alt: "Mid fidelity wireframes 2",
              height: 437,
              width: 475,
              modal: true,
            },
          ]}
        />
      </section>
      <section className={cx("container", "container__nested")} id="test">
        <ProjectOutline
          count="06/"
          title="Test"
          description="In this stage, the interactive prototype was tested with potential users. A test script and test plan was created to facilitate the user testing. 
          The users were observed while interacting with the prototype. I made notes and collected feedback, which was later reviewed and used to 
          improve and iterate the prototype. After testing, the findings were organized through affinity mapping and the rainbow spreadsheet.  Improvements were made to key usability issues."
        />
        <ProjectSteps title="Usability Testing" />
        <TextComponent
          title="Summary"
          text={[
            "The purpose of the study was to gain insight on how users interact with the LiveWell prototype while working through 3 preset tasks (search and favorite and recipe, add a lab value, and add an activity).  While participants worked through the tasks, I noted any friction and errors they experienced with the prototype. The usability testing was completed with 6 participants, both moderated in-person and virtual testing methods were used. The sessions were recorded using Quicktime after receiving participant approval.",
          ]}
        />
        <TextComponent title="Affinity Mapping" />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/QQl6781.png",
              alt: "Affinity mapping 1",
              height: 437,
              width: 475,
              modal: true,
            },
            {
              src: "https://i.imgur.com/rLX0gOG.png",
              alt: "Affinity mapping 2",
              height: 437,
              width: 475,
              modal: true,
            },
          ]}
        />
        <TextComponent title="Rainbow Spreadsheet" />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/uMsnPrs.png",
              alt: "Rainbow spreadsheet",
              height: 357,
              width: 700,
              modal: true,
            },
          ]}
        />
        <TextComponent title="Usability Test Changes" />
        <div className={styles.analysis}>
          <div className={styles.analysis__item}>
            <p>
              <span style={{ fontWeight: "bold" }}>Issue 1:</span> When on the
              add lab values page, and users are trying to add a lab value, they
              are first selecting the “cholesterol” value (a previous entered
              value) not the “+” icon.
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Severity: </span>
              High
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Suggested Change: </span>
              Add labels “add lab” and “recent labs.” This required a redesign
              of the page for balance and to decrease the confusion for vital
              signs later on.
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}> Evidence: </span>
              This was observed on all 6 of the participants and they voiced
              their concerns with the confusion on this page.
            </p>
          </div>
          <div>
            <ImageDisplay
              images={[
                {
                  src: "https://i.imgur.com/WDWyfy5.png",
                  alt: "Usability test changes issue 1",
                  height: 300,
                  width: 400,
                  modal: true,
                },
              ]}
            />
          </div>
        </div>
        <div className={styles.analysis}>
          <div className={styles.analysis__item}>
            <p>
              <span style={{ fontWeight: "bold" }}>Issue 2: </span>When on the
              add activity page, users moved their cursor around a bit before
              selecting the “+” icon to add an activity.
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Severity: </span>
              Medium
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Suggested Change: </span>
              Add an “add activity” button. Remove the “+”.
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}> Evidence: </span>
              This was observed on two participants, another was trying to
              select the calendar
            </p>
          </div>
          <div>
            <ImageDisplay
              images={[
                {
                  src: "https://i.imgur.com/XXFMMqk.png",
                  alt: "Usability test changes issue 2",
                  height: 300,
                  width: 400,
                  modal: true,
                },
              ]}
            />
          </div>
        </div>
        <div className={styles.analysis}>
          <div className={styles.analysis__item}>
            <p>
              <span style={{ fontWeight: "bold" }}>Issue 3: </span>
              Users suggested renaming the “nutrition” icon to “recipes”, found
              to be confusing when searching for a recipe.
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Severity: </span>
              Medium
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Suggested Change: </span>
              Rename the nutrition icon to recipes
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}> Evidence: </span>3 users
              suggested the name change.
            </p>
          </div>
          <div>
            <ImageDisplay
              images={[
                {
                  src: "https://i.imgur.com/AGpJDcn.png",
                  alt: "Usability test changes issue 3",
                  height: 300,
                  width: 400,
                  modal: true,
                },
              ]}
            />
          </div>
        </div>
        <div className={styles.analysis}>
          <div className={styles.analysis__item}>
            <p>
              <span style={{ fontWeight: "bold" }}>Issue 4: </span>
              Users found the homescreen busy but enjoyed the content
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Severity: </span>
              High
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Suggested Change: </span>
              Redesign the homescreen, balance the content and design so it is
              not overwhelming for the user.
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}> Evidence: </span>5 out of 6
              participants voiced that the homescreen was but but that they
              liked seeing the content. I therefore removed the suggested
              content section.
            </p>
          </div>
          <div>
            <ImageDisplay
              images={[
                {
                  src: "https://i.imgur.com/bQhU1rS.png",
                  alt: "Usability test changes issue 4",
                  height: 300,
                  width: 400,
                  modal: true,
                },
              ]}
            />
          </div>
        </div>
        <div className={styles.analysis}>
          <div className={styles.analysis__item}>
            <p>
              <span style={{ fontWeight: "bold" }}>Issue 5: </span>
              User suggested adding “welcome (name)” to the homescreen
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Severity: </span>
              Low
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Suggested Change: </span>
              Add Welcome (name) to the homescreen.(after redesign of homescreen
              there was space to add “welcome (name)”
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}> Evidence: </span>
              Suggested by user for personalization
            </p>
          </div>
          <div>
            <ImageDisplay
              images={[
                {
                  src: "https://i.imgur.com/yJZaQFf.png",
                  alt: "Usability test changes issue 5",
                  height: 300,
                  width: 400,
                  modal: true,
                },
              ]}
            />
          </div>
        </div>
      </section>
      <section
        className={cx("container", "container__nested", "container__grey")}
      >
        <ProjectOutline
          title="Refine"
          description="To begin this stage, I started with preference testing using the tool UsabilityHub. Next I applied Gestalt psychology, visual design principles, and improved accessibility using the Web Content Accessibility Guideline. This concluded the first iteration of the app. "
        />
        <TextComponent title="Preference Tests" />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/myVG1yp.png",
              alt: "Test results 1",
              height: 360,
              width: 600,
              modal: true,
            },
          ]}
        />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/srMdUiQ.png",
              alt: "Test results 2",
              height: 360,
              width: 600,
              modal: true,
            },
          ]}
        />
        <TextComponent title="Gestalt’s Principles" />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/Zl81A8v.png",
              alt: "Gestalt’s Principles image 1",
              height: 360,
              width: 500,
              modal: true,
            },
            {
              src: "https://i.imgur.com/srMdUiQ.png",
              alt: "Gestalt’s Principles image 2",
              height: 360,
              width: 500,
              modal: true,
            },
          ]}
        />
        <TextComponent title="Improved Accessibility" />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/QmZmWYz.png",
              alt: "Improved accessibility",
              height: 366,
              width: 600,
              modal: true,
            },
          ]}
        />
      </section>
      <section className={cx("container", "container__nested")}>
        <ProjectOutline title="Product Handoff" />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/IUgh1Oj.png",
              alt: "Product handoff 1",
              height: 500,
              width: 385,
              modal: true,
            },
            {
              src: "https://i.imgur.com/TZ4Ecek.png",
              alt: "Product handoff 2",
              height: 500,
              width: 385,
              modal: true,
            },
            {
              src: "https://i.imgur.com/0lYGgKj.png",
              alt: "Product handoff 3",
              height: 500,
              width: 385,
              modal: true,
            },
          ]}
        />
      </section>
      <section
        className={cx("container", "container__nested", "container__grey")}
      >
        <ProjectOutline title="High-Fidelity Prototype" />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/UizCqiJ.png",
              alt: "High fidelity prototype 1",
              height: 400,
              width: 200,
              modal: true,
            },
            {
              src: "https://i.imgur.com/oXgRmid.png",
              alt: "High fidelity prototype 2",
              height: 400,
              width: 200,
              modal: true,
            },
            {
              src: "https://i.imgur.com/chWtsy5.png",
              alt: "High fidelity prototype 3",
              height: 400,
              width: 200,
              modal: true,
            },
            {
              src: "https://i.imgur.com/Eqycm9S.png",
              alt: "High fidelity prototype 4",
              height: 400,
              width: 200,
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
