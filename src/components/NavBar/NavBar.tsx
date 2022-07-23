import { useAppSelector } from '../../app/hooks';
import styles from './NavBar.module.scss';

import logoHorizontal from '../../assets/images/logo_horiz.png';
import { useEffect, useState } from 'react';
import { LearningLanguageShortcutIcon } from './LearningLanguageShortcutIcon/LearningLanguageShortcutIcon';
import { LearningLanguageStageCount } from './LearningLanguageStageCount/LearningLanguageStageCount';
import { UserProfileShortcutIcon } from './UserProfileShortcutIcon/UserProfileShortcutIcon';
import { LanguageAdministratorShortcutIcon } from './LanguageAdministratorShortcutIcon/LanguageAdministratorShortcutIcon';

export const NavBar = () => {

  return (
    <div className={styles.NavBar}>
      <div className={styles.NavBarSection}>
        <LearningLanguageShortcutIcon />
        <LearningLanguageStageCount />
      </div>
      <div className={styles.NavBarSection}>
        
      </div>
      <div className={styles.NavBarSection}>
        <UserProfileShortcutIcon />
      </div>
    </div>
  )
}