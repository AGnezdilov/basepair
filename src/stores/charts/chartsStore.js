import { makeObservable, observable, action } from "mobx";
import { chartsService } from "../../services";

export class ChartsStore {
  @observable
  chartsData = null;

  @observable
  isGetChartDataPending = true;

  constructor(rootStore) {
    this.rootStore = rootStore;
    makeObservable(this);
  }

  @action
  setIsGetChartDataPending(isPending) {
    this.isGetChartDataPending = isPending;
  }

  @action
  setChartsData(data){
    this.chartsData = data;
  }

  getChartsData = async (queryString) => {
    this.setIsGetChartDataPending(true);
    try {
      const response = await chartsService.getChartsData(queryString);

      console.log(response)
      this.setChartsData(response)
    } catch(error) {
      console.log(error)
    } finally {
      this.setIsGetChartDataPending(false);
    }
  }
}