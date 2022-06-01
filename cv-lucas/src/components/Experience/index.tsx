import styles from './styles.module.scss'
import { Button } from '../Button'
export function Experience () {
    return (
        <div id="experience" className={styles.experienceWraper}>
            <div className={styles.experience}>
                
                <div className={styles.title}>
                    <h1>My experience<strong>, great places, great people</strong></h1>
                    <img src=""/>
                </div>

                <div className={styles.cards}>
                    
                    <div className={styles.experience1}>
                        <h3>July 2019 - Now</h3>
                        <div className={styles.barra}/>
                        <div> 
                            <p className={styles.pTitle}> Freelance engineering for multi-family construction projects
                                     including but not limited to:
                            </p>

                            <p className={styles.pSubTitle}>
                                    Freelance
                            </p>

                            <p>
                                    - Structural blueprint creation with follow-up site visits to ensure quality execution
                            </p>

                            <p>
                                   -  Project Estimations, budgeting, and guidance regarding government/city codes and practices
                            </p>

                        </div>

                    </div>

                    <div className={styles.experience2}>
                    <h3 className={styles.titleNone}>2018 - 2019</h3> 
                        <div> 
                             <p className={styles.pTitle}>Engemil Engenharia</p>
                             <p className={styles.pSubTitle}>Civil Engineering Intern</p>

                            <p>
                                - Ensured smooth execution of site plan for a seven-floor, 50-unit residential building for Brazilian government military families    
                            </p>

                             <p>
                                - Coordination and quality control of on-site teams (electrical, plumbing, structural, grounding & lightning)
                            </p>

                            <p>
                                - Identified errors, proposed and executed new systems for continual improvements during build-out
                             </p>

                            <p>
                                - Ran monthly tracking system to report to government officials allowing the continual and appropriate funding of the project
                            </p>

                        </div> 
                        <div className={styles.barra}/>   
                        <h3 className={styles.titlexp}>2018 - 2019</h3>                                   
                    </div>

                    <div className={styles.experience3}>
                        <h3> 2017 - 2018</h3>
                        <div className={styles.barra}/>

                        <div>

                            <p className={styles.pTitle}>Universidade Paulista</p>
                            <p className={styles.pSubTitle}>Teaching Assistant</p>
                            <p>
                                - Supported professor in the classroom by teaching materials required while maintaining a spirit of camaraderie amongst the students within the department
                            </p>

                            <p>
                                - Helped students prepare for examinations and projects while acting as a liaison for communication efforts directly with professors
                            </p>
                        </div>

                    </div>

                    <Button id="contact" text={"Contact Me"} url={"follow.png"}/>

                </div>
            </div>
        </div>
    )
}