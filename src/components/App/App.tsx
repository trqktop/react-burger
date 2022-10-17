import React from 'react';
import appStyles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import Modal from '../Modal/Modal';
import ModalOverlay from '../ModalOverlay/ModalOverlay';



function App() {
  const [state, setState] = React.useState({
    success: false,
    ingredientsData: [],
    hasError: false,
    madalOpened: false
  })

  const url = 'https://norma.nomoreparties.space/api/ingredients';

  const dataRequest = () => {
    setState({ ...state, success: false, hasError: false })
    fetch(url)
      .then(dataFromServer => dataFromServer.json())
      .then(dataFromServer => setState({
        success: true,
        ingredientsData: dataFromServer.data,
        hasError: false,
        madalOpened: false
      }))
      .catch(e => {
        setState({ ...state, hasError: true, success: false });
      });
  }

  React.useEffect(() => {
    dataRequest()
  }, [])



  const { success, ingredientsData, hasError, madalOpened } = state;




  return (
    <>
      <div className={appStyles.App}>
        <AppHeader />
        <main className={appStyles.main}>
          {
            success ? (
              <>
                <BurgerIngredients data={ingredientsData} />
                <BurgerConstructor data={ingredientsData} />
              </>
            ) :
              <span className='mt-10 mb-5 text text_type_main-large'>загрузка...</span>
          }
        </main>
        <footer>
        </footer>
      </div >

    </>
  );
}

export default App;


