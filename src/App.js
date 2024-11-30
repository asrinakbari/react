import {useState } from 'react';
import './App.css';
import Header from './components/Layout/Header.js';
import Meals from './components/Meals/Meals.js';
import Cart from './components/Card/Cart.js';
import CardProvider from './store/CardProvider.js';

function App() {
  const[cardIsShown, setCardIsShown] = useState(false);

  const showCardHandler = () =>{
    setCardIsShown(true);
  }

  const hideCardHandler = () =>{
    setCardIsShown(false);
  }

  return (
    <CardProvider>
      {cardIsShown &&  <Cart onClose={hideCardHandler} />}
      <Header onShowCard = {showCardHandler} />
      <main>
        <Meals />
      </main>
    </CardProvider>
  );
}

export default App;
