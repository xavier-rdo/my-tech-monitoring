import React from 'react';
import PropTypes from 'prop-types';

class Error extends React.Component {
    render() {
        return (
            <p className="bg-danger text-danger notice">{this.props.message}</p>
        );
    }
}

Error.propTypes = {
    message: PropTypes.string.isRequired
};

export default Error;
