import { useRef, useState } from 'react';
import styles from './Checkout.module.css';

const Checkout = (props) =>{

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();

    const[formInputsValidity,setFormInputsValidity] = useState({
        name: true,
        street: true,
        cirt: true,
        postalCode: true
    });

    const confirmHandler = (event) =>{
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const isEmpty = value => value.trim() === '';
        const isFiveChars = value => value.trim().length === 5;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPostalCodeIsValid = !isFiveChars(enteredPostalCode);

        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalCodeIsValid
        });

        const formIsValid = enteredNameIsValid && enteredStreetsValid && enteredCityIsValid && enteredPostalCodeIsValid;

        if(!formIsValid){
            return;
        }
        
        props.onConfirm({
            name: enteredName,
            city: enteredCity,
            postalCode: enteredPostalCode,
            street: enteredStreet
        });
    }
 const nameControlClasses = `${styles.control} ${formInputsValidity.name ? '' : styles.invalid}`;

    return(
        <form onSubmit={confirmHandler}>
            <div className={nameControlClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInputRef}></input>
                {!formInputsValidity.name && <p>Entered Valid Name</p>}
            </div>
            <div className={styles.control}>
                <label htmlFor='street'>street</label>
                <input type='text' id='street'  ref={streetInputRef}></input>
                {!formInputsValidity.street && <p>Entered Valid street</p>}

            </div>
            <div className={styles.control}>
                <label htmlFor='postal'>postal</label>
                <input type='text' id='postal'  ref={postalCodeInputRef}></input>
                {!formInputsValidity.postalCode && <p>Entered Valid postalCode</p>}

            </div>
            <div className={styles.control}>
                <label htmlFor='City'>postal</label>
                <input type='text' id='City'  ref={cityInputRef}></input>
                {!formInputsValidity.city && <p>Entered Valid City</p>}

            </div>
            <div>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button>Confirm</button>
            </div>
        </form>
    );
}

export default Checkout;