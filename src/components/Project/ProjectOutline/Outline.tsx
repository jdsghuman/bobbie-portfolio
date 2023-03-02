import styles from "./Outline.module.scss";

interface Props {
  count?: string;
  title: string;
  description?: string;
}
const ProjectOutline = ({ count, title, description }: Props) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        {count && <span className={styles.count}>{count}</span>}
        {title}
      </h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default ProjectOutline;
