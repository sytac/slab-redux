const initialState = [
  { id: 1, name: 'Cheese' },
  { id: 2, name: 'Wine' },
  { id: 3, name: 'Candles' }
];

function inventoryReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      return state.concat(action.item);
    case 'REMOVE':
      return state.filter(item => item.id !== action.id);
    case 'UPDATE':
      return state.map(item => {
        if (item.id === action.item.id) {
          return Object.assign({}, item, action.item);
        }
        return item;
      });
    default:
      return state;
  }
}

function listReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_LIST':
      return state.concat(action.id);
    case 'REMOVE_FROM_LIST':
      return state.filter(id => id !== action.id);
    default:
      return state;
  }
}

const store = Redux.createStore(Redux.combineReducers({
  inventory: inventoryReducer,
  list: listReducer,
}));
