import burgerIngredientsStyles from './BurgerIngredients.module.css'
import React from 'react'
import data from '../../utils/data.js'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"

export default function BurgerIngredients() {
    let cost = 0;

    const constructorElements = () => {
        return (
            data.map((item, index, arr) => {
                cost += item.price




                return (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <ConstructorElement
                            type={index === 0 ? "top" : index === arr.length - 1 ? "bottom" : ""}
                            isLocked={index === 0 ? true : index === arr.length - 1 ? true : false}
                            text={item.name}
                            price={item.price}
                            thumbnail={item.image}
                        />
                    </div>
                )
            })
        )
    }


    return (
        <section>
            <>
                {constructorElements()}
                <div className={burgerIngredientsStyles.costContainer}>
                    <span>{cost}</span>
                    <CurrencyIcon type="primary" />
                    <Button type="primary" size="large">
                        Нажми на меня
                    </Button>
                </div>
            </>
        </section>
    )
}