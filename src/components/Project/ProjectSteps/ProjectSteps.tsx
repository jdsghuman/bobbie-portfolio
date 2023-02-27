import styles from "./ProjectSteps.module.scss";

interface Props {
  title?: string;
  description?: string[];
}

const ProjectSteps = ({ title, description }: Props) => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{title}</h4>
      {description?.map((text, i) => (
        <p className={styles.description} key={i}>
          {text}
        </p>
      ))}
    </div>
  );
};

export default ProjectSteps;
