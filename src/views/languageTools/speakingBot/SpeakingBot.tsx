import { useEffect, useState } from 'react';
import { interactConversationReplyAsync, interactInitialConversationAsync, pushUserReply } from './speakingBot.slice';
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
    dispatch(interactInitialConversationAsync())
  }

  const handleConversationBotReply = () => {
    console.log(conversationLog)
    dispatch(interactConversationReplyAsync(conversationLog))
  }

  const handleSelectConversationUserReplyOption = (option: string) => {
    const newConversationLogEntry = {
      sender: 'user',
      message: option,
    };
    dispatch(pushUserReply(newConversationLogEntry));
  }

  useEffect(() => {
    initializeConversation()
  }, []);

  

  useEffect(() => {
    setConversationLog(speakingBotState.value.conversationLog)

  }, [speakingBotState.value.conversationLog]);

  useEffect(() => {
    if (
      conversationLog.length >= 2
      && conversationLog[conversationLog.length - 1].sender === 'user'
    ) {
      handleConversationBotReply()
    }
  }, [conversationLog])

  return (
    <div className={styles.SpeakingBot}>
      <h2>Speaking Bot</h2>
      <div className={styles.SpeakingBot_conversationLog___container}>
        <div className={styles.SpeakingBot_conversationLog}>
          {conversationLog.map((log, index) => (
            <div key={index} className={styles.SpeakingBot_conversationLog___entryContainer}>
              <div className={styles.SpeakingBot_conversationLog___entryBubble}>
                <span className={styles.SpeakingBot_conversationLog___entryText}>{log.message}</span>
                <div className={styles.SpeakingBot_conversationLog___translationBubble}>
                  X
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.SpeakingBot_conversationUserReplyOptions}>
        {
          speakingBotState.value.conversationUserReplyOptions.map((option, index) => {
            return (
              <div key={index} className={styles.SpeakingBot_conversationUserReplyOptions___item}>
                <button className={styles.SpeakingBot_conversationUserReplyOptions___itemButton} onClick={()=> handleSelectConversationUserReplyOption(option)}>
                  <span className={styles.SpeakingBot_conversationUserReplyOptions___itemText}>{option}</span>
                </button>
              </div>
            )
            })
        }
      </div>
    </div>
  );
}