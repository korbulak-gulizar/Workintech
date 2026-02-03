import React from 'react';
import { useDarkMode } from './hooks/useDarkMode';
import Navbar from './components/Navbar';
import Charts from './components/Charts';
import { data } from './data.js';

function App() {
  const [geceModu, setGeceModu] = useDarkMode();
  const [coinData, setCoinData] = React.useState(data);

  return (
    <div className={geceModu ? 'App dark-mode' : 'App'}>
      <Navbar geceModu={geceModu} setGeceModu={setGeceModu} />
      <Charts coinData={coinData} />
    </div>
  );
}

export default App;
