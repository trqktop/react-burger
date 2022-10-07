import styles from './AppHeader.module.css'
import { BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components'


export default function AppHeader() {
    return (
        <header className={`${styles.header}`}>
            <nav className={`${styles.header__container} pt-4 pb-4`}>
                <ul className={`${styles.header__list}`}>
                    <li style={{ alignContent: 'flex-start' }} className={`${styles.header__item} pl-5`}>
                        <BurgerIcon type="primary" />
                        <span className='ml-2'>Конструктор</span>
                    </li>
                    <li className={`${styles.header__item} pl-5 ml-2`}>
                        <ListIcon type="secondary" />
                        <span className='ml-2'>Лента заказов</span>
                    </li>
                    <li style={{ margin: 'auto' }} className={`${styles.header__item}`}>
                        <Logo />
                    </li>
                    <li style={{ marginLeft: 'auto' }} className={`${styles.header__item} pr-5`}>
                        <ProfileIcon type="secondary" />
                        <span className='ml-2'>Личный кабинет</span>
                    </li>
                </ul>
            </nav>
        </header >
    )
}
