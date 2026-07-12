
import './App.css';
import { useState } from 'react';

import Counter from './Counter';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  
  return (
    <div className="App">
      <Counter/>
      <CurrencyConvertor/>
    </div>
  );
}

export default App;
