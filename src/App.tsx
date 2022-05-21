import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { NavBar } from './components/NavBar/NavBar';
import { RouterContainer } from './components/RouterContainer/RouterContainer';
import { PickALanguage } from './views/pickALanguage/PickALanguage';
import { LanguageDashboard } from './views/languageDashboard/LanguageDashboard';
import { LanguageLesson } from './views/languageLesson/LanguageLesson';

function App() {
  return (
    <div className="App">
      <NavBar />
      <RouterContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/pick" element={<PickALanguage />} />
            <Route path="/language/lesson/:topic" element={<LanguageLesson />} />
            <Route path="/language/:language" element={<LanguageDashboard />} />

          </Routes>
        </BrowserRouter>
      </RouterContainer>
    </div>
  );
}

export default App;
