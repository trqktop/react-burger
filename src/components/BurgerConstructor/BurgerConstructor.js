import burgerConstructorStyles from './BurgerConstructor.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import data from '../../utils/data.js'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'




export default function BurgerConstructor() {

    const [current, setCurrent] = React.useState('one')


    const listItems = () => {
        return (
            data.map(item => (
                <li className={burgerConstructorStyles.item} key={item._id}>
                    <figure className={burgerConstructorStyles.itemContainer}>
                        <img src={item.image} />
                        <figure className={burgerConstructorStyles.priceContainer}>
                            <figcaption>{item.price}</figcaption>
                            <CurrencyIcon type="primary" />
                        </figure>
                        <figcaption className={burgerConstructorStyles.about}>{item.name}</figcaption>
                    </figure>
                </li>
            ))
        )
    }


    return (
        <section>
            <div style={{ display: 'flex' }}>
                <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                    One
                </Tab>
                <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    Two
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    Three
                </Tab>
            </div>
            <ul className={burgerConstructorStyles.list}>
                {listItems()}
            </ul>
        </section>
    )
}