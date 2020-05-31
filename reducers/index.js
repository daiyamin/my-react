const { combineReducers } from 'redux';
const initState = {
  loadStatus: 'loading',
  pageData: {},
};

function loadReducer (state, action) {
  switch(action) {
    case 'updateLoadStatus': 
      return {
        ...state,
        loadStatus: action.loadStatus
      }
      break;
    default:
      break;
  }
}

function dataReducer (state, action) {
  switch(action) {
    case 'updateData': 
      return {
        ...state,
        pageData: action.pageData
      }
      break;
    default:
      break;
  }
}

return combineReducers({loadReducer, dataReducer});

const thunk = store => next => action {
  if(typeof action === 'function' ) {
    action(store.dispatch, store.getState)
  }
}