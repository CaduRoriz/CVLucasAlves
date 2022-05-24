import styles from './styles.module.scss'
import { CardProject } from '../CardProject'
import { Button } from '../Button'
export function MyProjects() {
    return (
        <div className={styles.main}>
           <div className={styles.divTitle}> 
                <img className={styles.img}src="lendo.jpg"/>
                <div className={styles.title}>
                    <div className={styles.text}>
                        <h1>Lorem,<strong> impsum dummy text of the printing and typesetting</strong></h1>
                    </div>
                </div>
           </div>
           <div className={styles.containersCards}>
                    <CardProject/>
                    <CardProject/>
               <Button text="Se My Experience" url="follow.png" size="14rem"/>
           </div>
        </div> 
    )
}