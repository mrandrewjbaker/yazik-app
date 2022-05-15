import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { NavBar } from './components/NavBar/NavBar';
import { RouterContainer } from './components/RouterContainer/RouterContainer';
import { MainViewFrame } from './components/MainViewFrame/MainViewFrame';
// import { PickALanguage } from './views/pickALanguage/PickALanguage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route index element={<PickALanguage />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
