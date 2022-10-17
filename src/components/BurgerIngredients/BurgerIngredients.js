import styles from './BurgerIngredients.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import TabContainer from '../TabContainer/TabContainer'
import IngredientsCategory from '../IngredientsCategory/IngredientsCategory'
import Modal from '../Modal/Modal';
import ModalOverlay from '../ModalOverlay/ModalOverlay'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'


export default function BurgerIngredients({ data }) {
    const [state, setState] = React.useState({
        count: 0,
        modalOpened: false
    })
    // const setTab = (tab) => {
    //     setCurrent(tab);
    //     const element = document.getElementById(tab);
    //     if (element) element.scrollIntoView({ behavior: "smooth" });
    // };
    // 

    function closeOnOverlay(evt) {
        return evt.currentTarget === evt.target ?
            setState({
                modalOpened: false
            }, [])
            : false
    }

    function closePopup() {
        setState({
            modalOpened: false
        }, [])
    }

    function openModal(data) {
        setState({
            ...state,
            modalName: data.name,
            modalCalories: data.calories,
            modalCarbohydrates: data.carbohydrates,
            modalFat: data.fat,
            modalProteins: data.proteins,
            modalImage: data.image_large,
            modalOpened: !state.modalOpened
        }, [])
    }

    const buns = data.filter((item) => item.type === 'bun');
    const mains = data.filter((item) => item.type === 'main');
    const sauces = data.filter((item) => item.type === 'sauce');


    return (
        <section className={styles.section}>
            <h1 className='mt-10 mb-5 text text_type_main-large'>Соберите бургер</h1>
            <TabContainer />
            <div className={styles.scrollContainer}>
                <ul>
                    <li>
                        <h4 id='one' className={`text text_type_main-default ${styles.title}`}>Булки</h4>
                        <ul className={styles.gridContainer}>
                            {buns.map(bun => <IngredientsCategory key={bun.id} getModalData={openModal} title={'Булки'} data={bun} />)}
                        </ul>
                    </li>
                    <li>
                        <h4 id='two' className={`text text_type_main-default ${styles.title}`}>Соусы</h4>
                        <ul className={styles.gridContainer}>
                            {sauces.map(sauce => <IngredientsCategory key={sauce.id} getModalData={openModal} title={'Соусы'} data={sauce} />)}
                        </ul>
                    </li>
                    <li>
                        <h4 id='three' className={`text text_type_main-default ${styles.title}`}>Начинка</h4>
                        <ul className={styles.gridContainer}>
                            {mains.map(main => <IngredientsCategory key={main.id} getModalData={openModal} title={'Начинка'} data={main} />)}
                        </ul>
                    </li>
                </ul>
            </div>{
                state.modalOpened ?
                    <ModalOverlay closeOnOverlay={closeOnOverlay}>
                        <Modal >
                            {
                                (<>
                                    <span onClick={closePopup} className={`text text_type_main-large ${styles.modalTitle}`}>
                                        <span>Детали ингредиента</span>
                                        <CloseIcon />
                                    </span>
                                    <figure className={styles.modalElement}>
                                        <img src={state.modalImage} className={styles.modalImage} />
                                        <figcaption className={styles.modalAboutElement}>
                                            <span className={`${styles.elementName} text text_type_main-default`}>{state.modalName}</span>
                                            <ul className={`text text_type_digits-default text_color_inactive ${styles.elementsComposition}`}>
                                                <li className={styles.elementComposition}>
                                                    <span className={`text text_type_main-default ${styles.itemTitle}`}>Калории</span>
                                                    <span className={styles.itemValue}>{state.modalCalories}</span>
                                                </li>
                                                <li className={styles.elementComposition}>
                                                    <span className={`text text_type_main-default ${styles.itemTitle}`}>Белки</span>
                                                    <span className={styles.itemValue}>{state.modalProteins}</span>
                                                </li>
                                                <li className={styles.elementComposition} >
                                                    <span className={`text text_type_main-default ${styles.itemTitle}`}>Жиры</span>
                                                    <span className={styles.itemValue}>{state.modalFat}</span>
                                                </li>
                                                <li className={styles.elementComposition} >
                                                    <span className={`text text_type_main-default ${styles.itemTitle}`}>Углеводы</span>
                                                    <span className={styles.itemValue}>{state.modalCarbohydrates}</span>
                                                </li>
                                            </ul>
                                        </figcaption>
                                    </figure>

                                </>)
                            }
                        </Modal>
                    </ModalOverlay >
                    : ''
            }
        </section>
    )
}

