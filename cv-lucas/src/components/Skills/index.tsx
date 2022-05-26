import { Button } from '../Button';
import styles from './styles.module.scss';
import  {Tooltip}  from '@mui/material';


export function Skills() {
    return (
        <div id="skills" className={styles.skillsWraper}>
                <h1>Skills</h1>
                <div className={styles.expertise}>
                        <h2>Tech Expertise</h2>
                        <div className={styles.techCards}>
                
                            <Tooltip title={"Python"} >
                                <img src="python-logo.jpeg"/> 
                            </Tooltip>
                            
                            <Tooltip title={"AutoCad"}> 
                                <img src="autocad.jpeg"/>
                            </Tooltip>
                            <Tooltip title={"HTML"}> 
                                <img src="html.jpeg"/> 
                            </Tooltip>
                            <Tooltip title={"HTML"}> 
                                <img src="css.png"/>
                            </Tooltip>
                            <Tooltip title={"HTML"}> 
                            <img src="office.jpeg"/>
                            </Tooltip>
                            <Tooltip title={"HTML"}>
                                <img src="sketchup.jpeg"/> 
                                </Tooltip>
                            <Tooltip title={"HTML"}> 
                                <img src="v-ray.png"/>
                                </Tooltip>
                            <Tooltip title={"HTML"}> 
                                <img src="audacity.jpeg"/>
                                </Tooltip>
                            <Tooltip title={"HTML"}>
                                <img src="adobe.jpeg"/> 
                                </Tooltip>
                        </div>
                </div>
                 <div className={styles.lenguages}>
                        <h2>Languages</h2>
                        
                        <div className={styles.lenguageCards}>
                            <div className={`${styles.lenguagesBar} ${styles.portuguese}` }>
                                <span>Portuguese | Native</span>
                            </div> 
                            <div className={`${styles.lenguagesBar} ${styles.english}` }>
                                <span>English | Fluent</span>
                            </div>

                            <div className={`${styles.lenguagesBar} ${styles.spanish}` }>
                                <span>Spanish | Conversant</span>
                            </div>

                            <div className={`${styles.lenguagesBar} ${styles.italian}` }>
                                <span>Italian | Basic</span>
                            </div>

                            <div className={`${styles.lenguagesBar} ${styles.japanese}` }>
                                <span>Japanese | Basic</span>
                            </div>
                        </div>    
                                
                </div>
                <Button id="myProjects" text={"See My Projects"} url={"follow.png"}/>

        </div>
    )
}