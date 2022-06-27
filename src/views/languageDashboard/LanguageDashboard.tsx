import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import styles from './languageDashboard.module.scss';

export const LanguageDashboard = () => {
  let navigate = useNavigate();
  const [languageTopics, setLanguageTopics] = useState<string[]>([]);

  const handleClickLessonTopic = (topic: string) => {
    navigate(`/language/lesson/${topic}`);
  };

  const handleClickTool = (tool: string) => {
    navigate(`/language/tool/${tool}`);
  };

  useEffect(() => {
    console.log('LanguageDashboard');
  }, [])

  return (
    <div className={styles.LanguageDashboard} >
      <div className={styles.LanguageDashboard_lessonSectionBlocks}>
        <h2>Lessons</h2>
        
        <div className={styles.LanguageDashboard_lessonSectionBlock} onClick={() => handleClickLessonTopic('Welcome')}>
          <span className={styles.LanguageDashboard_lessonSection___title}>Welcome</span>
        </div>
      </div>
    </div>
  )
}