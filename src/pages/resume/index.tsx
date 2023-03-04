import Link from "next/link";
import ImageDisplay from "@components/ImageDisplay";
import { AiOutlineDownload } from "react-icons/ai";
import Button from "@components/Button";
import Meta from "@components/Meta";
import { MetaTags, PageType, RobotsContent } from "@components/Meta/types";

import styles from "./index.module.scss";

const Resume = () => {
  const postMetaTags: MetaTags = {
    canonical: "https://www.bobbieleeghuman.com",
    description: `UX Designer | Portfolio. Language Learning App`,
    image: "https://www.bobbieleeghuman.com/images/bobbie.png",
    robots: `${RobotsContent.follow},${RobotsContent.index}`,
    title: `bobbieleeghuman | Resume`,
    type: PageType.website,
  };

  return (
    <div className={styles.container}>
      <Meta tags={postMetaTags} />
      <div>
        <Link target="_blank" href="/resume.pdf">
          <Button className={styles.button} primary>
            <AiOutlineDownload className={styles.icon} />
            Download Resume
          </Button>
        </Link>
      </div>
      <ImageDisplay
        images={[
          {
            src: "https://i.imgur.com/PkYMZbo.png",
            alt: "Resume of Bobbielee Ghuman",
            height: 1000,
            width: 780,
          },
        ]}
      />
    </div>
  );
};

export default Resume;
