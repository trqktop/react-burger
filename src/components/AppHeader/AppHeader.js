import styles from './AppHeader.module.css'
import { BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components'


export default function AppHeader() {

    return (

        <header className={`${styles.header}`}>
            <nav className={`${styles.header__container} pt-4 pb-4 mt-10`}>
                <ul className={`${styles.header__list}`}>
                    <li>
                        <a className={`${styles.header__item}  pr-5 mt-4 mb-4`} href="#">
                            <BurgerIcon type="primary" />
                            <span className='ml-2 text text_type_main-default'>Конструктор</span>
                        </a>
                    </li>
                    <li className={styles.second_item}>
                        <a className={`${styles.header__item} pl-5 pr-5 ml-2 mt-4 mb-4`} href="#">
                            <ListIcon type="secondary" />
                            <span className='ml-2 text text_type_main-default text_color_inactive'>Лента заказов</span>
                        </a>
                    </li >
                    <li className={`${styles.header__item} ${styles.header__item_middle}`}>
                        <Logo />
                    </li>
                    <li>
                        <a className={`${styles.header__item} pl-5 mt-4 mb-4 `} href="#">
                            <ProfileIcon type="secondary" />
                            <span className='ml-2 text text_type_main-default text_color_inactive'>Личный кабинет</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header >

    )
}
