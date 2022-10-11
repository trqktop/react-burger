import styles from './IngredientsCategory.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'

export default function IngredientsCategory(props) {//{/*ingredients-category */}d
    const { title, data } = { ...props }

    return (
        <li>
            <h4 className='mt-10 mb-6 text text_type_main-medium'>{title}</h4>
            {
                <ul className={`${styles.grid}`}>
                    {
                        data.map(item => (
                            <li className={`${styles.card}`} key={item._id}>
                                <Counter count={1} size="default" />
                                <figure className={styles.figure} >
                                    <img className='ml-4 mr-4 mb-1' src={item.image} />
                                    <figcaption className={styles.figcaption}>
                                        <div className={`${styles.priceContainer}`}>
                                            <span className={`${styles.price} pr-2 text text_type_digits-default`}>{item.price}</span>
                                            <CurrencyIcon type="primary" />
                                        </div>
                                        <span className={`text text_type_main-default mt-1 ${styles.about}`}>{item.name}</span>
                                    </figcaption>
                                </figure>
                            </li>
                        ))
                    }
                </ul>
            }
        </li>
    )
}


{/* <li>
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
        </li> */}