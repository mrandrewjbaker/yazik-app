import { useState } from 'react';

import styles from './userProfileShortcutIcon.module.scss';

import avatarIcon from '../../../assets/images/user.png';
import { UserProfileShortcutList } from './UserProfileShortcutList/UserProfileShortcutList';


export const UserProfileShortcutIcon: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.UserProfileShortcutIcon}>
      <div className={styles.UserProfileShortcutIcon_container}>
        <img src={avatarIcon} alt="avatar" className={styles.UserProfileShortcutIcon_icon} onClick={() => setIsOpen(!isOpen)} />
      </div>
      {
        isOpen && (
          <UserProfileShortcutList />
        )
      }
    </div>
  )
}