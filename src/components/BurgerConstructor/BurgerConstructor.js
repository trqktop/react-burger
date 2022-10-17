import styles from './BurgerConstructor.module.css'
import React from 'react'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import ConstructorElements from '../ConstructorElements/ConstructorElements'
import Modal from '../Modal/Modal'
import ModalOverlay from '../ModalOverlay/ModalOverlay'
import doneImage from '../../images/done.svg'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

export default function BurgerConstructor({ data }) {
    const [state, setState] = React.useState({
        modalOpened: false
    })

    const buns = data.filter((item) => item.type === 'bun');
    const bun = buns[0];
    const mains = data.filter((item) => item.type === 'main');
    const sauces = data.filter((item) => item.type === 'sauce');


    function closeOnOverlay(evt) {
        return evt.currentTarget === evt.target ?
            setState({
                modalOpened: false
            }, [])
            : false
    }

    function openModal() {
        setState({
            modalOpened: true
        }, [])
    }

    function closeModal() {
        setState({
            modalOpened: false
        }, [])
    }

    return (
        <section className={styles.constructorContainer}>
            <div >
                <ul className={styles.elements}>
                    <ConstructorElements pos={"top"} item={bun} index={"_1"} />
                    {
                        mains.map((item, index, arr) => {
                            return <ConstructorElements pos={"middle"} key={index} item={item} index={index} />
                        })
                    }
                    {
                        sauces.map((item, index, arr) => {
                            return <ConstructorElements pos={"middle"} key={index} item={item} index={index} />
                        })
                    }
                    <ConstructorElements pos={"bottom"} item={bun} index={"_2"} />
                </ul>
                <div className={`${styles.purchaseContainer}`}>
                    <div className={styles.costContainer} >
                        <span className='mr-2 text text_type_digits-medium'>{ }</span>
                        <div className='mr-10' >
                            <CurrencyIcon type="primary" />
                        </div>
                    </div>
                    <Button onClick={openModal} type="primary" size="large">
                        Оформить заказ
                    </Button>
                </div>
            </div>
            {
                state.modalOpened ?
                    <ModalOverlay closeOnOverlay={closeOnOverlay}>
                        <Modal>
                            {
                                (<>
                                    <div onClick={closeModal} className={styles.closeButton}><CloseIcon /></div>
                                    <span className={`text text_type_digits-large  ${styles.orderId}`}>
                                        <span>034536</span>
                                    </span>
                                    <span className={`text text_type_main-medium mt-8 ${styles.aboutId}`}>идентификатор заказа</span>
                                    <figure className={`pt-15 ${styles.doneContainer}`} >
                                        <img className={styles.done} src={doneImage} />
                                        <figcaption className={`mt-15 text text_type_main-default ${styles.orderContainer}`}>
                                            <span>Ваш заказ начали готовить</span>
                                            <span className='text_color_inactive mt-2 mb-30'>Дождитесь готовности на орбитальной станции</span>
                                        </figcaption>
                                    </figure>
                                </>)
                            }
                        </Modal>
                    </ModalOverlay> : ''
            }

        </section >
    )
}



