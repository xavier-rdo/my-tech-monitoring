import React from 'react';
import PropTypes from 'prop-types';
import Error from '../common/components/Error';
import LoadingGroup from '../common/components/LoadingGroup';

class Homepage extends React.Component {
  componentDidMount() {
    this.props.loadData()
  }

  render() {
    const { data, isFetching, hasError } = this.props;
    return (
        <div className="form-row">
            <div className="col-md-8 col-md-offset-2 text-center">
            {
                isFetching && <LoadingGroup />
            }
            {
                hasError && <Error message="An error occurred during data loading." />
            }
            </div>
        </div>
    );
  }
}

Homepage.propTypes = {
    data: PropTypes.array.isRequired,
    pagination: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    hasError: PropTypes.bool.isRequired
};

export default Homepage;
