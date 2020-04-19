import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import RouteApp from './configs/Routes';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <Router>
      <NavigationBar />
      <RouteApp /> 
    </Router>
  );
}

export default App;
