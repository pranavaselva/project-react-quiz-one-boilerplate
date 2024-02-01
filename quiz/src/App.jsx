import React from 'react';
import './App.css';
import HomeComponent from './Component/HomeComponent ';
import QuizComponent from './Component/QuizComponent ';
import ResultComponent from './Component/ResultComponent';


function App() {
  return (
    <div className="App">
      <HomeComponent/>
      <QuizComponent/>
      <ResultComponent/>
    </div>
  );
}

export default App;