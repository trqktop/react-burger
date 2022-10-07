import styles from './BurgerIngredients.module.css'
import React from 'react'
import data from '../../utils/data.js'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'

export default function BurgerIngredients() {
    const [cost, setCost] = React.useState(0)
    const [state, setState] = React.useState(data)
    React.useEffect(() => {
        let fullCost = 0;
        state.forEach(item => fullCost += item.price)
        setCost(() => fullCost)
    }, [])


    const constructorElements = () => {
        return (
            state.map((item, index, arr) => {
                return (
                    <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <ConstructorElement
                            type={item.type === 'bun' && index === 0 ? 'top' : item.type === 'bun' && index === arr.length - 1 ? 'bottom' : ''}
                            isLocked={true}
                            text={item.name}
                            price={item.price}
                            thumbnail={item.image}
                        />
                        {/* <ConstructorElement
                            text="Краторная булка N-200i (верх)"
                            price={50}
                            thumbnail={state.image}
                        />
                        <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text="Краторная булка N-200i (низ)"
                            price={200}
                            thumbnail={state.image}
                        /> */}
                    </div>
                )
            })
        )
    }



    return (
        <section className={styles.ingredientsContainer}>
            <div className='ml-4 mr-4 mt-25'>
                {constructorElements()}
                <div className={`${styles.costContainer} mt-10`}>
                    <span className='mr-2'>{cost}</span>
                    <div className='mr-10'>
                        <CurrencyIcon type="primary" />
                    </div>
                    <Button type="primary" size="large">
                        Нажми на меня
                    </Button>
                </div>
            </div>
        </section >
    )
}