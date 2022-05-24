import styles from './styles.module.scss'
import React from "react";


export function Header () {
    const [menuOpen, setMenu] = React.useState(false); 
    return(
        <header className={styles.header}>

            <div className={styles.headerContainer}>
                <img src="logo.png" alt="Logo Lucas Alves'CV"/>
                
                <button className={styles.logoText}>
                    <p>Personal Resume</p>
                    <h2>Lucas Alves</h2>
                </button>

                <div className={styles.headerButtons}>                                                   
                        <button className={styles.buttons}>About Me</button>   
                        <button className={styles.buttons}>Skills</button>                                           
                        <button className={styles.buttons}>My Projects</button>                            
                        <button className={styles.buttons}>Experience</button>                                                         
                        <button className={styles.buttonCallme}>Send me an email</button>

                </div>

                <button  className={`${menuOpen ? styles.close : ""} ${styles.hamburguer} `}
                        onClick={() => setMenu(!menuOpen)}
                    
                        >
                            <span className={styles.bar1}/>
                            <span className={styles.bar2}/>
                            <span className={styles.bar3}/>

                </button>

                
                <div className={`${menuOpen ? styles.visible : ""} ${styles.sideHeaderButtons}`}>
                
                    <button className={styles.buttons}
                        onClick={() => {
                            setMenu(!menuOpen) 
                            
                        }}
                    >About Me</button>     

                    <button className={styles.buttons}
                        onClick={() => setMenu(false)}
                    >Skills</button>  

                    <button className={styles.buttons}
                        onClick={() => setMenu(false)}
                    >My Projects</button>

                    <button className={styles.buttons}
                        onClick={() => setMenu(false)}
                    >Experiencie</button>   

                    <button className={styles.buttons}
                        onClick={() => setMenu(false)}
                    >Send me an email</button>

                </div>

            </div>
        </header>
    )
}