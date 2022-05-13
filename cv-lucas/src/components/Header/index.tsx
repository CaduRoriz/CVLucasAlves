import styles from './styles.module.scss'

export function Header () {
    return(
        <header className={styles.headerContainer}>
            <img src="logo.png" alt="Logo Lucas Alves'CV"/>
            <div className={styles.logoText}>
                <p>Personal CV</p>
                <h2>Lucas Alves</h2>
            </div>

            <div className={styles.headerButtons}>
                
                
                    <button className={styles.buttons}>About me</button>                   
                
                    <button className={styles.buttons}>My bio</button>
                
                    <button className={styles.buttons}>Experiencie</button>
                              
                    <button className={styles.buttons}>Certificates</button>
                         
                    <button className={styles.buttons}>Skills</button>
                    
                    <button className={styles.buttons}>Contact</button>
                    
                    <button className={styles.buttonCallme}>Call me right now</button>

            </div>
        </header>
    )
}