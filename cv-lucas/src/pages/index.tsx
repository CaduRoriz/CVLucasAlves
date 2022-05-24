import type { NextPage } from 'next'
import styles from '../styles/app.module.scss'
import { AboutMe } from '../components/AboutMe'
import { MyProjects } from '../components/MyProjects'
import { Skills } from '../components/Skills'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <AboutMe/>
      <Skills/>
      <MyProjects/>
      
    </div>
  )
}

export default Home
