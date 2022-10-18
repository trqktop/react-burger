import styles from './ModalOverlay.module.css'

export default function ModalOverlay(props) {
    return (
        <div onClick={props.closeOnOverlay} className={styles.overlay}>
            {props.children}
        </div>
    )
}