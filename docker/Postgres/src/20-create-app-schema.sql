\c app

CREATE SCHEMA model;

CREATE TABLE model.techresources (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    baseline VARCHAR(512),
    link VARCHAR(512) NOT NULL,
    tags TEXT[],
    created_at DATE NOT NULL default current_date,
    updated_at DATE NOT NULL default current_date
);

CREATE INDEX app_techresources_title_idx ON model.techresources (title);
CREATE INDEX app_techresources_tags_idx ON model.techresources USING GIN(tags);
CREATE INDEX app_techresources_created_at_idx ON model.techresources (created_at);
