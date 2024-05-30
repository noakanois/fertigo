import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ShoeGrid from './components/ShoeGrid';
import ShoeDetails from './components/ShoeDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ShoeGrid />} />
          <Route path="/shoe/:productName" element={<ShoeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
