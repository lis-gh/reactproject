import React from 'react';
import Header from './Header';
import About from './About';
import Home from './Home'
import {BrowserRouter, Route} from 'react-router-dom'
import Weather from './Weather';
function App() {
  return (
    <div className="container">
      
      
      <BrowserRouter>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/weather" component={Weather} />
      </BrowserRouter>
      
    </div>
  );
}

export default App;

