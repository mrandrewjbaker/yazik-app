import styles from './languageAdministratorShortcutIcon.module.scss';

import settingsIcon from '../../../assets/images/drawing-tool.png';

export const LanguageAdministratorShortcutIcon = () => {
  return (
    <div className={styles.LanguageAdministratorShortcutIcon}>
      <div className={styles.LanguageAdministratorShortcutIcon_container}>
        <img className={styles.LanguageAdministratorShortcutIcon_icon} src={settingsIcon} />
      </div>
    </div>
  )
}