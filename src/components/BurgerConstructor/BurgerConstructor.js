import './resetStyles.css'
import styles from './BurgerConstructor.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'



export default function BurgerConstructor({ props }) {
    const [current, setCurrent] = React.useState('one')
    const [currentData, setData] = React.useState(
        () => {
            const sorted = {
                bun: [],
                main: [],
                sauce: []
            }
            props.map(item => {
                sorted[item.type].push(item)
            })
            return sorted
        }
    )

    const renderElement = (arr, title) => {
        return (
            <li>
                <h4>{title}</h4>
                <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                    {
                        arr.map(item => (
                            <li key={item._id}>
                                <figure>
                                    <img src={item.image} />
                                    <figcaption>
                                        <span>{item.name}</span>
                                        <span>{item.price}</span>
                                    </figcaption>
                                </figure>
                            </li>
                        ))
                    }
                </ul>
            </li>
        )
    }


    return (
        <section>
            <h1>Соберите свой бургер</h1>
            <div style={{ display: 'flex' }}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    Начинка
                </Tab>
            </div>
            <ul style={{ maxHeight: 'calc(100vh - 56px - 50px - 84px)', overflowY: 'scroll' }}>{/*ВРЕМЕННЫЙ РАСЧЕТ. ПЕРЕСЧИТАЬ*/}
                {renderElement(currentData.bun, "bun")}
                {renderElement(currentData.main, "main")}
                {renderElement(currentData.sauce, "sauce")}
            </ul>
        </section>
    )
}