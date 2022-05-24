import styles from './styles.module.scss'

interface ButtonProps{
    text: String;
    url: String;
    size?: String;
}

export function Button ({text, url, size} : ButtonProps ) {
    return (
        <button style= {{width:`${size}`}} className={styles.button}>{text}<img src={`${url}`} /> </button>
    )
}