import styles from './userProfileShortcutList.module.scss';

export const UserProfileShortcutList: React.FC = () => {
  return (
    <div className={styles.UserProfileShortcutList}>
      <ul className={styles.UserProfileShortcutList_list}>
        <li className={styles.UserProfileShortcutList_listItem}>
          <span>My Account</span>
        </li>
        <li className={styles.UserProfileShortcutList_listItem}>
          <span>Extras</span>
        </li>
        <li className={styles.UserProfileShortcutList_listItem}>
          <span>Language Administator</span>
        </li>
      </ul>
    </div>
  )
}
