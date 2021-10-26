import { baseFetch } from "../utils";

const getChartsData = (queryString) => (
  baseFetch.get(`/query?apikey=${process.env.VANTAGE_API_KEY}&${queryString}`)
)

export const chartsService = {
  getChartsData
};