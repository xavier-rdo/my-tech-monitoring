import axios from 'axios';

const ALL_TECH_RESOURCES_URN = '/api/techresources';

class ApiClient {

    constructor(domain = 'localhost', port = 3000) {
        this.domain = domain;
        this.port = port;
    }

    /**
     * @return {Promise}
     */
    getMockResources() {
        const resources = [
          { id: 1, title: 'Redux Official', header: 'Redux is a predictable state container for JavaScript apps', link: 'http://redux.js.org/' },
          { id: 2, title: 'React Official', header: 'A Javascript Library for Building User Interfaces', link: 'https://facebook.github.io/react/' },
          { id: 3, title: 'Webpack Official', header: 'Webpack, the Flexible module bundler', link: 'https://webpack.js.org/concepts/' }
        ];

        return new Promise((resolve, reject) => {
            setTimeout(() => {
              return resolve(resources);
            }, 1000);
        });
    }

    getAllResources(pagination = {}) {
        uri = this.getUri(ALL_TECH_RESOURCES_URN);

        return axios.get(uri);
    }

    getUri(resourceUrn = '/') {
        return this.domain + ':' + this.port + resourceUrn;
    }
}

export default ApiClient;
