import { useNavigate } from 'react-router';
import styles from './languageDashboard.module.scss';

export const LanguageDashboard = () => {
  let navigate = useNavigate();

  const handleClickLessonSection = (topic: string) => {
    navigate(`/language/lesson/${topic}`);

  }
  return (
    <div className={styles.LanguageDashboard} >
      <div className={styles.LanguageDashboard_lessonSectionBlocks}>

        <div className={styles.LanguageDashboard_lessonSectionBlock} onClick={() => handleClickLessonSection('Welcome')}>
          <span className={styles.LanguageDashboard_lessonSection___title}>Welcome</span>
        </div>

        <div className={styles.LanguageDashboard_lessonSectionBlock}>
          <span className={styles.LanguageDashboard_lessonSection___title}>Let's go to Grandma's</span>
        </div>

        <div className={styles.LanguageDashboard_lessonSectionBlock}>
          <span className={styles.LanguageDashboard_lessonSection___title}>Vocabulary</span>
        </div>
      </div>
    </div>
  )
}