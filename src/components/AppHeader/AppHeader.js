import headerStyles from './AppHeader.module.css'
import { BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components'


export default function AppHeader(props) {

    return (
        <header className={`${headerStyles.header} ml-10 mr-10`}>
            <nav className={`${headerStyles.header__listContainer}`}>
                <ul className={`${headerStyles.header__list} pt-4 pb-4`}>
                    <li className={`${headerStyles.header__item} pt-4 pl-5 pr-5 pb-4 mr-2`}>
                        <BurgerIcon type="primary" />
                        <span className='ml-2'>Конструктор</span>
                    </li>
                    <li className={`${headerStyles.header__item} pt-4 pl-5 pr-5 pb-4`}>
                        <ListIcon type="secondary" />
                        <span className='ml-2'>Лента заказов</span>
                    </li>
                    <li className={`${headerStyles.header__item} ml-25 pl-3 mr-30 pr-30`}>
                        <Logo />
                    </li>
                    <li className={`${headerStyles.header__item} pt-4 pl-7 pr-5 pb-4 ml-10`}>
                        <ProfileIcon type="secondary" />
                        <span className='ml-2'>Личный кабинет</span>
                    </li>
                </ul>
            </nav>
        </header >

    )
}