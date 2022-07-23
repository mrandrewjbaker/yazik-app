import axios from 'axios';

export async function login(username: string, password: string) {
  const response = await axios.post('/api/v1/users/login', { username, password });
  return response.data;
}