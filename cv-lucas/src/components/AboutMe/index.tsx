import styles from './styles.module.scss'
import React from "react";
import { Button } from '../Button'

export function AboutMe () {
    const title = "I am Lorem, marketing expert"
    const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis dui enim. Donec ac leo est. Donec cursus mollis orci quis ultrices. Duis ipsum velit, suscipit at elit id, iaculis elementum magna. "
    const button = "Download CV"
    return (
       
        <div id="aboutme" className={styles.aboutMe}>
            
            <div className={styles.apresentation}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.paragraph}>{paragraph}</p>
                <a href="Lucas-Alves-De-Lima-2022-Resume .pdf" target="_blank" rel="noreferrer"> <Button text="Download CV" url="dowhite.png"/> </a>
            </div>

            <img className={styles.img}src="semRosto.jpg" />
        </div>
   ) 
}