import React from 'react';
import './App.css';
import { queryAllByAltText } from '@testing-library/react';

const api = {
  key: ,
  base: 
};

function App() {
  return (
    <div className="app warm">
      <main>
        <div className="searchbox">
          <input
            type="text"
            className="search-bar"
            placeholder="searching"
            // onChange={e => setQuery(e.target.value)}
            // value={queryAllByAltText}
            // onKeyPress={search}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
