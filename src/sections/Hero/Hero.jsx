import styles from './HeroStyles.module.css';
import martinImage from '../../assets/mz.png';
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/MARTIN ZUÑIGA NUÑEZ.pdf'
import { useTheme } from '../../common/ThemeContext';

function Hero() {

    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section className={styles.container} id='hero'>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={martinImage} alt="Profile picture" />
            <img className={styles.colorMode} src={themeIcon} alt="Color Mode" onClick={toggleTheme}/>
        </div>
        <div className={styles.info}>
            <h1>
                Martín Zúñiga Núñez
            </h1>
            <h2>Full Stack developer junior</h2>
            <span>
                <a href="https://github.com/Martin-zn" target='_blank'>
                    <img src={githubIcon} alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/martin-zu%C3%B1iga-nu%C3%B1ez/" target='_blank'>
                    <img src={linkedinIcon} alt="LinkedIn" />
                </a>
            </span>
            
            <p className={styles.description}>
                Soy un desarrollador fullstack con conocimiento de diferentes lenguajes de programacion, cuento con experiencia en desarrollo y administracion de proyectos de construccion
            </p>
            <a href={CV} download>
                <button className='hover' >
                    CURRICULUM
                </button>
            </a>

        </div>
    </section>
    );
    
}

export default Hero;