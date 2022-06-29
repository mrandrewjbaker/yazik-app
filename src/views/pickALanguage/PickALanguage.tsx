
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
import { PickALanguage_SetActiveLearningLanguage, PickALanguage_SetActiveLearningLanguageCode, PickALanguage_SetActiveNativeLanguage } from './pickALanguage.slice';

export const PickALanguage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSelectLanguage = (languageCode: string, languageSlug: string,) => {
    dispatch(PickALanguage_SetActiveLearningLanguageCode(languageCode));
    dispatch(PickALanguage_SetActiveLearningLanguage(languageSlug));
    dispatch(PickALanguage_SetActiveNativeLanguage('english'));
    navigate(`/language/${languageSlug.toLowerCase()}`);
  }

  const determineLanguageIcon = (languageCode: string) => {
    switch (languageCode) {
      case 'enus':
        return englishIcon;
      case 'fr':
        return frenchIcon;
      case 'de':
        return germanIcon;
      case 'ru':
        return russianIcon;
      case 'zhcn':
        return mandarinIcon;
      default:
        return pickALanguageIcon;
    }
  }

  return (
    <div className={style.PickALanguage}>
      <div className={style.PickALanguage_iconContainer}>
        <img src={pickALanguageIcon} />
      </div>
      <h1 className={style.LanguagePickerHeader}>Pick a Language</h1>
      <ul className={style.LanguagePickerBlocks}>
      {
        languageListOptions.map((language) => (
          <li key={language.slug} className={style.LanguagePickerBlock} onClick={() => handleSelectLanguage(language.code, language.slug)}>
            <img src={determineLanguageIcon(language.code)} /> <p>{language.name}</p>
          </li>
        ))
      }
      </ul>
    </div>
  )
}