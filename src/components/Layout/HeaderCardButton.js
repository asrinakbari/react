import styles from './HeaderCardButton.module.css';
import { FaCartShopping } from "react-icons/fa6";

const HeaderCardButton = props =>{
    
    return(
        <button className={styles.button} onClick={props.onClick}>
            <span className={styles.icon}>
                <FaCartShopping />
            </span>
            <span className={styles.title}>{props.title}</span>
            <span className={styles.budge}>
                {props.cardItems}
            </span>
        </button>
    );
}
export default HeaderCardButton;