import { FETCH_POSTS, FETCH_POST } from '../actions/index';

const INITIAL_STATE = { all: [], post: null };

const postsReducer = function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POST:
      return {...state, post: action.payload.data}
    case FETCH_POSTS:
      return {...state, all: action.payload.data};
    default:
      return state;
  }
}

export {
  postsReducer as default,
}
