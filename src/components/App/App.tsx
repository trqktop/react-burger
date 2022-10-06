import React from 'react';
// import logo from './logo.svg';
import appStyles from './App.module.css';

import AppHeader from '../AppHeader/AppHeader';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'


function App() {
  return (
    <div className={appStyles.App}>
      <AppHeader />
      <h1>Соберите свой бургер</h1>
      <main className={appStyles.main}>
        <BurgerConstructor />
        <BurgerIngredients />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
