export interface IConversationLogItem {
  sender: string;
  message: string;
}

export interface ISpeakingBotState {
  value: {
    conversationLog: IConversationLogItem[],
    conversationUserReplyOptions: string[],
  }
  status: 'idle' | 'pending' | 'fulfilled' | 'failed' | 'updated';
}


