import {
    HOMEPAGE_RESOURCES_FETCHING,
    HOMEPAGE_RESOURCES_SUCCESS,
    HOMEPAGE_RESOURCES_FAILURE
} from './actions';

const initialState = {
  data: [],
  isFetching: false,
  hasError: false,
  pagination: {
      currentPage: 0,
      pageCount: 0,
      perPage: 10
  }
};

export default function HomepageResourcesReducer (state = initialState, action) {
  switch (action.type) {
    case HOMEPAGE_RESOURCES_FETCHING:
      return Object.assign({}, state, {
        data: [],
        isFetching: true
      });
    case HOMEPAGE_RESOURCES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data,
        pagination: action.pagination
      });
    case HOMEPAGE_RESOURCES_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        hasError: true
      });
    default:
      return state
  }
}
