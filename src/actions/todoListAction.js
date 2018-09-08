export const TODO_LIST_DELETE = 'TODO_LIST_DELETE';

deleteTodoList: (item) => {
    return (dispatch, getState) => {
      dispatch({type: types.TODO_LIST_DELETE, payload: item});
    }
  }
