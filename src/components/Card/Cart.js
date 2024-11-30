import { useState } from 'react';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';
import Checkout from './Checkout';

const Cart  = props =>{

    const[isCheckOut, setIsCheckOut] = useState(false);
    const[isSubmitting, setIsSubmitting] = useState(false);


    const orderHandler = () =>{
        setIsCheckOut(true);
    }

    const cardItems = <ul>{[
        {id: 'c1', name: 'sushi', amount: 2 ,price: 28.30}
    ].map((item) => <li>{item.name}</li>)}</ul>;

    const submitOrderHandler =  async (userData)=>{
        setIsSubmitting(true);
        await fetch('',{ 
            method: 'post',
            body: JSON.stringify({
                user: userData,
                orderedItems:cardItems
            }),
        })
        setIsSubmitting(false);
    }

        return(
            <Modal className={styles.cart} onClose={props.onClose}>
                {cardItems}
                <div  className={styles['total']}>
                    <span>Total Amount</span>
                    <span>35.92</span>
                </div>
               { isCheckOut && <Checkout onCancel={props.onClose} onConfirm={props.submitOrderHandler} />}
               {!isCheckOut && <div  className={styles['actions']}>
                    <button className={styles['button--alt']} onClick={props.onClose}>close</button>
                    <button className={styles['button']} onClick={orderHandler}>order</button>
                </div>}
                
            </Modal>
        );
}

export default Cart;