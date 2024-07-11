import React from 'react'
import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

function Skills() {
    return (
        <section className={styles.container}  id='skills'>
            <h1 className='sectionTitle'>Skills</h1>
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill={'JAVA'}/>
                <SkillList src={checkMarkIcon} skill={'PYTHON'}/>
                <SkillList src={checkMarkIcon} skill={'JAVASCRIPT'}/>
                <SkillList src={checkMarkIcon} skill={'SQL'}/>
                <SkillList src={checkMarkIcon} skill={'PL/SQL'}/>
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill={'SPRING-BOOT'}/>
                <SkillList src={checkMarkIcon} skill={'DJANGO'}/>
                <SkillList src={checkMarkIcon} skill={'REACT'}/>
                <SkillList src={checkMarkIcon} skill={'JQUERY'}/>
            </div>
            <hr />
            <div className={styles.skillList}>
                <SkillList src={checkMarkIcon} skill={'TAILWIND'}/>
                <SkillList src={checkMarkIcon} skill={'SELENIUM'}/>

            </div>
            <hr />
        </section>
    )
}

export default Skills
