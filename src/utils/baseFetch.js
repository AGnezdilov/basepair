import axios from "axios";

export const baseFetch = axios.create({
  baseURL: 'https://www.alphavantage.co',
});