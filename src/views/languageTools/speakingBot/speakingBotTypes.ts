export interface IConversationLogItem {
  id: number;
  sender: string;
  message: string;
}

export interface ISpeakingBotState {
  value: {
    initialGreeting: string;
    conversationLog: IConversationLogItem[];
  }
  status: 'idle' | 'pending' | 'fulfilled' | 'failed' | 'updated';
}

export const speakingBotInitialState: ISpeakingBotState = {
  value: {
    initialGreeting:  '',
    conversationLog: [],
  },
  status: 'idle',
};
