import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import UserReducer from './users/reducer';
import HomepageResourcesReducer from './resources/homepageResourcesReducer';

const rootReducer = combineReducers({
    user: UserReducer,
    homepageResources: HomepageResourcesReducer,
    form: formReducer
});

export default rootReducer;
