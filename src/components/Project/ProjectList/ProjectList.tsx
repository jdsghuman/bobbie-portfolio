import React, { useCallback, useContext, useRef } from "react";
import Heading from "@components/Heading";
import ProjectItem from "@components/Project/ProjectItem";
import { projects } from "@data/data";
import ActiveLinkContext from "src/store/link-context";

import styles from "./ProjectList.module.scss";

const ProjectList = () => {
  const observer = useRef<any>();
  const activeLinkCtx = useContext(ActiveLinkContext);

  const callbackFunction = (entries: any) => {
    if (entries[0].isIntersecting) {
      activeLinkCtx.updateActiveLink("projects");
    }
  };

  const options = {
    root: null,
    rootMargin: "200px",
    threshold: 1.0,
  };

  const projectRef = useCallback(
    async (node: any) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(callbackFunction, options);
      if (node) observer.current.observe(node);
    },
    [activeLinkCtx.activeLink]
  );

  return (
    <section ref={projectRef}>
      <div style={{ position: "relative" }}>
        <div
          id="projects"
          style={{ position: "absolute", top: "-70px", left: 0 }}
        ></div>
      </div>
      <Heading title="projects" />
      <div className={styles.container}>
        {projects.map((project, i) => {
          return (
            <ProjectItem
              name={project.name}
              image={project.image}
              role={project.role}
              description={project.description}
              key={`${project.name}-${i}`}
              slug={project.slug}
              objectFit={project.objectFit}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProjectList;
