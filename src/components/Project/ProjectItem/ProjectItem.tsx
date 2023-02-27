import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "@components/Button";
import ActiveLinkContext from "src/store/link-context";

import styles from "./ProjectItem.module.scss";

interface ProjectItemType {
  name: string;
  image: string;
  role: string;
  description: string;
  slug: string;
  objectFit?: string;
}

const ProjectItem = ({
  name,
  image,
  role,
  description,
  slug,
  objectFit,
}: ProjectItemType) => {
  const router = useRouter();
  const activeLinkCtx = useContext(ActiveLinkContext);

  const handleClick = (slug: any) => {
    activeLinkCtx.updateActiveLink("another");
    router.push(slug);
  };

  return (
    <div className={styles.container}>
      <div className={styles["container--image"]}>
        <Link href={slug}>
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit={objectFit ? "contain" : ""}
          />
        </Link>
      </div>
      <div className={styles.container__detail}>
        <div className={styles["text--box"]}>
          <p className={styles.text__name}>{name}</p>
          <p className={styles.text}>{role}</p>
          <p className={styles.text}>{description}</p>
        </div>
        <div>
          <Button
            onClick={() => handleClick(slug)}
            className={styles.button}
            primary
          >
            View Project
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
