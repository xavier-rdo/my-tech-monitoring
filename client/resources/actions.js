export const HOMEPAGE_RESOURCES_FETCHING = 'homepage_resources_fetching';
export const HOMEPAGE_RESOURCES_SUCCESS = 'homepage_resources_success';
export const HOMEPAGE_RESOURCES_FAILURE = 'homepage_resources_failure';

// @todo later: filter and sort params
export function createFetchHomepageResourcesAction(pagination = {}) {
    return {
        type: HOMEPAGE_RESOURCES_FETCHING,
        payload: {
            pagination: pagination
        }
    };
};

export function createHomepageResourcesSuccessAction(response) {
    return {
        type: HOMEPAGE_RESOURCES_SUCCESS,
        payload: {
            data: response.data,
            pagination: response.pagination
        }
    };
};

export function createHomepageResourcesFailureAction() {
    return {
        type: HOMEPAGE_RESOURCES_FAILURE
    }
}
