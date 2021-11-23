import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import DetailsPage from './Pages/DetailsPage/DetailsPage';
import Choices from './Components/DetailsPage/Choices/Choices';

import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Route path="/" component={HomePage} exact></Route>
        <Route path="/home" compoennt={HomePage} exact></Route>
        <Route path="/results" component={DetailsPage} exact></Route>
    </BrowserRouter>
    
  );
}

export default App;
