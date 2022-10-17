import React from 'react';
import * as ReactDOM from 'react-dom';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import styles from './Modal.module.css'
import image from '../../images/done.svg'


const modalRoot = document.getElementById('react-modals')

export default function Modal(props) {
    return ReactDOM.createPortal(
        (
            <div className={styles.modalContainer}>
                {props.children}
            </div>
        ), modalRoot
    )
}