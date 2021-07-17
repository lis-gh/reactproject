import React from 'react';
import Header from './Header';
import About from './About';
import Todo from './Todo'
import {BrowserRouter, Route} from 'react-router-dom'
import Weather from './Weather';
function App() {
  return (
    <div className="container">
      
      
      <BrowserRouter>
      <Header />
      <Route exact path="/" component={Todo} />
      <Route exact path="/about" component={About} />
      <Route exact path="/weather" component={Weather} />
      </BrowserRouter>
      
    </div>
  );
}

export default App;

