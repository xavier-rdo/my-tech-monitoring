import { put, takeLatest } from 'redux-saga/effects';

import ApiClient from '../common/ApiClient';

import {
    HOMEPAGE_RESOURCES_FETCHING,
    HOMEPAGE_RESOURCES_SUCCESS,
    HOMEPAGE_RESOURCES_FAILURE,
    createHomepageResourcesSuccessAction,
    createHomepageResourcesFailureAction
} from './actions';

// @todo: delegate apiClient instantiation to a dedicated service (relying on a config that holds constructor params)
// @see https://github.com/lorenwest/node-config
// @see https://github.com/marmelab/javascript-boilerplate/tree/master/config
const apiClient = new ApiClient('http', 'localhost', 3000);

function* fetchHomepageResources (action) {
    try {
    // const response = yield apiClient.getMockResources({});
        const response = yield apiClient.getAllResources({});
    // @todo: handle API response with code != 200
        yield put(createHomepageResourcesSuccessAction(response.data));
    } catch (e) {
        yield put(createHomepageResourcesFailureAction());
    }
}

export function* homepageResourcesSaga() {
    yield takeLatest(HOMEPAGE_RESOURCES_FETCHING, fetchHomepageResources);
}
