import { baseFetch } from "../utils";

const getChartsData = (queryString) => (
  baseFetch.get(`/query?apikey=${process.env.REACT_APP_VANTAGE_API_KEY}&${queryString}`)
)

export const chartsService = {
  getChartsData
};