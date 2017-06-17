import React from 'react';

import ResultsPanel from '../results/components/ResultsPanel';
import SearchBox from '../query/components/SearchBox';

import logo from '../logo.svg';
import '../App.css';
import '../index.css'

const App = () => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Wikipedia Viewer</h2>
    </div>
    <br />
    <div className="container">
        <SearchBox />

        <ResultsPanel />
    </div>
  </div>
)

export default App;
