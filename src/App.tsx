import React from 'react';
import './App.css';
import {Cart} from "./adapters/primary/react-components/dashboard/cart.component";
import {Dashboard} from "./adapters/primary/react-components/dashboard/dashboard";

function App() {
    return (
        <div className="App">
            <Dashboard/>
            <Cart/>
        </div>
    );
}

export default App;
