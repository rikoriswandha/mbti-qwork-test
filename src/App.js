import React from 'react';
import './App.css';
import logo from './qwork_id.png';
import QuizPage from './QuizPage';

function App() {
  return (
    <div className="App">
      <img className="App-logo" src={logo} alt='qwork logo'></img>
      <QuizPage/>
      <footer>
        Questions & Explanations credit to : Nafis Mudrika, 2009
        <br/>
        © 2019 Made with ❤️ by Qwork.id
      </footer>
    </div>
  );
}

export default App;
