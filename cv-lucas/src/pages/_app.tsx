import '../styles/globals.scss'
import styles from '../styles/app.module.scss'
import type { AppProps } from 'next/app'
import {Header} from '../components/Header'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header/>
        <Component {...pageProps} />
      </main>
    </div>
    
  )
}

export default MyApp
