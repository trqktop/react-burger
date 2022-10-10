import styles from './BurgerIngredients.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import TabContainer from '../TabContainer/TabContainer'
import IngredientsCategory from '../IngredientsCategory/IngredientsCategory'

export default function BurgerIngredients({ data }) {

    const buns = data.filter((item) => item.type === 'bun');
    const mains = data.filter((item) => item.type === 'main');
    const sauces = data.filter((item) => item.type === 'sauce');


    return (
        <section className={styles.section}>
            <h1 className='mt-10 mb-5 text text_type_main-large'>Соберите свой бургер</h1>
            <TabContainer />
            <div className={styles.scrollContainer}>
                <ul>
                    <IngredientsCategory title={'buns'} data={buns} />
                    <IngredientsCategory title={'main'} data={mains} />
                    <IngredientsCategory title={'sauce'} data={sauces} />
                </ul>
            </div>
        </section>
    )
}

