import React from 'react';

import ResultsPanel from '../results/components/ResultsPanel';
import SearchBox from '../query/components/SearchBox';

import '../index.css'

const App = () => (
  <div className="App">
    <div className="App-header">

      <h2>Wikipedia Viewer</h2>
    </div>
    <br />
    <div className="container App-container">
        <SearchBox />
        <ResultsPanel />
    </div>
  </div>
)

export default App;
