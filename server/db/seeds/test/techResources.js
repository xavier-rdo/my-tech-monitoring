exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('model.techresources').del()
    .then(function () {
        // Inserts seed entries
        return knex('model.techresources').insert({
            title: 'myTitle',
            header: 'myHeader',
            link: 'http://my-link.org/',
            tags: JSON.stringify(['javascript','es6'])
        });
    });
};
