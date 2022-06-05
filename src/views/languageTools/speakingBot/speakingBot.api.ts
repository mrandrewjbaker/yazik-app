import axios from 'axios';

export async function getInitialGreeting(language: string) {
  const body = {
    targetLanguage: language,
  };
  const response = await axios.post('/api/generate/greeting', body);
  return response.data;
}