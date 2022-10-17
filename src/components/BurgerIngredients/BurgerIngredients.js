import styles from './BurgerIngredients.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import TabContainer from '../TabContainer/TabContainer'
import IngredientsCategory from '../IngredientsCategory/IngredientsCategory'
import Modal from '../Modal/Modal';
import ModalOverlay from '../ModalOverlay/ModalOverlay'



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
    // const findTitleId = () => title === 'Булки' ? 'one' : title === 'Соусы' ? 'two' : 'three'

    function closeOnOverlay() {
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
                        <h4 className={styles.title}>Булки</h4>
                        <ul className={styles.gridContainer}>
                            {buns.map(bun => <IngredientsCategory key={bun.id} getModalData={openModal} title={'Булки'} data={bun} />)}
                        </ul>
                    </li>
                    <li>
                        <h4 className={styles.title}>Соусы</h4>
                        <ul className={styles.gridContainer}>
                            {sauces.map(sauce => <IngredientsCategory key={sauce.id} getModalData={openModal} title={'Соусы'} data={sauce} />)}
                        </ul>
                    </li>
                    <li>
                        <h4 className={styles.title}>Начинка</h4>
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
                                    <span className={`text text_type_main-large ${styles.modalTitle}`}>Детали ингредиента </span>
                                    <figure style={{ display: 'block', border: '1px red solid', maxWidth: 'fit-content', margin: 0 }}>
                                        <img src={state.modalImage} style={{ margin: 'auto', border: '1px white solid', display: 'block' }} />
                                        <figcaption className='mt-15 text text_type_main-default' style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                                            <span>{state.modalName}</span>
                                            <ul style={{ display: 'flex' }}>
                                                <li style={{ display: 'flex', flexDirection: 'column' }} className={styles.item}>
                                                    <span style={{ display: 'inline-block' }} className={styles.itemTitle}>каллории</span>
                                                    <span className={styles.itemValue}>{state.modalCalories}</span>
                                                </li>
                                                <li style={{ display: 'flex', flexDirection: 'column' }} className={styles.item}>
                                                    <span style={{ display: 'inline-block' }} className={styles.itemTitle}>белки</span>
                                                    <span className={styles.itemValue}>{state.modalProteins}</span>
                                                </li>
                                                <li style={{ display: 'flex', flexDirection: 'column' }} className={styles.item}>
                                                    <span style={{ display: 'inline-block' }} className={styles.itemTitle}>жиры</span>
                                                    <span className={styles.itemValue}>{state.modalFat}</span>
                                                </li>
                                                <li style={{ display: 'flex', flexDirection: 'column' }} className={styles.item}>
                                                    <span style={{ display: 'inline-block' }} className={styles.itemTitle}>углеводы</span>
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

