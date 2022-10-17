import styles from './ConstructorElements.module.css'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'

export default function ConstructorElements(props) {
    const { item, index, pos, handler } = { ...props }


    // const findTitleId = () => title === 'Булки' ? 'one' : title === 'Соусы' ? 'two' : 'three'
    return (
        <li onClick={handler}>
            {
                pos === 'middle' ?
                    <div className={styles.element}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            type={pos}
                            isLocked={false}
                            text={item.name}
                            price={item.price}
                            thumbnail={item.image}
                        />
                    </div>
                    :
                    <div className={`${styles.element} ${pos === 'top' ? styles.element_top : styles.element_bot}`} >
                        <ConstructorElement
                            type={pos}
                            isLocked={true}
                            text={item.name}
                            price={item.price}
                            thumbnail={item.image}
                        />
                    </div>
            }
        </li >
    )
}