import React from 'react';
// import logo from './logo.svg';
import appStyles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';

import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';

// import data from '../../utils/data.js'

function App() {
  const [state, setState] = React.useState({
    success: false,
    data: {},
    hasError: false,
  })


  const dataRequest = () => {
    setState({ ...state, success: false, hasError: false })
    fetch('https://norma.nomoreparties.space/api/ingredients')
      .then(dataFromServer => dataFromServer.json())
      .then(dataFromServer => setState({
        success: true,
        data: { ...dataFromServer },
        hasError: false
      }))
      .catch(e => {
        setState({ ...state, hasError: true, success: false });
      });
  }

  React.useEffect(() => {
    dataRequest()
  }, [])

  const { success, data } = { ...state }
  console.log(data.data)

  return (
    <div className={appStyles.App}>
      <AppHeader />
      <main className={appStyles.main}>
        {
          state.success === true ? (
            <>
              {/* <BurgerIngredients data={data} />
              <BurgerConstructor data={data} /> */}
            </>
          ) : <p>загрузка</p>
        }
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
