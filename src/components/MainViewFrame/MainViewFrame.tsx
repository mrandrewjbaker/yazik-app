import { Routes, Route } from 'react-router-dom';
import { PickALanguage } from '../../views/pickALanguage/PickALanguage';
import styles from './MainViewFrame.module.scss';

export const MainViewFrame = () => {
  return (
  <div className={styles.MainViewFrame}>
    <Routes>
      <Route path="/pick" element={<PickALanguage />} />
      
    </Routes>
  </div>
  )
}