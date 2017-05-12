import React from 'react';
import PropTypes from 'prop-types';
import Error from '../common/components/Error';
import LoadingGroup from '../common/components/LoadingGroup';

class Homepage extends React.Component {
    componentDidMount() {
        this.props.loadData();
    }

    render() {
        const { data, isFetching, hasError } = this.props;
        return (
        <div>
            <h1 className="text-center">
                Technical resources
            </h1>
            <div className="text-center">
            {
                isFetching && <LoadingGroup />
            }
            {
                hasError && <Error message="An error occurred during data loading." />
            }
            </div>
            <div className="tech-resource-grid">
                { this.renderResources(data) }
            </div>
        </div>
        );
    }

    renderResources(resources = []) {
        return resources.map(function (resource) {
            return (
            <div className="tech-resource-item" key={ resource.id }>
                <h2>{ resource.title }</h2>
                <div className="tech-resource-item-body">
                    <p>{ resource.link }</p>
                </div>
            </div>
            );
        });
    }
}

Homepage.propTypes = {
    data: PropTypes.array.isRequired,
    pagination: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    hasError: PropTypes.bool.isRequired
};

export default Homepage;
