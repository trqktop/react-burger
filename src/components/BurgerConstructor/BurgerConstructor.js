import styles from './BurgerConstructor.module.css'
import React from 'react'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import ConstructorElements from '../ConstructorElements/ConstructorElements'


export default function BurgerConstructor({ data }) {
    const buns = data.filter((item) => item.type === 'bun');
    const bun = buns[0];
    const mains = data.filter((item) => item.type === 'main');
    const sauces = data.filter((item) => item.type === 'sauce');



    return (
        <section className={styles.constructorContainer}>
            <div >
                <ul className={styles.elements}>
                    <ConstructorElements pos={"top"} key={'top'} item={bun} index={"_1"} />
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
                    <ConstructorElements pos={"bottom"} key={'bottom'} item={bun} index={"_2"} />
                </ul>
                <div className={`${styles.purchaseContainer}`}>
                    <div className={styles.costContainer} >
                        <span className='mr-2 text text_type_digits-medium'>{18992}</span>
                        <div className='mr-10' >
                            <CurrencyIcon type="primary" />
                        </div>
                    </div>
                    <Button type="primary" size="large">
                        Оформить заказ
                    </Button>
                </div>
            </div>
        </section >
    )
}