import styles from './MealIteam.module.css';
import MealItemForm from './MealItemForm';

const MealIteam = (props) =>{
   // const price =`$${props.price.toFixed(2)}`; 
    const price =`$${props.price}`; 


    return <li className={styles.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={styles.description}>{props.description}</div>
            <div className={styles.price}>{price}</div>
        </div>
        <div>
            <MealItemForm />
        </div>
    </li>;
}

export default MealIteam;