import React from 'react';
import { connect } from 'react-redux';
import { createFetchHomepageResourcesAction } from '../resources/actions';
import Homepage from './Homepage';

const mapDispatchToProps = (dispatch) => {
    return {
        loadData() {
            dispatch(createFetchHomepageResourcesAction());
        }
    };
};

const mapStateToProps = (state) => {
    const { data, pagination, isFetching, hasError } = state.homepageResources;

    return {
        data,
        pagination,
        isFetching,
        hasError
    };
};

const HomepageContainer = connect(mapStateToProps, mapDispatchToProps)(Homepage);

export default HomepageContainer;
