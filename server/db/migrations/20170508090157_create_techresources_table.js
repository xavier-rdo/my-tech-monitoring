exports.up = function(knex, Promise) {

    return knex.schema.createTable('model.techresources', (table) => {

    table.increments();
    table.string('title', 255).notNullable();
    table.string('header', 512);
    table.string('link', 512).notNullable();
    table.jsonb('tags');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());

    table.index(['title'], 'app_techresources_title_idx');
    table.index(['tags'], 'app_techresources_tags_idx', 'GIN');
    table.index(['created_at'], 'app_techresources_created_at_idx');
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('model.techresources');
};
