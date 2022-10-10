import styles from './BurgerIngredients.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'

export default function BurgerIngredients({ data }) {
    const [current, setCurrent] = React.useState('one')
    const [count, setCount] = React.useState(1)
    const [currentData, setData] = React.useState(
        () => {
            const sorted = {
                bun: [],
                main: [],
                sauce: []
            }
            data.map(item => {
                sorted[item.type].push(item)
            })
            return sorted
        }
    )






    const renderElement = (arr, title) => {
        return (
            <li>
                <h4 className='mt-10 mb-6 text text_type_main-medium'>{title}</h4>
                <ul className={`${styles.grid}`}>
                    {
                        arr.map(item => (
                            <li className={`${styles.card}`} key={item._id}>
                                <Counter count={count} size="default" />
                                <figure className={styles.figure} >
                                    <img className='ml-4 mr-4 mb-1' src={item.image} />
                                    <figcaption className={styles.figcaption}>
                                        <div className={styles.priceContainer}>
                                            <span className='pr-2 text text_type_digits-default'>{item.price}</span>
                                            <CurrencyIcon type="primary" />
                                        </div>
                                        <span className={`text text_type_main-default mt-1 ${styles.about}`}>{item.name}</span>
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
        <section className={styles.section}>
            <h1 className='mt-10 mb-5 text text_type_main-large'>Соберите свой бургер</h1>
            <div className={styles.tabContainer}>
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
            <div className={styles.scrollContainer}>
                <ul>
                    {renderElement(currentData.bun, " Булки")}{/*ingredients-category  вы*/}
                    {renderElement(currentData.main, "Соусы")}{/*ingredients-category */}
                    {renderElement(currentData.sauce, "Начинка")}{/*ingredients-category */}
                </ul>
            </div>
        </section>
    )
}

