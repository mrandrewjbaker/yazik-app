import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { PickALanguage } from '../../views/pickALanguage/PickALanguage';
import styles from './MainViewFrame.module.scss';

export const MainViewFrame = () => {
  return (
  <div className={styles.MainViewFrame}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<PickALanguage />} />
    </Routes>
  </BrowserRouter>
  </div>
  )
}