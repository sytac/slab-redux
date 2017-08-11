const initialState = {
  items: [
    { id: 1, name: 'Cheese' },
    { id: 2, name: 'Wine' },
    { id: 3, name: 'Candles' }
  ]
};

function inventoryReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      return {
        items: state.items.concat(action.item)
      };

    case 'REMOVE':
      return {
        items: state.items.filter(item => item.id !== action.id)
      };

    case 'UPDATE':
      return {
        items: state.items.map(item => {
          if (item.id === action.item.id) {
            return Object.assign({}, item, action.item);
          }

          return item;
        })
      };

    default:
      return state;
  }
}

function listReducer(state = { items: [] }, action) {
  switch (action.type) {
    case 'ADD_TO_LIST':
      return {
        items: state.items.concat(action.item)
      };

    case 'REMOVE_FROM_LIST':
      return {
        items: state.items.filter(item => item.id !== action.id)
      };

    case 'UPDATE_ON_LIST':
      return {
        items: state.items.map(item => {
          if (item.id === action.item.id) {
            return Object.assign({}, item, action.item);
          }

          return item;
        })
      };

    default:
      return state;
  }
}

const store = Redux.createStore(Redux.combineReducers({
  inventory: inventoryReducer,
  list: listReducer
}));
