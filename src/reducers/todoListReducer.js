import * as types from '../actions/todoListAction';

const initialState = {

}

export default function folioReducer  (state = initialState.folio, action) {
  switch (action.type) {
    case types.TODO_LIST_DELETE:
      return {...state, folioList:action.payload.folios};
    default:
      return state;
  }
}
