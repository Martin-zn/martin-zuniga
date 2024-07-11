import React from 'react'
import styles from './ProjectsStyles.module.css'
import galeria from '../../assets/exhibition-8431913_1280.jpg'
import ProjectCard from '../../common/ProjectCard'
import back from '../../assets/archive-1850170_1280.jpg'
import front from '../../assets/supermarket-2158692_1280.jpg'
import magnify from '../../assets/magnif.jpg'

function Proyects() {
  return (
    <section className={styles.container} id='proyects'>
        <h1 className='sectionTitle'>Proyectos</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
            src={galeria} 
            link={'https://github.com/Martin-zn/galeria'} 
            name={'Galeria Online'}
            p={'Galeria de arte online'}/>
            <ProjectCard 
            src={back} 
            link={'https://github.com/Martin-zn/ecommerceback'} 
            name={'Backend E-commerce'}
            p={'Backend E-commerce JAVA Spring-boot'}/>
            <ProjectCard 
            src={front} 
            link={'https://github.com/Martin-zn/ecommerce-front'} 
            name={'Frontend E-commerce'}
            p={'Frontend E-commerce React tailwind'}/>
            <ProjectCard 
            src={magnify} 
            link={'https://github.com/Martin-zn/web-scraping'} 
            name={'Web Scraper Portal inmobiliario'}
            p={'Web Scraper Portal inmobiliario Python'}/>
        </div>
    </section>
  )
}

export default Proyects
