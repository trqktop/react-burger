import React from 'react';
import appStyles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';


function App() {
  const [state, setState] = React.useState({
    success: false,
    ingredientsData: [],
    hasError: false,
  })


  const dataRequest = () => {
    const url = 'https://norma.nomoreparties.space/api/ingredients'
    setState({ ...state, success: false, hasError: false })
    fetch(url)
      .then(dataFromServer => dataFromServer.json())
      .then(dataFromServer => setState({
        success: true,
        ingredientsData: dataFromServer.data,
        hasError: false
      }))
      .catch(e => {
        setState({ ...state, hasError: true, success: false });
      });
  }

  React.useEffect(() => {
    dataRequest()
  }, [])

  const { success, ingredientsData } = state


  return (
    <div className={appStyles.App}>
      <AppHeader />
      <main className={appStyles.main}>
        {
          success ? (
            <>
              <BurgerIngredients data={ingredientsData} />
              <BurgerConstructor data={ingredientsData} />
            </>
          ) : <p className='mt-10 mb-5 text text_type_main-large'>загрузка...</p>
        }
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
