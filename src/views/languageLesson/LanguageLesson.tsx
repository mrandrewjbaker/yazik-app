import { useState } from 'react';
import styles from './languageLesson.module.scss';

export const LanguageLesson = () => {
  const [blurb, setBlurb] = useState<string>('This is a blurb.');
  return (
    <div className={styles.LanguageLesson}>
      <div className={styles.LanguageLesson_contextualImage___container}>

      </div>
      <div className={styles.LanguageLesson_blurb___container}>
        {blurb}
      </div>
      <div className={styles.LanguageLesson_next___container}>
        <button className={styles.LanguageLesson_next___button}>Next</button>
      </div>
    </div>
  )
}