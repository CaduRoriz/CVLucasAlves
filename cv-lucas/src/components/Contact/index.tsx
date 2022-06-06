import { ButtonSubmit } from '../Button'
import styles from './styles.module.scss'
import React, { useRef } from 'react';


import  {useForm}  from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';


import * as yup from "yup";

type Form = {
    name: string;
    email: string;
    message: string;
}

const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required()
})


export function Contact () {
    

    const {register , watch, handleSubmit, reset, formState: { errors } } = useForm<Form>({
        resolver: yupResolver(schema)
    });

    const values = watch(["name", "email", "message"])

    const onSubmit = () => {
       
        const form = document.getElementById('form')
      
        form?.addEventListener('submit', (e) => {
            e.preventDefault()
           
            
            const name = values[0]
           
            const email = values[1]
           
            const message = values[2]
            
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    message
                })
            }).then((response) => {
                console.log(response)
            }).catch((error) => {
                console.log(error) 
            })   
        })

        reset()
    };

    return (
        <div className={styles.contactWraper}>
           
                <div className={styles.title}>
                        <img src="completo.jpg"/>
                        <h1> Contact me<strong>, feel free to call or write anytime</strong></h1>
                </div>
                <div id="contact" className={styles.formBody}>
                    
                    <div className={styles.info}>
                       
                        <div className={styles.phone}>
                            <span>My Phone</span>
                            <p>+1 (346) 775-0038</p>
                        </div>

                        <div className={styles.email}>
                            <span>Contact Me Via Mail</span>
                            <p>lucasalvesdelima@gmail.com</p>
                        </div>

                        <div className={styles.website}>
                        <span>Social Media</span>
                          <a href="https://www.linkedin.com/in/lucas-alves-de-lima-a960b0a5/" target="_blank" rel="noreferrer">  <img src="linkedin.jpeg"/> </a>
                        </div>

                        <div className={styles.media}>

                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} id="form" className={styles.forms}>

                        <div className={`${styles.input} ${styles.formName}`}>
                            <label>Name</label>
                            <input 
                            id="name"
                            type="text"

                            {...register("name")}
                            />

                            <span>{errors.name?.message}</span>
                                       
                        </div>

                        <div className={`${styles.input} ${styles.formEmail}`}>
                            <label>Email address</label>
                            <input 
                            id="email"
                            {...register("email")}
                            />
                            
                            <span>{errors.email?.message}</span>
                            
                        </div>

                        <div className={`${styles.input} ${styles.formMessage}`}>
                            <label>Message</label>
                            <textarea
                            id="message" 
                            {...register("message")}
                            />
                            <span>{errors.message?.message}</span>
                        
                        </div>  
                        <ButtonSubmit text={"Send Message"} url={"send.png"}/>
                    </form>
                
                </div> 
                
        </div>
    )
}