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
  inventory: [
    { id: 1, name: 'Cheese' },
    { id: 2, name: 'Wine' },
    { id: 3, name: 'Candles' }
  ],
  list: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      return {
        inventory: state.inventory.concat(action.item),
        list: state.list
      };

    case 'REMOVE':
      return {
        inventory: state.inventory.filter(item => item.id !== action.id),
        list: state.list
      };

    case 'ADD_TO_LIST':
      return {
        inventory: state.inventory,
        list: state.list.concat(action.item)
      };

    case 'REMOVE_FROM_LIST':
      return {
        inventory: state.inventory,
        list: state.list.filter(item => item.id !== action.id)
      };

    default:
      return state;
  }
}

const store = new Store(reducer);
