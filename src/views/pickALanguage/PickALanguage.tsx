
import { MouseEventHandler, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';

import { languageListOptions } from './pickALanguage.data';
import style from './pickALanguage.module.scss';
import pickALanguageIcon from '../../assets/images/pickALanguage.png';
import englishIcon from '../../assets/images/languages/english.png';
import frenchIcon from '../../assets/images/languages/french.png';
import germanIcon from '../../assets/images/languages/german.png';
import russianIcon from '../../assets/images/languages/russian.png';
import mandarinIcon from '../../assets/images/languages/mandarin.png';
import { PickALanguage_SetActiveLearningLanguage, PickALanguage_SetActiveNativeLanguage } from './pickALanguage.slice';

export const PickALanguage = () => {
  const dispatch = useAppDispatch();

  let navigate = useNavigate();
  const [languagesList, setLanguagesList] = useState<string[]>([]);

  const handleSelectLanguage = (language: string) => {
    dispatch(PickALanguage_SetActiveLearningLanguage(language.toLowerCase()));
    dispatch(PickALanguage_SetActiveNativeLanguage('english'));
    navigate(`/language/${language.toLowerCase()}`);
  }

  const determineLanguageIcon = (language: string) => {
    console.log(language);
    switch (language) {
      case 'English':
        return englishIcon;
      case 'French':
        return frenchIcon;
      case 'German':
        return germanIcon;
      case 'Russian':
        return russianIcon;
      case 'Mandarin':
        return mandarinIcon;
      default:
        return pickALanguageIcon;
    }
  }

  useEffect(() => {
    setLanguagesList(languageListOptions);
  }, []);

  return (
    <div className={style.PickALanguage}>
      <div className={style.PickALanguage_iconContainer}>
        <img src={pickALanguageIcon} />
      </div>
      <h1 className={style.LanguagePickerHeader}>Pick a Language</h1>
      <ul className={style.LanguagePickerBlocks}>
      {
        languagesList.map((language) => (
          <li key={language} className={style.LanguagePickerBlock} onClick={() => handleSelectLanguage(language)}>
            <img src={determineLanguageIcon(language)} /> <p>{language}</p>
          </li>
        ))
      }
      </ul>
    </div>
  )
}