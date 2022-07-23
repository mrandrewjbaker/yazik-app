import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { languageListOptions } from '../../../../views/pickALanguage/pickALanguage.data';

import pickALanguageIcon from '../../../../assets/images/pickALanguage.png';
import englishIcon from '../../../../assets/images/languages/english.png';
import frenchIcon from '../../../../assets/images/languages/french.png';
import germanIcon from '../../../../assets/images/languages/german.png';
import russianIcon from '../../../../assets/images/languages/russian.png';
import mandarinIcon from '../../../../assets/images/languages/mandarin.png';

import styles from './pickALanguagePopup.module.scss';
import { PickALanguage_SetActiveLearningLanguage, PickALanguage_SetActiveNativeLanguage } from '../../../../views/pickALanguage/pickALanguage.slice';
import { useNavigate } from 'react-router';

export const PickALanguagePopup = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const pickALanguageState = useAppSelector(state => state.pickALanguage);

  const handleSelectLanguage = (language: string) => {
    dispatch(PickALanguage_SetActiveLearningLanguage(language.toLowerCase()));
    dispatch(PickALanguage_SetActiveNativeLanguage('english'));
  }
  
  const determineLanguageIcon = (language: string) => {
    console.log(language);
    switch (language) {
      case 'english':
        return englishIcon;
      case 'french':
        return frenchIcon;
      case 'german':
        return germanIcon;
      case 'russian':
        return russianIcon;
      case 'mandarin':
        return mandarinIcon;
      default:
        return pickALanguageIcon;
    }
  }


  return (
    <div className={styles.PickALanguagePopup}>
      <ul className={styles.PickALanguagePopup_list}>
        {
          languageListOptions.map(language => (
            <li key={language.slug} className={styles.PickALanguagePopup_listItem} onClick={() => handleSelectLanguage(language.slug)}>
              <img src={determineLanguageIcon(language.slug)} className={styles.PickALanguagePopup_listItem_icon} />
              {language.name}
            </li>
          ))
        }
        <li className={styles.PickALanguagePopup_listItem} onClick={() => navigate('/language-administrator')}>
          <span>Language Administrator</span>
        </li>
      </ul>
    </div>
  )
};