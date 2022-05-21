import { useAppSelector } from '../../app/hooks';
import styles from './NavBar.module.scss';

import logoHorizontal from '../../assets/images/logo_horiz.png';
import { useEffect, useState } from 'react';
import { LearningLanguageFlag } from './LearningLanguageFlag/LearningLanguageFlag';

export const NavBar = () => {
  const pickALanguageState = useAppSelector(state => state.pickALanguage);
  const [activeLearningLanguage, setActiveLearningLanguage] = useState<string | null>(null);
  const [activeNativeLanguage, setActiveNativeLanguage] = useState<string | null>(null);

  useEffect(() => {
    setActiveLearningLanguage(pickALanguageState.value.activeLearningLanguage);
    setActiveNativeLanguage(pickALanguageState.value.activeNativeLanguage);
  }, [pickALanguageState])

  return (
    <div className={styles.NavBar}>
      <div className={styles.NavBarSection}>
        <LearningLanguageFlag />
      </div>
      <div className={styles.NavBarSection}>
        
      </div>
      <div className={styles.NavBarSection}>
        
      </div>
    </div>
  )
}