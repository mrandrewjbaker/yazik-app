import axios from 'axios';

export async function getLanguagePackTopics(languageCode: string, stageId: number) {
  const response = await axios.post(`/api/languagepack/${languageCode}/topics/stage/${stageId}`, {});
  return response.data;
}
