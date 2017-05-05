import React from 'react';

import LoadingImage from './LoadingImage';
import LoadingText from './LoadingText';

class LoadingGroup extends React.Component {
    render() {
        return (
            <div>
                <LoadingText />
                <LoadingImage />
            </div>
        );
    }
}

export default LoadingGroup;
