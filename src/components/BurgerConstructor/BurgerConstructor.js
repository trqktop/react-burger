import styles from './BurgerConstructor.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'

export default function BurgerConstructor({ props }) {
    const [current, setCurrent] = React.useState('one')
    const [count, setCount] = React.useState(1)
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
                <h4 className='mt-10 mb-6'>{title}</h4>
                <ul className={`${styles.grid}`}>
                    {
                        arr.map(item => (
                            <li style={{ position: 'relative' }} className={`${styles.card}`} key={item._id}>
                                <Counter count={count} size="default" />
                                <figure style={{ margin: '0', display: 'block' }}>
                                    <img className='ml-4 mr-4 mb-1' src={item.image} />
                                    <figcaption style={{ margin: '0', display: 'block' }}>
                                        <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                                            <span className='pr-2'>{item.price}</span>
                                            <CurrencyIcon type="primary" />
                                        </div>
                                        <span style={{ textAlign: 'center' }} className={`mt-1 ${styles.about}`}>{item.name}</span>
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
        <section style={{ maxHeight: 'calc(100vh - 84px - 40px)' }} className={styles.section}>
            <h1 className='mt-10 mb-5'>Соберите свой бургер</h1>
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
            <div style={{
                overflowY: 'scroll', height: 'calc(100% - 56px - 36px - 60px - 40px)'
            }}>
                <ul >
                    {renderElement(currentData.bun, "bun")}
                    {renderElement(currentData.main, "main")}
                    {renderElement(currentData.sauce, "sauce")}
                </ul>
            </div>
        </section>
    )
}

