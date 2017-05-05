import React from 'react';
import PropTypes from 'prop-types';

const ajaxLoaderImg = require('./images/ajax-loader-long.gif');

class Homepage extends React.Component {
  componentDidMount() {
    this.props.loadData()
  }

  // @todo: move ajax loading image and error text in dedicated presentational components
  // @todo: add also some text to ajax loading image, eg <h2>Loading ...</h2>
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

Homepage.propTypes = {
    data: PropTypes.array.isRequired,
    pagination: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    hasError: PropTypes.bool.isRequired
};

export default Homepage;
