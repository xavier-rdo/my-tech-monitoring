exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('model.techresources').del()
    .then(function () {
        // Inserts seed entries
        return knex('model.techresources').insert([
            {
                title: 'Redux Official',
                header: 'Redux is a predictable state container for JavaScript apps',
                link: 'http://redux.js.org/',
                tags: JSON.stringify(['react','javascript','redux','es6'])
            },
            {
                title: 'React Official',
                header: 'A Javascript Library for Building User Interfaces',
                link: 'https://facebook.github.io/react/',
                tags: JSON.stringify(['react','javascript','es6'])
            },
            {
                title: 'Webpack Official',
                header: 'Webpack, the Flexible module bundler',
                link: 'https://webpack.js.org/concepts/',
                tags: JSON.stringify(['es6','javascript'])
            },
        ]);
    });
};
