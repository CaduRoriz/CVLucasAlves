import type { NextPage } from 'next'
import styles from '../styles/app.module.scss'
import { AboutMe } from '../components/AboutMe'
import { MyProjects } from '../components/MyProjects'
import { Skills } from '../components/Skills'
import { Experience } from '../components/Experience'
import { Contact } from '../components/Contact'
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <AboutMe/>
      <Skills/>
      <MyProjects/>
      <Experience/>
      <Contact />
    </div>
  )
}

export default Home
