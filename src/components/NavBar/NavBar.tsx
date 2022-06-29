import { useAppSelector } from '../../app/hooks';
import styles from './NavBar.module.scss';

import logoHorizontal from '../../assets/images/logo_horiz.png';
import { useEffect, useState } from 'react';
import { LearningLanguageFlag } from './LearningLanguageFlag/LearningLanguageFlag';
import { LearningLanguageStageCount } from './LearningLanguageStageCount/LearningLanguageStageCount';

export const NavBar = () => {

  return (
    <div className={styles.NavBar}>
      <div className={styles.NavBarSection}>
        <LearningLanguageFlag />
        <LearningLanguageStageCount />
      </div>
      <div className={styles.NavBarSection}>
        
      </div>
      <div className={styles.NavBarSection}>
        
      </div>
    </div>
  )
}