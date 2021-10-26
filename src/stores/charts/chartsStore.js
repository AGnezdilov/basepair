import { makeIterable } from "mobx/dist/internal";

export class ChartsStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    makeIterable(this);
  }
}