
import englishFlag from '../../../assets/images/languages/english.png';
import frenchFlag from '../../../assets/images/languages/french.png';
import germanFlag from '../../../assets/images/languages/german.png';
import russianFlag from '../../../assets/images/languages/russian.png';
import mandarinFlag from '../../../assets/images/languages/mandarin.png';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useEffect, useState } from 'react';
import styles from './learningLanguageShortcutIcon.module.scss';
import { PickALanguagePopup } from './PickALanguagePopup/PickALanguagePopup';


export const LearningLanguageShortcutIcon = () => {
  const dispatch = useAppDispatch();
  const pickALanguageState = useAppSelector(state => state.pickALanguage);
  const [activeLearningLanguage, setActiveLearningLanguage] = useState<string | null>(null);
  const [activeNativeLanguage, setActiveNativeLanguage] = useState<string | null>(null);
  const [quickPickLanguageOpen, setPickALanguagePopupOpen] = useState<boolean>(false);

  useEffect(() => {
    setActiveLearningLanguage(pickALanguageState.value.activeLearningLanguage);
    setActiveNativeLanguage(pickALanguageState.value.activeNativeLanguage);
  }, [pickALanguageState])

  const determineLearningLanguageShortcutIcon = () => {
    switch (activeLearningLanguage) {
      case 'english':
        return englishFlag;
      case 'french':
        return frenchFlag;
      case 'german':
        return germanFlag;
      case 'russian':
        return russianFlag;
      case 'mandarin':
        return mandarinFlag;
      default:
        return englishFlag;
    }
  }

  const togglePickALanguagePopup = () => {
    console.log('clicked togglePickALanguagePopup');
    setPickALanguagePopupOpen(!quickPickLanguageOpen);
  }

  return (
    <div className={styles.LearningLanguageShortcutIcon}>
      <div className={styles.LearningLanguageShortcutIcon_iconContainer}>
        <img onClick={() => togglePickALanguagePopup()} className={styles.LearningLanguageShortcutIcon_icon } src={determineLearningLanguageShortcutIcon()} />
      </div>
      {
        quickPickLanguageOpen && (
          <PickALanguagePopup /> 
        )
      }
    </div>
  )
}
