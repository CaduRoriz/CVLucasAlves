import styles from './styles.module.scss'
import React from "react";
import { useRouter } from 'next/router';
import { Link } from '@mui/material';

import { scroll } from '../Scroll';

export function Header () {
    const [menuOpen, setMenu] = React.useState(false); 
     
    const router = useRouter()

    const isProjects = router.pathname.includes("projects")

    return(

        <header className={styles.header}>

            <div className={styles.headerContainer}>
                <img src="logo.png" alt="Logo Lucas Alves'CV"/>
                
                <Link href="/" className={styles.logoText}>
                    <p>Personal Resume</p>
                    <h2>Lucas Alves</h2>
                </Link >

                <div className={styles.headerButtons}>
                                                                     
                       {
                           isProjects?(
                               <>
                                <button onClick = {() => router.push("/")} className={styles.buttons}>Home</button>   
                                <button onClick = {() => router.push("/projects/projeto1")} className={styles.buttons}>Projeto 1</button>                                           
                                <button onClick = {() => router.push("/projects/projeto2")} className={styles.buttons}>Projeto 2</button> 
                               </>
                           ):(
                               <>
                                <button onClick = {() => scroll("aboutme")} className={styles.buttons}>About Me</button>   
                                <button onClick = {() => scroll("skills")} className={styles.buttons}>Skills</button>                                           
                                <button onClick = {() => scroll("myProjects")} className={styles.buttons}>My Projects</button>                            
                                <button onClick = {() => scroll("experience")} className={styles.buttons}>Experience</button>                                                         
                                <button onClick = {() => scroll("contact")} className={styles.buttonCallme}>Send me an email</button>
                               </>
                           )
                       }

                </div>


                <button  className={`${menuOpen ? styles.close : ""} ${styles.hamburguer} `}
                        onClick={() => setMenu(!menuOpen)}
                    
                        >
                            <span className={styles.bar1}/>
                            <span className={styles.bar2}/>
                            <span className={styles.bar3}/>

                </button>

                
                <div className={`${menuOpen ? styles.visible : ""} ${styles.sideHeaderButtons}`}>
                
                   
                   {
                       isProjects?(
                            <>
                            <button className={styles.buttons}
                                onClick={() => {
                                    router.push("/")
                                    setMenu(!menuOpen) 
                                    
                                }}
                            >Home</button>     

                            <button className={styles.buttons}
                                onClick={() => {
                                router.push("/projects/projeto1")
                                setMenu(false)}}
                                
                            >Projeto 1</button>  

                            <button className={styles.buttons}
                                onClick={() => {
                                    router.push("/projects/projeto2")
                                    setMenu(false)}}
                            >Projeto 2</button>
                            </>
                       ):(
                        <>
                            <button className={styles.buttons}
                                onClick={() => {
                                scroll("aboutme")
                                setMenu(!menuOpen) 
                                    
                                }}
                            >About Me</button>     

                            <button className={styles.buttons}
                                onClick={() => {
                                scroll("skills")
                                setMenu(false)}}
                                
                            >Skills</button>  

                            <button className={styles.buttons}
                                onClick={() => {
                                    scroll("myProjects")
                                    setMenu(false)}}
                            >My Projects</button>

                            <button className={styles.buttons}
                                onClick={() => {
                                    scroll("experience")
                                    setMenu(false)
                                }}
                            >Experiencie</button>   

                            <button className={styles.buttons}
                                onClick={() => {
                                    scroll("contact")
                                    setMenu(false)}}
                            >Send me an email</button>
                        </>
                       )
                   }
                      
                </div>

            </div>
        </header>
    )
}