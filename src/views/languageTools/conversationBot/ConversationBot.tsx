import { useEffect, useState } from "react";

import styles from './conversationBot.module.scss';

export const ConversationBot: React.FC = () => {
  const [conversationLog, setConversationLog] = useState<string[]>([]);

  const runMockConversation = () => {
    setConversationLog([
      'Hello, how are you?',
      'I am good. Do you like strawberries?',
      'Yes, I do.'
    ]);
  }

  useEffect(() => {
    runMockConversation();
  }, []);

  return (
    <div className={styles.ConversationBot}>
      <h2>Conversation Bot</h2>
      <div className={styles.ConversationBot_conversationLog___container}>
        <div className={styles.ConversationBot_conversationLog}>
          {conversationLog.map((log, index) => (
            <div key={index} className={styles.ConversationBot_conversationLog___entryContainer}>
              <div className={styles.ConversationBot_conversationLog___entryBubble}>
                <span className={styles.ConversationBot_conversationLog___entryText}>{log}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.ConversationBot_input___container}>
        <input className={styles.ConversationBot_input} type="text" placeholder="Type here..." />
      </div>
    </div>
  );
}