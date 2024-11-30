import styles from './AvaliableMeals.module.css';
import Card from '../UI/Card';
import MealIteam  from './MealIteam/MealIteam';
import { useEffect, useState } from 'react';

const AvaliableMeals = () =>{
    const DUMMY_MEALS = [
        {
            id:'m1',
            name:'sushi',
            description:'Finest fish and veggries',
            price: 22.99
        },
        {
            id:'m2',
            name:'sushi 2',
            description:'Finest fish and veggries',
            price: 22.99
        },
        {
            id:'m3',
            name:'sushi 3',
            description:'Finest fish and veggries',
            price: 22.99
        },
        {
            id:'m4',
            name:'sushi 4',
            description:'Finest fish and veggries',
            price: 22.99
        }
    ];

    const[isLoading, setIsLoading] = useState(true);

    const[meals, setMeals] = useState([]);
    const[httpError, setHttpError] = useState();


    useEffect(() =>{
        const fetchMeals = async () =>{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');

            if(!response.ok){
                throw new Error('something wrong');
            }

            const responseData = await response.json();

            const loadedMeals = [];
            for(const key in responseData){
                loadedMeals.push({
                    id: responseData[key].id,
                    name: responseData[key].title,
                    description: responseData[key].body ,
                    price: responseData[key].userId
                });
            }

            setMeals(loadedMeals);
            setIsLoading(false);
        }

        fetchMeals().catch((error) =>{
            setIsLoading(false);
            setHttpError(error.message);
        });
      
    },[]);

    if(isLoading){
        return <section className={styles.MealsLoading}>
            <p>Loading....</p>
        </section>
    }

    
    if(httpError){
        return <section className={styles.MealsError}>
            <p>{httpError}</p>
        </section>
    }

    const mealsList = meals.map((meal) => 
        <MealIteam 
                key={meal.id}
                name={meal.name} 
                description={meal.description} 
                price={meal.price} />   
    );

    return <section className={styles['meals']}>
        <Card>
            <ul>
                {mealsList}
            </ul>
        </Card>
    </section>;
}

export default AvaliableMeals;