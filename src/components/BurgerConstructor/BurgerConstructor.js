import styles from './BurgerConstructor.module.css'
import React from 'react'
import data from '../../utils/data.js'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'

export default function BurgerConstructor({ props }) {
    const [cost, setCost] = React.useState(0)
    const [state, setState] = React.useState(props)

    const constructorElements = () => {
        return (
            state.map((item, index, arr) => {
                return (
                    <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        {
                            index > 0 && index < arr.length - 1 ?
                                <DragIcon type="primary" /> : <div></div>
                        }
                        <ConstructorElement
                            type={item.type === 'bun' && index === 0 ? 'top' : item.type === 'bun' && index === arr.length - 1 ? 'bottom' : ''}
                            isLocked={index === 0 || index === arr.length - 1}
                            text={item.name}
                            price={item.price}
                            thumbnail={item.image}
                        />
                    </li>
                )
            })
        )
    }



    return (
        <section className={styles.ingredientsContainer}>
            <div className='ml-4 mr-4 mt-25'>
                <ul style={{ maxHeight: 'calc(100vh - 228px - 196px )', display: 'flex', flexDirection: 'column', rowGap: '16px', overflowY: 'scroll' }}>
                    {constructorElements()}
                </ul>
                <div className={`${styles.costContainer} mt-10`}>
                    <div style={{ display: 'flex', alignItems: 'center', margin: 0, padding: 0, }}>
                        <span className='mr-2 text text_type_digits-default'>{cost}</span>
                        <div className='mr-10'>
                            <CurrencyIcon type="primary" />
                        </div>
                    </div>
                    <Button type="primary" size="large">
                        Нажми на меня
                    </Button>
                </div>
            </div>
        </section >
    )
}