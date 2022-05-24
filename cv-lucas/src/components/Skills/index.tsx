import { Button } from '../Button';
import styles from './styles.module.scss';

export function Skills() {
    return (
        <div className={styles.skillsWraper}>
                <div className={styles.expertise}>
                    <h1>Tech Expertise</h1>
                    <div className={styles.techCards}>
                        <img src="python.jpeg"/> 
                        <img src="autocad.jpeg"/>
                        <img src="html.jpeg"/>
                        <img src="css.png"/>
                        <img src="office.jpeg"/>
                        <img src="sketchup.jpeg"/>
                        <img src="v-ray.png"/>
                        <img src="audacity.jpeg"/>
                        <img src="adobe.jpeg"/>
                    </div>

                    
                </div>

                <div className={styles.lenguages}>
                    <h1>Language Skills</h1>
                    
                    <div className={styles.lenguageCards}>
                        <div className={`${styles.lenguagesBar} ${styles.portuguese}` }>
                            <span>Portuguese | Native</span>
                        </div> 
                        <div className={`${styles.lenguagesBar} ${styles.english}` }>
                            <span>English | Fluent</span>
                        </div>

                        <div className={`${styles.lenguagesBar} ${styles.italian}` }>
                            <span>Italian | Basic</span>
                        </div>

                        <div className={`${styles.lenguagesBar} ${styles.spanish}` }>
                            <span>Spanish | Conversant</span>
                        </div>

                        <div className={`${styles.lenguagesBar} ${styles.japanese}` }>
                            <span>Japanese | Basic</span>
                        </div>
                    </div>    
                             
                </div>

                <Button text={"See My Projects"} url={"follow.png"}/>

        </div>
    )
}