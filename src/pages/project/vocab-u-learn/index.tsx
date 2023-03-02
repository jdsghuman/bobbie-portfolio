import React, {
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import classNames from "classnames/bind";
import ActiveLinkContext from "src/store/link-context";
import ProjectOverview from "@components/Project/ProjectOverview";
import ProjectHeader from "@components/Project/ProjectHeader";
import ProjectDesignProcess from "@components/Project/ProjectDesignProcess";
import ProjectOutline from "@components/Project/ProjectOutline";
import ProjectSteps from "@components/Project/ProjectSteps";
import ImageDisplay from "@components/ImageDisplay";
import TextComponent from "@components/TextComponent";
import ProjectNotes from "@components/Project/ProjectNotes";
import ProjectNotesList from "@components/Project/ProjectNotes/ProjectNotesList";
import { MetaTags, PageType, RobotsContent } from "@components/Meta/types";

import styles from "./index.module.scss";
import Meta from "@components/Meta";
import ScrollToTop from "@components/ScrollToTop";
const cx = classNames.bind(styles);

const VocabULearn = () => {
  const [isTop, setIsTop] = useState(true);
  const observer = useRef<any>(null);

  const activeLinkCtx = useContext(ActiveLinkContext);

  const postMetaTags: MetaTags = {
    canonical: "https://www.bobbieleeghuman.com",
    description: `UX Designer | Portfolio. Language Learning App`,
    image: "https://www.bobbieleeghuman.com/images/bobbie.png",
    robots: `${RobotsContent.follow},${RobotsContent.index}`,
    title: `bobbieleeghuman | VocabUlearn`,
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

  useEffect(() => {
    activeLinkCtx.updateActiveLink("other");
  }, []);
  return (
    <>
      <Meta tags={postMetaTags} />
      <ScrollToTop isTop={isTop} />
      <section className={styles.container}>
        <ProjectHeader
          title="Vocab-U-Learn"
          description="A language Learning App"
          image="https://i.imgur.com/PLfaze9.png"
          topRef={topRef}
        />
      </section>
      <section className={cx("container", "container__nested")}>
        <ProjectOverview
          about="Vocab-u-Learn is a language learning app, designed for part of the
        Career Foundry program. Following the steps of the design thinking
        process, a low fidelity prototype was created and tested on potential
        users to identify areas of improvement."
          role={["UX Designer"]}
          duration={["3 weeks"]}
          tools={["Pencil and paper", "Marvel"]}
        />
      </section>
      <section className={styles.container}>
        <ProjectDesignProcess
          items={["Empathize", "Define", "Ideate", "Prototype", "Test"]}
          projectName="vocab-u-learn"
        />
      </section>
      <section className={styles.container} id="empathize">
        <ProjectOutline
          count="01/"
          title="Empathize"
          description="During this phase, the goal is to better understand our target users. To
          understand their wants, needs and overall objectives. Below are the
          steps taken to accomplish this goal."
        />
        <ProjectSteps
          title="Competitive Analysis"
          description={[
            "A competitive analysis was done to gather some insight, I analyzed 3 vocabulary apps currently on the market. My goal was to discover both strengths and weaknesses of the apps and come up with features to include and areas to be improved upon.",
          ]}
        />
      </section>
      <section className={cx("container", "container__nested")}>
        <ImageDisplay
          images={[
            {
              src: "/images/competitive-analysis1.png",
              alt: "",
              height: 373,
              width: 283,
            },
            {
              src: "/images/competitive-analysis2.png",
              alt: "",
              height: 373,
              width: 283,
            },
            {
              src: "/images/competitive-analysis3.png",
              alt: "",
              height: 373,
              width: 283,
            },
          ]}
        />
      </section>
      <section className={cx("container", "container__nested")}>
        <ProjectSteps
          title="User Research"
          description={[
            "I interviewed 4 people to discover what potential users would find useful in a vocabulary app. Below are a sample of the questions I asked.",
          ]}
        />
      </section>
      <section className={cx("container", "container__nested")}>
        <TextComponent
          title="Interview Questions"
          numberList={true}
          text={[
            "Are you a student, professional, or other? Tell me what a typical day looks like for you?",
            "What method for learning new information works best for you and why (audio, visual, game, spatial, flash card) ?",
            "What are your typical study habits like? Do you spend many hours at a time studying or short 5-10 minute sessions during a commute, etc.",
            "When was the last time you had to learn a new vocabulary? How did you go about learning it?",
            "How was it? How did it make you feel?",
            "Have you ever used a learning app (what one)? What did you like/dislike about it? any specific features you enjoyed?",
            "What is something that you would change or add to the app? ",
          ]}
        />
        <TextComponent
          title="Interview Analysis"
          text={[
            "After the interviews were complete, I listened to the recordings and reviewed my notes. I sorted the data into “doing”, “thinking”, “feeling” categories.",
          ]}
        />
      </section>
      <section className={cx("container", "container__nested")}>
        <TextComponent title="Interview Notes" />
        <ProjectNotesList>
          <>
            <ProjectNotes
              title="Doing:"
              list
              text={[
                "I learn best with audio and flashcards",
                "I spend 2 hours a day studying, with 30 minutes of that hyper focused on what I am trying to accomplish.",
                "I listened to bachata when learning a new language, it gets me in the mood",
                "I used a lot of flash cards. would review them for about 10 minutes and take breaks.",
                "I use Babble quite a bit and then converse in Spanish with on of our Spanish speaking Drs to help it stick",
                "I had to learn a new vocabulary recently by watching short video snippets and using supplemental material that I could reference to understand the material.",
              ]}
            />
            <ProjectNotes
              title="Thinking:"
              list
              text={[
                "I think apps that have less steps and different subjects are easier to learn from",
                "I think apps that have less steps and different subjects are easier to learn from",
                "I think a learning path, and/or a storyline (journey for the user) on how to grow and learn would be helpful and encourage utilization",
                "I think the repetition of flash cards worked best for me. It forced me to really learn the subject",
                "I think flashcards helped me recall, learn, and understand the information",
                "I think receiving daily notifications to login encouraged me to do the work",
                "I think having a actual person available would help keep me accountable",
                "I think a virtual teacher actually teaching me the words would be helpful in learning the information",
                "I think having an option to converse with another app user or study partner would help keep me accountable",
                "I think receiving new information in a short and quick format, gets straight to the point without any fluff",
              ]}
            />
            <ProjectNotes
              title="Feeling:"
              list
              text={[
                "I feel like I picked up Spanish faster because I could not speak English when I was in class",
                "I feel annoyed when I have an incorrect answer and Babble makes me start over",
                "I feel that I lose interest and desire to study when courses are long, boring and provide too much detail",
                "I feel that I learn best with audio and flash cards when learning a new vocabulary",
              ]}
            />
          </>
        </ProjectNotesList>
        <TextComponent
          title="Main Take Away"
          text={[
            "The interviewees want a flashcard vocabulary app that they can use in short 5-10 minute sessions at their convenience. They want both audio and visual features to facilitate their learning experience.",
          ]}
        />
      </section>
      <section className={cx("container", "container__nested")} id="define">
        <ProjectOutline
          count="02/"
          title="Define"
          description="During this stage of the process, we look at the data gathered from the previous stage and define the problem. We 
          create a proto persona to represent our problem statement and hypothesis."
        />
        <ProjectSteps
          title="Understanding the Problem"
          description={[
            "After reviewing the data from the competitor analysis and the information gathered from the user interviews, it was determined that people want a ‘no fluff’ vocabulary app that they can use in short 5-10 minute sessions throughout their busy days.",
            "A proto-persona named Ashley was created to represent the needs, goals, and behaviors of the potential users that we are designing this app for.",
          ]}
        />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/aFeXCuv.png",
              alt: "Persona of Ashley",
              height: 517,
              width: 936,
              modal: true,
            },
          ]}
        />
        <TextComponent
          title="User Stories"
          numberList={true}
          text={[
            "As a busy product manager, I want to learn a new vocabulary so that I can feel confident in the material that I am learning.",
            "As a busy product manager, I want to learn new information in short bits of time, so that it doesn't interfere with my schedule.",
            "As a busy product manager that has to manage many tasks daily, I would like reminders to do the lessons, so that I do not forget and fall off track.",
            "As a product manager who works full-time, I want a fun, timed, self paced learning tool so that I can learn at my own pace.",
            "As a product manager, I want to hear and visualize the new learned vocabulary so I know that I am pronouncing it correctly.",
            "As a product manager, I want to add new vocabulary to my decks so they are personalized to my learning needs.",
          ]}
        />
        <ImageDisplay
          images={[
            {
              src: "https://i.imgur.com/qGUW40Y.png",
              alt: "problem and hypothesis statement",
              height: 495,
              width: 900,
              modal: true,
            },
          ]}
        />
      </section>
      <section
        className={cx("container", "container__nested", "container__grey")}
        id="ideate"
      >
        <ProjectOutline
          count="03/"
          title="Ideate"
          description="In this stage of the process, we take our ideas a step further into conceptualization and come up with ideas and thoughts on how to organize and present the information to the user."
        />
        <ProjectSteps
          title="Information Architecture"
          description={[
            "I wrote a task analysis and user flows for the app. The goal was to address some features required by users while using the app.",
          ]}
        />
        <ImageDisplay
          images={[
            {
              src: "/images/vocab-task2.png",
              alt: "",
              height: 324,
              width: 600,
              modal: true,
            },
          ]}
        />
        <ImageDisplay
          images={[
            {
              src: "/images/vocab-task3.png",
              alt: "",
              height: 324,
              width: 600,
              modal: true,
            },
          ]}
        />
      </section>
      <section className={cx("container", "container__nested")} id="prototype">
        <ProjectOutline
          count="04/"
          title="Prototype"
          description="In the prototype stage, we created some wireframes and prototypes around the users goals. "
        />
        <ProjectSteps
          title="Wireframing and Prototyping"
          description={[
            "I drew out initial low fidelity sketches of Vocab-U-Learn’s wireframes. I uploaded images of the wireframes to a tool called Marvel, allowing them to become clickable prototypes.",
          ]}
        />
        <ImageDisplay
          images={[
            {
              src: "/images/vocab-wireframe-1.png",
              alt: "Image of wireframe 1",
              height: 437,
              width: 454,
              modal: true,
            },
          ]}
        />
        <ImageDisplay
          images={[
            {
              src: "/images/vocab-wireframe-2.png",
              alt: "Image of wireframe 2",
              height: 437,
              width: 475,
              modal: true,
            },
            {
              src: "/images/vocab-wireframe-3.png",
              alt: "Image of wireframe 3",
              height: 437,
              width: 222,
              modal: true,
            },
            {
              src: "/images/vocab-wireframe-4.png",
              alt: "Image of wireframe 4",
              height: 437,
              width: 454,
              modal: true,
            },
          ]}
        />
      </section>
      <section
        className={cx("container", "container__nested", "container__grey")}
        id="test"
      >
        <ProjectOutline
          count="05/"
          title="Test"
          description="In this stage of the process we developed a test plan to test the prototype on 5 potential users. The purpose of the usability testing is to determine the effectiveness of the app and gather user feedback."
        />
        <ProjectSteps title="Usability Testing" />
        <TextComponent title="Usability Test Plan" />
        <ProjectNotesList>
          <>
            <ProjectNotes
              title="Scope"
              text={[
                "Usability testing of Vocab-U-Learn, a vocabulary app that promotes learning through repetition and games.",
              ]}
            />
            <ProjectNotes
              title="Schedule"
              text={[
                "February 21, 2022, 4 in-person interviews and 1 online via zoom.",
              ]}
            />
            <ProjectNotes
              title="Sessions"
              text={[
                "5 participants were tested. 1 person per session. Each session lasted 10 minutes.",
              ]}
            />
            <ProjectNotes
              title="Equipment"
              text={[
                "In person participants used an iPhone 12 pro. Online participants used their own devices. Notes taken with pen and paper.",
              ]}
            />
          </>
        </ProjectNotesList>
        <TextComponent
          title="Scenario Tasks:"
          numberList={true}
          text={[
            "You are learning a new subject and want to create a new deck of flashcards to help learn the new vocabulary.",
            "While reading through course material you come across a new word and want to add it to an existing deck of cards.",
            "There is a test coming up next week. It is time to review a deck of cards.",
            "You are reviewing a card deck and notice an error on the front of one of the cards, you need to correct it.",
          ]}
        />
        <TextComponent
          title="Test Report"
          text={[
            "The view participants’ comments and observations were made into a usability test report. Each of the observations were rated with a severity rating based on Jacob Nielsen’s scale, along with recommendations to solve the issues.",
          ]}
        />
        <ImageDisplay
          images={[
            {
              src: "/images/vocab-test-person.png",
              alt: "Usability test in person",
              height: 351,
              width: 650,
            },
          ]}
        />
        <TextComponent title="Prototype Improvements" />
        <ImageDisplay
          images={[
            {
              src: "/images/vocab-proto-improvement-1.png",
              alt: "Prototype improvement 1",
              height: 351,
              width: 650,
              modal: true,
            },
          ]}
        />
        <ImageDisplay
          images={[
            {
              src: "/images/vocab-proto-improvement-2.png",
              alt: "Prototype improvement 2",
              height: 351,
              width: 650,
              modal: true,
            },
          ]}
        />
        <ImageDisplay
          images={[
            {
              src: "/images/vocab-proto-improvement-3.png",
              alt: "Prototype improvement 3",
              height: 351,
              width: 650,
              modal: true,
            },
          ]}
        />
        <ProjectSteps title="Concluding Thoughts" />
        <TextComponent
          title="Future Iterations"
          text={[
            "Moving forward, next steps for Vocab-U-Learn would be to create an onboarding process for the app and then proceed to high fidelity prototypes on Figma. I would continue to test the prototypes with more potential users and continue until we have a final product that meets our users needs.",
          ]}
        />
        <TextComponent
          title="Main Takeaway"
          text={[
            "While creating Vocab-U-Learn, I balanced both app requirements and user needs to create an app that is best suited to help the user reach their end goal. The implementation of user interviews and usability testing help keep the users input and experience at the core of the apps design.",
          ]}
        />
      </section>
    </>
  );
};

export default VocabULearn;
