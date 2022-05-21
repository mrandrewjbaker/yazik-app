
import englishFlag from '../../../assets/images/languages/english.png';
import frenchFlag from '../../../assets/images/languages/french.png';
import germanFlag from '../../../assets/images/languages/german.png';
import russianFlag from '../../../assets/images/languages/russian.png';
import mandarinFlag from '../../../assets/images/languages/mandarin.png';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useEffect, useState } from 'react';
import styles from './learningLanguageFlag.module.scss';


export const LearningLanguageFlag = () => {
  const dispatch = useAppDispatch();
  const pickALanguageState = useAppSelector(state => state.pickALanguage);
  const [activeLearningLanguage, setActiveLearningLanguage] = useState<string | null>(null);
  const [activeNativeLanguage, setActiveNativeLanguage] = useState<string | null>(null);

  useEffect(() => {
    setActiveLearningLanguage(pickALanguageState.value.activeLearningLanguage);
    setActiveNativeLanguage(pickALanguageState.value.activeNativeLanguage);
  }, [pickALanguageState])

  const determineLearningLanguageFlag = () => {
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

  return (
    <div className={styles.LearningLanguageFlag}>
      <div className={styles.LearningLanguageFlag_iconContainer}>
        <img className={styles.LearningLanguageFlag_icon } src={determineLearningLanguageFlag()} />
      </div>
    </div>
  )
}
