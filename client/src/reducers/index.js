import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
//  as create alias; avoid conflit with reducer

import PostReducer from './reducer_post';
import authReducer from './reducer_auth';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  posts: PostReducer,
  authenticated: authReducer
  // form: formReducer
});

export default rootReducer;
