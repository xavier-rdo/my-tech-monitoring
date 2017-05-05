import React from 'react';

const ajaxLoaderImg = require('../../app/images/ajax-loader-long.gif');

class LoadingImage extends React.Component {
    render() {
        return (
            <img src={ajaxLoaderImg} />
        );
    }
}

export default LoadingImage;
