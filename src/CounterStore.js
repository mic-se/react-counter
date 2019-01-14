import { observable, action, computed } from 'mobx';

class CounterStore {
  @observable count = 0;

  prevCount = 0;

  @action
  minusOperation = () => {
    if (this.count === 0) {
      return;
    }
    const res = this.count - 1;
    this.prevCount = this.count;
    this.count = res;
  };

  @action
  plusOperation = () => {
    const res = this.count + 1;
    this.prevCount = this.count;
    this.count = res;
  };

  @computed
  get difference() {
    const res = this.count - this.prevCount;
    return res > 0 ? `+${res}` : res;
  }
}

const counterStore = new CounterStore();
export default counterStore;
