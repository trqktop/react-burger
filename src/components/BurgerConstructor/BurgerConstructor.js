import styles from './BurgerConstructor.module.css'
import React from 'react'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import ConstructorElements from '../ConstructorElements/ConstructorElements'
import Modal from '../Modal/Modal'
import ModalOverlay from '../ModalOverlay/ModalOverlay'



export default function BurgerConstructor({ data }) {
    const buns = data.filter((item) => item.type === 'bun');
    const bun = buns[0];
    const mains = data.filter((item) => item.type === 'main');
    const sauces = data.filter((item) => item.type === 'sauce');



    // const bun = data.find(
    //     (ingredient) => ingredient.type === "bun"
    // );
    // const ingredients = data.filter(
    //     (ingredient) => ingredient.type !== "bun"
    // );

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
                    <Button type="primary" size="large">
                        Оформить заказ
                    </Button>
                </div>
            </div>
            {/* <ModalOverlay><Modal>
                {
                    (<>
                        <span className={`text text_type_digits-large ${styles.orderId}`}>034536</span>
                        <span className={`text text_type_main-medium mt-8 ${styles.aboutId}`}>идентификатор заказа</span>
                        <figure className='pt-15' style={{ display: 'block', border: '1px red solid', maxWidth: 'fit-content' }}>
                            <img src={''} style={{ margin: 'auto', border: '1px white solid', display: 'block' }} />
                            <figcaption className='mt-15 text text_type_main-default' style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                                <span>Ваш заказ начали готовить</span>
                                <span className='text_color_inactive mt-2'>Дождитесь готовности на орбитальной станции</span>
                            </figcaption>
                        </figure>
                    </>)
                }
            </Modal></ModalOverlay> */}
        </section >
    )
}