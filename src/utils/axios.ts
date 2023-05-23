/* eslint-disable react-hooks/rules-of-hooks */
import { useAppContext } from '@/context/Appcontext';
import axios, { AxiosInstance } from 'axios';
const { state } = useAppContext();
export const api: AxiosInstance = axios.create({
  baseURL: 'https://v3.football.api-sports.io',
  headers: {
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': `${state.apiKey}`,
  },
});