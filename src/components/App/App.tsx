import React from 'react';
// import logo from './logo.svg';
import appStyles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients'
import data from '../../utils/data.js'

function App() {
  return (
    <div className={appStyles.App}>
      <AppHeader />
      <main className={appStyles.main}>
        <BurgerConstructor props={data} />
        <BurgerIngredients props={data} />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
