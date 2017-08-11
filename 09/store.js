function githubReducer(state = { repositories: [], fetching: false, error: null, page: 1 }, action) {
  switch (action.type) {
    case 'REQUEST_START':
      return Object.assign({}, state, { fetching: true });
    case 'REQUEST_SUCCESS':
      return Object.assign({}, state, {
        fetching: false,
        repositories: state.repositories.concat(action.body),
        error: null,
        page: state.page + 1,
      });
    case 'REQUEST_FAILED':
      return Object.assign({}, state, {
        fetching: false,
        error: action.error,
      });
    default:
      return state;
  }
}

const store = Redux.createStore(Redux.combineReducers({
  github: githubReducer,
}), Redux.applyMiddleware(ReduxThunk.default));
