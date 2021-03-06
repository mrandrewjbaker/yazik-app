import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { NavBar } from './components/NavBar/NavBar';
import { RouterContainer } from './components/RouterContainer/RouterContainer';
import { PickALanguage } from './views/pickALanguage/PickALanguage';
import { LanguageDashboard } from './views/languageDashboard/LanguageDashboard';
import { LanguageLesson } from './views/languageLesson/LanguageLesson';
import { ConversationBot } from './views/languageTools/conversationBot/ConversationBot';
import { SpeakingBot } from './views/languageTools/speakingBot/SpeakingBot';
import { LanguageTopicLesson } from './views/languageTopicLesson/LanguageTopicLesson';
import { Login } from './views/login/Login';
import { Register } from './views/register/Register';
import { Dashboard } from './views/dashboard/Dashboard';
import { LanguageAdministrator } from './views/languageAdminstrator/LanguageAdministrator';

function App() {
  return (
    <div className="App">
      <RouterContainer>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/register" element={<Register />} />
            <Route path="/pick-a-language" element={<PickALanguage />} />

            <Route path="/language-administrator" element={<LanguageAdministrator />} />

            <Route path="/language/:language" element={<LanguageDashboard />} />
            <Route
              path="/language/:language/topic/:topicSlug"
              element={<LanguageTopicLesson />}
            />
          </Routes>
        </BrowserRouter>
      </RouterContainer>
    </div>
  );
}

export default App;
