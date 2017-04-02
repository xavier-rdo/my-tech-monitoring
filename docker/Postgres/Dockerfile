FROM postgres:latest

COPY ./src/10-create-app-database-and-user.sql /docker-entrypoint-initdb.d/10-create-app-database-and-user.sql
COPY ./src/20-create-app-schema.sql /docker-entrypoint-initdb.d/20-create-app-schema.sql
COPY ./src/30-populate-database.sql /docker-entrypoint-initdb.d/30-populate-database.sql
