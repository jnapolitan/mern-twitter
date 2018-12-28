import { combineReducers } from 'redux';
import session from './session_reducer';
import errorsReducer from './errors_reducer';
import tweetsReducer from './tweets_reducer';

const rootReducer = combineReducers({
    session,
    errors: errorsReducer,
    tweets: tweetsReducer
});

export default rootReducer;