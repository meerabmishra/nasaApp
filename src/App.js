
import './App.css';
import React, { useState } from 'react'
import InputForm from './components/InputForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AsteroidsDetail from './components/AsteroidsDetail';

function App() {
  const [apiData,setApiData]=useState([])
  const apiKey='L9iQjgz1gtFhhUMFH8pAprBBeNHbSVYlpDDx6yzB'
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={  <InputForm apiKey={apiKey} setApiData={setApiData} apiData={apiData}/>} />
      <Route path='/asteroids' element={  <AsteroidsDetail/>} />

    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
