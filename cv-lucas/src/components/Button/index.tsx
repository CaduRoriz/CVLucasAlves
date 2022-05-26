import styles from './styles.module.scss'

import { scroll } from '../Scroll';

interface ButtonProps{
    text: String;
    url: String;
    size?: String;
    id?: String;
    type?: String;
    onClick?: void;
}

export function Button ({text, url, size, id, type} : ButtonProps ) {
    return (
        <button onClick = {() => {
            if(id){
                scroll(id)
            }
        }} style= {{width:`${size}`}} className={styles.button}>{text}<img src={`${url}`}/> </button>
    )
}

export function ButtonSubmit ({text, url, size, onClick, type} : ButtonProps ) {
    return (
        <button type="submit" onClick = {() => {
           onclick
        }} style= {{width:`${size}`}} className={styles.button}>{text}<img src={`${url}`}/> </button>
    )
}