import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { languageListOptions } from '../../../../views/pickALanguage/pickALanguage.data';

import pickALanguageIcon from '../../../../assets/images/pickALanguage.png';
import englishIcon from '../../../../assets/images/languages/english.png';
import frenchIcon from '../../../../assets/images/languages/french.png';
import germanIcon from '../../../../assets/images/languages/german.png';
import russianIcon from '../../../../assets/images/languages/russian.png';
import mandarinIcon from '../../../../assets/images/languages/mandarin.png';

import styles from './quickPickLanguage.module.scss';
import { PickALanguage_SetActiveLearningLanguage, PickALanguage_SetActiveNativeLanguage } from '../../../../views/pickALanguage/pickALanguage.slice';

export const QuickPickLanguage = () => {
  const dispatch = useAppDispatch();

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
    <div className={styles.QuickPickLanguage}>
      <ul className={styles.QuickPickLanguage_list}>
        {
          languageListOptions.map(language => (
            <li key={language.value} className={styles.QuickPickLanguage_listItem} onClick={() => handleSelectLanguage(language.value)}>
              <img src={determineLanguageIcon(language.value)} className={styles.QuickPickLanguage_listItem_icon} />
              {language.name}
            </li>
          ))
        }
      </ul>
    </div>
  )
};