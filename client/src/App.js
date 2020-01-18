import React from '../node_modules/@types/react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from '../node_modules/react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to='/'>Home</Link>
          <Link to='/otherpage'>Other Page</Link>
         <div>
           <Route exact path='/' component={Fib}/>
           <Route exact path='/otherpage' component={OtherPage}/>

         </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    </Router>

  );
}

export default App;
