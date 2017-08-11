class Store {
  constructor() {
    this.state = {
      items: []
    };
  }

  dispatch(action) {
  }

  subscribe(handler) {
    throw new Error('Not yet implemented');
  }

  getState() {
    return this.state;
  }
}
