import styles from "./ProjectOverview.module.scss";

interface Props {
  about: string;
  role: string[];
  duration?: string[];
  tools: string[];
  title?: string;
}

const ProjectOverview = ({ about, role, duration, tools, title }: Props) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title ?? "Project overview"}</h3>
      <div className={styles.about}>
        <h3 className={styles.about__title}>About</h3>
        <p className={styles.about__text}>{about}</p>
      </div>
      <div className={styles.description}>
        <div className={styles.description__text}>
          <h3>Role</h3>
          {role?.map((r, i) => (
            <p className={styles.list} key={i}>
              {r}
            </p>
          ))}
        </div>
        {duration && (
          <div className={styles.description__text}>
            <h3>Duration</h3>
            {duration?.map((d, i) => (
              <p className={styles.list} key={i}>
                {d}
              </p>
            ))}
          </div>
        )}
        <div className={styles.description__text}>
          <h3>Tools</h3>
          {tools.map((tool, i) => (
            <p className={styles.list} key={i}>
              {tool}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
