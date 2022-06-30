import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAppSelector, useAppDispatch} from '../../app/hooks';
import { getLanguagePackTopicsAsync } from '../pickALanguage/pickALanguage.slice';
import { IPickALanguageActiveLearningLanguagePackTopic } from '../pickALanguage/pickALanguageTypes';
import styles from './languageDashboard.module.scss';

export const LanguageDashboard = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  const [languageTopics, setLanguageTopics] = useState<IPickALanguageActiveLearningLanguagePackTopic[]>([]);
  const pickALanguageState = useAppSelector(state => state.pickALanguage);

  const handleClickLessonTopic = (topic: string) => {
    navigate(`/language/${pickALanguageState.value.activeLearningLanguage}/topic/${topic}`);
  };

  const handleClickTool = (tool: string) => {
    navigate(`/language/tool/${tool}`);
  };

  useEffect(() => {
    setLanguageTopics(pickALanguageState.value.activeLearningLanguagePackTopics);

  }, [pickALanguageState.value.activeLearningLanguagePackTopics]);

  useEffect(() => {
    navigate(`/language/${pickALanguageState.value.activeLearningLanguage}`);
  }, [pickALanguageState.value.activeLearningLanguage]);

  useEffect(() => {
    if(pickALanguageState.value.activeLearningLanguageCode && typeof pickALanguageState.value.activeLearningLanguageStageId === 'number') {
      dispatch(getLanguagePackTopicsAsync({languageCode: pickALanguageState.value.activeLearningLanguageCode, stageId: pickALanguageState.value.activeLearningLanguageStageId}))
    }
  }, [pickALanguageState.value.activeLearningLanguageCode, pickALanguageState.value.activeLearningLanguageStageId]);
  
  useEffect(() => {
    if(!pickALanguageState.value.activeLearningLanguage){
      navigate('/pick-a-language');
    }
    if(pickALanguageState.value.activeLearningLanguageCode && typeof pickALanguageState.value.activeLearningLanguageStageId === 'number') {
      dispatch(getLanguagePackTopicsAsync({languageCode: pickALanguageState.value.activeLearningLanguageCode, stageId: pickALanguageState.value.activeLearningLanguageStageId}))
    }
  }, []);

  return (
    <div className={styles.LanguageDashboard} >
      <div className={styles.LanguageDashboard_lessonSectionBlocks}>
        <h2>Lessons</h2>
        {
          languageTopics.map((topic) => {
            return <div className={styles.LanguageDashboard_lessonSectionBlock} onClick={() => handleClickLessonTopic(topic.slug)}>{topic.name}</div>
          })
        }
      </div>
      <div className={styles.LanguageDashboard_toolBar}>
      </div>
    </div>
  )
}