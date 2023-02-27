import Image from "next/image";
import classNames from "classnames/bind";

import styles from "./ProjectHeader.module.scss";
const cx = classNames.bind(styles);

interface Props {
  title: string;
  description?: string;
  image: string;
  topRef?: any;
  splitVersion?: boolean;
}

const ProjectHeader = ({
  title,
  description,
  image,
  topRef,
  splitVersion,
}: Props) => {
  if (splitVersion) {
    return (
      <div
        className={cx("header", {
          "header--fill": splitVersion,
        })}
        ref={topRef}
      >
        <div className={cx("header__text", "header__text--split")}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={cx("header__text--split")}>
          <img
            src={image}
            className={styles.background__image}
            alt={title}
            // placeholder="blur"
          />
        </div>
      </div>
    );
  }
  return (
    <div className={styles.header} ref={topRef}>
      <div className={styles.header__text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
      <div>
        <Image
          src={image}
          width={273}
          height={273}
          className={styles.image}
          alt="Livewell app"
          // placeholder="blur"
        />
      </div>
    </div>
  );
};

export default ProjectHeader;
