import styles from "./ProjectsStyles.module.css";
import wehelp from "../../assets/wehelp.png";
// from : <a href="https://www.flaticon.com/free-icons/student" title="student icons">Student icons created by Vectors Tank - Flaticon</a>
import library from "../../assets/library.png";
import zoo from "../../assets/zoo.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <>
      <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
          <ProjectCard
            src={wehelp}
            link="https://github.com/Tseringkhando/WeHelp"
            h3="WeHelp"
            p="Social Media App"
          />
          <ProjectCard
            src={library}
            link="https://github.com/Tseringkhando/library-management/tree/master/tseringlama-18406499-sourcecode"
            h3="Library Management App"
            p="A Java Swing Demo"
          />
          <ProjectCard
            src={zoo}
            link="https://github.com/Tseringkhando/myzoo/blob/master/images/zooimages/logo.png"
            h3="Claybrook Zoo"
            p="A website for zoo"
          />
        </div>
      </section>
    </>
  );
}

export default Projects;
