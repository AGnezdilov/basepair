import { ChartsStore } from "./charts/chartsStore";

export class RootStore {
  constructor() {
    this.chartsStore = new ChartsStore(this);
  }
}