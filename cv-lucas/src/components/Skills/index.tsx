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
                            {
                               expertises.map((element, i) => {
                                   return <Tooltip key={i} title={element.title}><img src={element.img}/></Tooltip>
                               })
                            }
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


const expertises = [
    {
        "title": "Python",
        "img": "python-logo.jpeg"
    },
    {
        "title": "AutoCad",
        "img": "autocad.jpeg"
    },
    {
        "title": "HTML",
        "img": "html.jpeg"
    },
    {
        "title": "CSS",
        "img": "css.png"
    },
    {
        "title": "Office",
        "img": "office.jpeg"
    },
    {
        "title": "Sketchup",
        "img": "sketchup.jpeg"
    },
    {
        "title": "V-Ray",
        "img": "v-ray.png"
    },
    {
        "title": "Audacity",
        "img": "python-logo.jpeg"
    },
    {
        "title": "Adobe",
        "img": "adobe.jpeg"
    },
    
]
