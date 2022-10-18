import styles from './IngredientsCategory.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import PropTypes from 'prop-types';
export default function IngredientsCategory(props) {
    const { title, data, getModalData } = { ...props }



    function getElementsValue() {
        getModalData(data)
    }

    return (
        < li onClick={getElementsValue} className={`${styles.card}`}>
            <Counter count={1} size="default" />
            <figure className={styles.figure} >
                <img className='ml-4 mr-4 mb-1' src={data.image} />
                <figcaption className={styles.figcaption}>
                    <div className={`${styles.priceContainer}`}>
                        <span className={`${styles.price} pr-2 text text_type_digits-default`}>{data.price}</span>
                        <CurrencyIcon type="primary" />
                    </div>
                    <span className={`text text_type_main-default mt-1 ${styles.about}`}>{data.name}</span>
                </figcaption>
            </figure>
        </li>
    )
}


IngredientsCategory.propTypes = {
    props: PropTypes.object,
  };