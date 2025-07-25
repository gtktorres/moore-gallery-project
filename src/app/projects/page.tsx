import styles from '../../styles/page.module.css'
import ProjectsList from '../../components/ProjectsList';

const Projects = () => {
    return (
      <main className={styles.main}>
        <ProjectsList />
      </main>
    );
}

export default Projects;
