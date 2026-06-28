import './App.css';
import ListofPlayers from './Components/ListofPlayers';
import IndianPlayers from './Components/IndianPlayers';
import { useState } from 'react';

function App() {
    const [flag,setFlag]=useState(true);

    return (
      <div>
        <button onClick={()=>setFlag(!flag)}>
          {flag ? "Show indian players" : " show list of players"}
        </button>
        <hr/>

        {flag ? <ListofPlayers/> : <IndianPlayers/>}

      </div>
    )
}

export default App;
