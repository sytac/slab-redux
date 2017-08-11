class Store {

  constructor(reducer) {
    this.subscribers = [];
    this.reducer = reducer;
  }

  getState() {
    return this.state;
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action);

    this.subscribers.forEach(subscriber => subscriber());
  }

  subscribe(handler) {
    this.subscribers.push(handler);
  }
}

const initialState = {
  items: [
    { id: 1, name: 'Cheese' },
    { id: 2, name: 'Wine' },
    { id: 3, name: 'Candles' }
  ]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      return {
        items: state.items.concat(action.item)
      };

    case 'REMOVE':
      return {
        items: state.items.filter(item => item.id !== action.id)
      };

    default:
      return state;
  }
}

const store = new Store(reducer);
