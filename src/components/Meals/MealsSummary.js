import styles from './MealsSummary.module.css';

const MealsSummary = () => {
    return <section className={styles.summary}>
            <h2>Delicious Food, Delivered To You</h2>
            <p>
                Food is essential for life, but it’s also one of the most enjoyable aspects of our daily lives.
                Around the world, different cultures have created unique cuisines that reflect their history,
                 geography, and traditions.
            </p>
            <p>
                In addition to providing energy, food also brings people together. Sharing meals with family and friends,
                or trying new dishes from other cultures, allows us to connect and understand each other better. 
            </p>
        </section>;
}

export default MealsSummary;