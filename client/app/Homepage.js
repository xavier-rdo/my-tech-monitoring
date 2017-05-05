import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createFetchHomepageResourcesAction } from '../resources/actions';

const ajaxLoaderImg = require('./images/ajax-loader-long.gif');

// @todo: to split into a presentational component and a component container
class HomepageComponent extends React.Component {
  componentDidMount() {
    this.props.loadData()
  }

  render() {
    const { data, isFetching, hasError } = this.props;
    return (
        <div className="form-row">
            <div className="col-md-8 col-md-offset-2 text-center">
            {
                isFetching &&
                <img src={ajaxLoaderImg} />
            }
            {
                hasError && <p className="bg-danger text-danger">An error occurred during data loading.</p>
            }
            </div>
        </div>
    );
  }
}

HomepageComponent.propTypes = {
    data: PropTypes.array.isRequired,
    pagination: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    hasError: PropTypes.bool.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadData() {
      dispatch(createFetchHomepageResourcesAction());
    }
  }
}

const mapStateToProps = (state) => {
  const { data, pagination, isFetching, hasError } = state.homepageResources;

  return {
    data,
    pagination,
    isFetching,
    hasError
  };
}

const Homepage = connect(mapStateToProps, mapDispatchToProps)(HomepageComponent);

export default Homepage;
