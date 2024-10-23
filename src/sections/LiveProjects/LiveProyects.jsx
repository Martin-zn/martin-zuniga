import styles from './ProjectsStyles.module.css'
import ProjectCard from '../../common/ProjectCard'
import liveProjects from '../../data/liveProjects.json'

function LiveProyects() {
  const projectList = liveProjects.projets;
  return (
    <section className={styles.container} id='proyects'>
        <h1 className='sectionTitle'>Proyectos Freelance</h1>
        <div className={styles.projectsContainer}>
        {projectList.map((project, index) => (
          <ProjectCard
            key={index} 
            src={project.src}
            link={project.link}
            name={project.name}
            p={project.description}
          />
        ))}
           
        </div>
    </section>
  )
}

export default LiveProyects
