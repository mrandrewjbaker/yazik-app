import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { NavBar } from './components/NavBar/NavBar';
import { RouterContainer } from './components/RouterContainer/RouterContainer';
import { MainViewFrame } from './views/MainViewFrame/MainViewFrame';

function App() {
  return (
    <div className="App">
      <RouterContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainViewFrame />} />
          </Routes>
        </BrowserRouter>
      </RouterContainer>
      <NavBar />

    </div>
  );
}

export default App;
