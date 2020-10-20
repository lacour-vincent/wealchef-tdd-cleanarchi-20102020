import React from 'react';
import './App.css';
import {Cart} from "./adapters/primary/react-components/dashboard/cart.component";
import {Restaurant} from "./adapters/primary/react-components/dashboard/restaurant.component";

function App() {
  return (
    <div className="App">
      <Restaurant/>
      <Cart />
    </div>
  );
}

export default App;
