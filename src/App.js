import React from 'react';
import './App.css';

import Map from './container/Map';

function App() {
  return (
    <div className="App">
      <Map nbCase={10} height={750} width={750} />
    </div>
  );
}

export default App;
