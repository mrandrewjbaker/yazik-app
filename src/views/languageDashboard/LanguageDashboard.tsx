import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useAppSelector, useAppDispatch} from '../../app/hooks';
import { getLanguagePackTopicsAsync } from '../pickALanguage/pickALanguage.slice';
import { IPickALanguageActiveLearningLanguagePackTopic } from '../pickALanguage/pickALanguageTypes';
import Switch from 'react-switch';
import styles from './languageDashboard.module.scss';
import FRL_black from '../../assets/images/FRL_black.png';
import FRL_white from '../../assets/images/FRL_white.png';
import NPL_black from '../../assets/images/NPL_black.png';
import NPL_white from '../../assets/images/NPL_white.png';

export const LanguageDashboard = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  const [useFRL, setUseFRL] = useState(false);
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

  
  const offColor = "#898989";
  const offHandleColor = "#eb9a18";
  const onColor = "#898989";
  const onHandleColor = "#135dd5";
  const boxShadow = "#00000000 0px 0px 2px 3px";
  const activeBoxShadow = "#ff9933 0px 0px 2px 3px";

  return (
    <div className={styles.LanguageDashboard} >
      <div className={styles.LanguageDashboard_header}>
        <div className={styles.LangaugeDashboard_header___NPLSwitch}>
          <label className={styles.LangaugeDashboard_header___NPLSwitch___label}>
            <span>NPL vs FRL</span>
            <Switch 
              onChange={()=>setUseFRL(!useFRL)} 
              checked={useFRL} 
              onColor={onColor}
              onHandleColor={onHandleColor}
              offColor={offColor}
              offHandleColor={offHandleColor}
              boxShadow={boxShadow}
              activeBoxShadow={activeBoxShadow}
              checkedIcon={<img className={styles.LanguageDashboard_header___NPLSwitch___bgIcon} src={NPL_white} />}
              uncheckedIcon={<img className={styles.LanguageDashboard_header___NPLSwitch___bgIcon} src={FRL_white} />}
              checkedHandleIcon={<img className={styles.LanguageDashboard_header___NPLSwitch___handleIcon} src={FRL_white} />}
              uncheckedHandleIcon={<img className={styles.LanguageDashboard_header___NPLSwitch___handleIcon} src={NPL_white} />}
              height={40}
              width={100}
              handleDiameter={40}
              borderRadius={10}
              className={styles.LangaugeDashboard_header___NPLSwitch___switch}
              />
          </label>
        </div>
      </div>
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