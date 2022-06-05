import { useEffect, useState } from 'react';
import { getInitialGreetingAsync } from './speakingBot.slice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import styles from './speakingBot.module.scss';
import { IConversationLogItem } from './speakingBotTypes';

export const SpeakingBot: React.FC = () => {
  const dispatch = useAppDispatch();
  const speakingBotState = useAppSelector(state => state.speakingBot);
  const pickALanguageState = useAppSelector(state => state.pickALanguage);
  const [conversationLog, setConversationLog] = useState<IConversationLogItem[]>([]);
  const [initialGreeting, setInitialGreeting] = useState<string | null>(null);

  const initializeConversation = () => {
    if(pickALanguageState.value.activeLearningLanguage) {
      dispatch(getInitialGreetingAsync(pickALanguageState.value.activeLearningLanguage))
    }
  }
  const runMockConversation = () => {
    setConversationLog([]);
  }

  useEffect(() => {
    runMockConversation();
  }, []);

  useEffect(() => {

    setInitialGreeting(speakingBotState.value.initialGreeting);
  }, [speakingBotState.value.initialGreeting]);

  useEffect(() => {
    if(!initialGreeting)
      return;
    const greetingMessage = {
      id: 1,
      sender: 'bot',
      message: initialGreeting,
    }
    const newConversationLog = [...conversationLog, greetingMessage];
    setConversationLog(newConversationLog);
  }, [initialGreeting]);

  return (
    <div className={styles.SpeakingBot}>
      <h2>Speaking Bot</h2>
      <div className={styles.SpeakingBot_conversationLog___container}>
        <div className={styles.SpeakingBot_conversationLog}>
          {conversationLog.map((log, index) => (
            <div key={index} className={styles.SpeakingBot_conversationLog___entryContainer}>
              <div className={styles.SpeakingBot_conversationLog___entryBubble}>
                <span className={styles.SpeakingBot_conversationLog___entryText}>{log.message}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.SpeakingBot_input___container}>
            <button onClick={() => initializeConversation()}>Start</button>
      </div>
    </div>
  );
}