import React from 'react';
import './App.css';
import './components/teacher.css';
import Teacher from './container/teacher';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div>
        <Teacher/>  
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
