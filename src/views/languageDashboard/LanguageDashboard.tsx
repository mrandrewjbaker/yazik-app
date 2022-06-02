import { useNavigate } from 'react-router';
import styles from './languageDashboard.module.scss';

export const LanguageDashboard = () => {
  let navigate = useNavigate();

  const handleClickLessonSection = (topic: string) => {
    navigate(`/language/lesson/${topic}`);
  };

  const handleClickTool = (tool: string) => {
    navigate(`/language/tool/${tool}`);
  };

  return (
    <div className={styles.LanguageDashboard} >
      <div className={styles.LanguageDashboard_lessonSectionBlocks}>
        <h2>Lessons</h2>
        <div className={styles.LanguageDashboard_lessonSectionBlock} onClick={() => handleClickLessonSection('Welcome')}>
          <span className={styles.LanguageDashboard_lessonSection___title}>Welcome</span>
        </div>

        <div className={styles.LanguageDashboard_lessonSectionBlock}>
          <span className={styles.LanguageDashboard_lessonSection___title}>Let's go to Grandma's</span>
        </div>

        <div className={styles.LanguageDashboard_lessonSectionBlock}>
          <span className={styles.LanguageDashboard_lessonSection___title}>Vocabulary</span>
        </div>

        <h2>Tools</h2>
        <div className={styles.LanguageDashboard_lessonSectionBlock}>
          <span className={styles.LanguageDashboard_lessonSection___title} onClick={() => handleClickTool('conversationBot')}>Conversation Bot</span>
        </div>
      </div>
    </div>
  )
}