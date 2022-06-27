import axios from 'axios';

export async function getLanguagePackTopics(languageCode: string, stageId: number) {
  const response = await axios.get(`/api/languagepack/${languageCode}/stage/${stageId}/topics`);
  return response.data;
}
