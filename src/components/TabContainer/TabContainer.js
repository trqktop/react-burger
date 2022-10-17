import styles from './TabContainer.module.css'
import React from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

export default function TabContainer() {
    const [current, setCurrent] = React.useState('one')


    const setTab = (tab) => {
        setCurrent(tab);
        const element = document.getElementById(tab);
        if (element) element.scrollIntoView({ behavior: "smooth" });
    };


    return (
        <div className={styles.tabContainer}>
            <Tab value="one" active={current === 'one'} onClick={setTab}>
                Булки
            </Tab>
            <Tab value="two" active={current === 'two'} onClick={setTab}>
                Соусы
            </Tab>
            <Tab value="three" active={current === 'three'} onClick={setTab}>
                Начинка
            </Tab>
        </div>
    )
}