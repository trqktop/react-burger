import styles from './TabContainer.module.css'
import React from 'react'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

export default function TabContainer() {
    const [current, setCurrent] = React.useState('one')

    const handleSetCurrent = () => {
        setCurrent()
    }

    return (
        <div className={styles.tabContainer}>
            <Tab value="one" active={current === 'one'} onClick={handleSetCurrent}>
                Булки
            </Tab>
            <Tab value="two" active={current === 'two'} onClick={handleSetCurrent}>
                Соусы
            </Tab>
            <Tab value="three" active={current === 'three'} onClick={handleSetCurrent}>
                Начинка
            </Tab>
        </div>
    )
}