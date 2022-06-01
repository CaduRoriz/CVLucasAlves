import styles from '../../styles/projetos.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/router'


interface CarrosselCompProps{
    carrossel?: React.ReactNode;
    title: string;
    description: string;
}

const Carrossel1: React.FC = () => <h2>Teste caralho</h2>;

const Background: React.FC<CarrosselCompProps> = (props) => {
    const { carrossel } = props;
    const { title } = props;
    const { description } = props;

    return <div className={styles.background}>
            
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.descritpion}>{description}</p>
           
            {carrossel}
       
        </div>;
};

export default function Project (){
    const router = useRouter();
    

    {   if(router.query.slug == "projeto1"){
            return(
                <div className={styles.main}>
                    <Background title={title1} description={description1} carrossel={<Carrossel1/>}/>
                </div>
                
            )
        } else if(router.query.slug == "projeto2"){
            return(
                <div className={styles.main}>
                    <Background title={title1} description={description1} carrossel={<Carrossel1/>}/>
                </div>
            )
        }
    
    }

}

const title1 = "Lorem ipsum dolor sit amet";
const description1 = " Ut ratione laboriosam vel laudantium quasi eos illo repellat in quaerat magnam sit debitis doloribus sed expedita cupiditate. Vel quidem aut aliquam debitis dolor minima. "

// <Background carrossel={<CarrosselComp />}/>
  