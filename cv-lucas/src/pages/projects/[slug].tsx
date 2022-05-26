import styles from './styles.module.scss'

import { useRouter } from 'next/router'


export default function Project (){
    const router = useRouter();
    
    {   if(router.query.slug == "projeto"){
            return(
                <div className={styles.main}>
                    <h1>PROJETO PORRA</h1>
                </div>
            )
        } else if(router.query.slug == "projeto2"){
            return(
                <div className={styles.main}>
                    <h1>PROJETO2 PORRA</h1>
                </div>
            )
        }
    
    }

    return(
        <div className={styles.main}>
            <h1>{router.query.slug}</h1>
        </div>
        
    )
}


/*comparar o slug pra dispor o conteudo*/