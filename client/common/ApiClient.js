import axios from 'axios';

const ALL_TECH_RESOURCES_URN = '/api/techresources';

/**
 * API client that acts as a facade to request the API server.
 */
class ApiClient {

    /**
     * @constructor
     *
     * @param  {String} scheme https|http
     * @param  {String} domain
     * @param  {Number} port
     *
     * @return {ApiClient}
     */
    constructor(scheme = 'https', domain = 'localhost', port = 3000) {
        this.scheme = scheme;
        this.domain = domain;
        this.port = port;
    }

    /**
     * Mock method that simulates a GET API call and returns mock data, used for fast prototyping.
     *
     * @return {Promise|Object}
     */
    getMockResources() {
        const resources = {
          data: [
            { id: 1, title: 'Redux Official', header: 'Redux is a predictable state container for JavaScript apps', link: 'http://redux.js.org/' },
            { id: 2, title: 'React Official', header: 'A Javascript Library for Building User Interfaces', link: 'https://facebook.github.io/react/' },
            { id: 3, title: 'Webpack Official', header: 'Webpack, the Flexible module bundler', link: 'https://webpack.js.org/concepts/' }
          ],
          pagination: {}
        };

        return new Promise((resolve, reject) => {
            setTimeout(() => {
              return resolve({data: resources});
            }, 1000);
        });
    }

    /**
     * Return all technical resources paginated.
     *
     * @param  {Object}
     *
     * @return {Promise|JSON} Response JSON from API server as { data: [...], pagination: {...}}
     */
    getAllResources(pagination = {}) {
        const uri = this.getUri(ALL_TECH_RESOURCES_URN);

        return axios.get(uri);
    }

    /**
     * Get the full URN (scheme, domain, port and URI) for a given URI (eg `/api/users`).
     *
     * @param  {String} resourceUrn
     *
     * @return {String} Eg https://localhost:3000/api/users
     */
    getUri(resourceUrn = '/') {
        return this.scheme + '://' + this.domain + ':' + this.port + resourceUrn;
    }
}

export default ApiClient;
