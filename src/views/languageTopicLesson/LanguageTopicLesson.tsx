import { useEffect, useState } from 'react';
import { MdOutlineArrowRightAlt } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import styles from './languageTopicLesson.module.scss';
import LanguageTopicLessonExercise from './languageTopicLessonExercise/LanguageTopicLessonExercise';
import { ILanguageTopic } from './languageTopicLessonTypes';

export const LanguageTopicLesson = () => {
  const [topic, setTopic] = useState<ILanguageTopic>();
  const topicSlug = useParams().topicSlug;
  const pickALanguageState = useAppSelector(state => state.pickALanguage);
  const [steps, setSteps] = useState<number>(10);
  const [currentStep, setCurrentStep] = useState<number>(0);

  useEffect(() => {
    setTopic(pickALanguageState.value.activeLearningLanguagePackTopics.find(topic => topic.slug === topicSlug));
  }, [topicSlug]);
  return (
    <div className={styles.languageTopicLesson}>
      <div className={styles.languageTopicLesson_content}>
      {
        topic && (
          <h2>{topic?.name}</h2>
        )
      }
        <LanguageTopicLessonExercise />
      </div>
      <div className={styles.languageTopicLesson_buttonRow}>
        <button className={styles.languageTopicLesson_button}>
          <span className={styles.languageTopicLesson_button___text}>Next <MdOutlineArrowRightAlt className={styles.languageTopicLesson_button___textIcon} /></span>
        </button>
      </div>
    </div>
  )
}