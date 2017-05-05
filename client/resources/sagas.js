import { put, takeLatest } from 'redux-saga/effects';

import ApiClient from '../common/ApiClient';

import {
    HOMEPAGE_RESOURCES_FETCHING,
    HOMEPAGE_RESOURCES_SUCCESS,
    HOMEPAGE_RESOURCES_FAILURE,
    createHomepageResourcesSuccessAction,
    createHomepageResourcesFailureAction
} from './actions';

const apiClient = new ApiClient('localhost', 3000);

function* fetchHomepageResources (action) {
  try {
    const data = yield apiClient.getMockResources();
    yield put(createHomepageResourcesSuccessAction(data));
  } catch (e) {
    yield put(createHomepageResourcesFailureAction());
  }
}

export function* homepageResourcesSaga() {
    yield takeLatest(HOMEPAGE_RESOURCES_FETCHING, fetchHomepageResources);
}
