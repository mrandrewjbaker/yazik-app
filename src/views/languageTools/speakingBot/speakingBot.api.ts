import axios from 'axios';
import { IConversationLogItem } from './speakingBotTypes';

export async function interactInitialConversation() {
  const body = {
    initialize: true,
  };
  const response = await axios.post('/api/interact/conversation', body);
  return response.data;
}

export async function interactConversationReply(conversationLog: IConversationLogItem[]) {
  const body = {
    initialize: false,
    conversationLog,
  };
  const response = await axios.post('/api/interact/conversation', body);
  return response.data;
}