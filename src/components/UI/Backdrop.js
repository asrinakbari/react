import styles from './Backdrop.module.css';

const Backdrop = (props) =>{
    return <div className={styles.content} onClick={props.onClose}></div>
}

export default Backdrop;