import axios from "axios";

export const apiSupabase = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  headers: {
    apiKey: process.env.EXPO_PUBLIC_API_KEY
  }
});
