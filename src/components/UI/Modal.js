import { Fragment } from 'react';
import styles from './Modal.module.css';
import Backdrop from './Backdrop';
import ModalOverlay from './ModalOverlay';
import ReactDOM from 'react-dom';
 
const Modal = (props) =>{
    return(
        <Fragment className={styles.modal}>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById('overlays'))}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('overlays'))}
        </Fragment>
    );
}

export default Modal;