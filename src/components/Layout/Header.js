
import { Fragment } from 'react';
import styles from './Header.module.css';
import mealImage from '../../assets/meals.jpg';
import HeaderCardButton from './HeaderCardButton.js';

const Header = (props) =>{
    return <Fragment>
        <header className={styles.header}>
            <h1>ReactMeals</h1>
            <HeaderCardButton 
                title="Your Card"
                cardItems={3}
                onClick={props.onShowCard}
            />
        </header>
        <div className={styles['main-image']}>
            <img src={mealImage} alt='A table full of delicioous food!'></img>
        </div>
    </Fragment>
};

export default Header;