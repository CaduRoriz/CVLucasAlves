import type { NextPage } from 'next'
import styles from '../styles/app.module.scss'
import { AboutMe } from '../components/AboutMe'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <AboutMe/>
       
    </div>
  )
}

export default Home
