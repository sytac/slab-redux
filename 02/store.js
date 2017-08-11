class Store {
  constructor() {
    this.state = {
      items: []
    };
  }

  dispatch(action) {
    switch (action.type) {
      case 'ADD':
        this.state = {
          items: this.state.items.concat(action.item)
        };
        break;

      case 'REMOVE':
        this.state = {
          items: this.state.items.filter(item => item.id !== action.id)
        };
        break;
    }
  }

  subscribe(handler) {
    throw new Error('Not yet implemented');
  }

  getState() {
    return this.state;
  }
}
