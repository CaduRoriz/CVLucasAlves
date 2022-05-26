import { ButtonSubmit } from '../Button'
import styles from './styles.module.scss'
import React,{ ReactEventHandler, useState } from 'react';

import  {useForm, SubmitHandler}  from 'react-hook-form';

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


function sendEmail(){

}
export function Contact () {
    

    const {register , handleSubmit, formState: { errors } } = useForm<Form>({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: Form) => console.log(data);

    return (
        <div id="contact" className={styles.contactWraper}>
           
                <div className={styles.title}>
                        <img src="completo.jpg"/>
                        <h1> Contact me<strong>, feel free to call or write anytime</strong></h1>
                </div>
                <div className={styles.formBody}>
                    
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
                          <a href="https://www.linkedin.com/in/lucas-alves-de-lima-a960b0a5/" target="_blank"> <img src="linkedin.jpeg"/> </a>
                        </div>

                        <div className={styles.media}>

                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className={styles.forms}>

                        <div className={`${styles.input} ${styles.formName}`}>
                            <label>Name</label>
                            <input 
                            type="text"

                            {...register("name")}
                            />

                            <span>{errors.name?.message}</span>
                                       
                        </div>

                        <div className={`${styles.input} ${styles.formEmail}`}>
                            <label>Email address</label>
                            <input 
                            
                            {...register("email")}
                            />
                            
                            <span>{errors.email?.message}</span>
                            
                        </div>

                        <div className={`${styles.input} ${styles.formMessage}`}>
                            <label>Message</label>
                            <textarea 
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



                // const [errorMessage, setErrorMessage] = useState("");
                // const [errorName, setErrorName] = useState("");
                // const [errorEmail, setErrorEmail] = useState("");
             
             
                //  const errorMessages = {
                //      nome: {
                //          valueMissing: "The name field can't be empty."
                //      },
                //      email: {
                //          valueMissing: "The email field can't be empty.",
                //          typeMismatch: "The email typed is not valid."
                //      },
                //      message:{
                //          valueMissing: "The message field can't be empty"
                //      }
                //  }
             
                //  // const inputs = document.querySelectorAll('input');
             
                //  // inputs.forEach(input => {
                //  //     input.addEventListener('blur', (evento) => {
                //  //         console.log(evento.target)//passar a valida aqui pra validar no blur
                //  //     })
                //  // })
                 
                // function handleChange (event: React.ChangeEvent<HTMLInputElement>){
                //      const fieldName = event.target.getAttribute('name') //passo o nome do input
                //      const valor = event.target.value;
                //      switch(fieldName){
                //          case 'name':
                //              setName(valor);    
                //              break;
                         
                //          case 'email':
                //              setEmail(valor);
                         
                //              break;
                //      }
                // }
             
                // function handleChanget (event: React.ChangeEvent<HTMLTextAreaElement>) {
                //     const valor = event.target.value;
                //     setMessage(valor);
                // }
             
                // function validaForm () {
                //      const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
                     
                //      if(!regEx.test(email)){
                //          //mandar mensagem
                         
                //          return false;
                //      }
             
                //      if(email == ""){
                //          //mandar mensagem
                //          return false;
                //      }
             
                //      if(name == ""){
                //          // mandar mensagem
                //          return false;
                //      }
             
                //      if(message == ""){
                //          //
                //          return false;
                //      }
             
             
                // } 