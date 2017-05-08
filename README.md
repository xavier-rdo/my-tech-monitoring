# my-tech-monitoring

Technical monitoring - Manage your technical ressources from the Web 

This Web app is based on the following technologies and patterns:

* Postgres
* React & Redux
* Node.js & Express 
* REST API
* Docker (for storage)
* Javascript modern tooling (Webpack, Babel, etc.)
* JWT (JSON Web Token)

>:warning: This app is not perfect in many respects. I use it as an experimentation field for my training in technologies and concepts quite new for me (Single Page App, Server Side Rendering, ES6, React/Redux, Node/Express, Docker, Webpack, etc.)

## Table of content

* [Starting the Postgres database](#postgres)
* [Running DB migrations and seeders](#migrations)

## <a name="postgres"></a> Starting the Postgres database (through Docker)

This project embeds a [`Dockerfile`](docker/Postgres/Dockerfile) that creates a new Docker image based on the `Postgres:9.6` official image and runs some bootstrapping SQL scripts (from the [docker/Postgres/src](docker/Postgres/src) folder). These scripts execute the following commands during container build :

* create an `app` DB user (password `app`)
* create an `app` database
* create an `app_test` database
* create a `model` schema in each database
* grant all permissions to `app` user for each database

### Build image and run the DB container:

Ref.: https://docs.docker.com/engine/examples/postgresql_service/

> :warning: The container maps the local `var/pgdata` folder to container's data folder. You may have to run the following command before running the container:

```shell
    ## cd to project's root directory:
    cd <PROJECT_ROOT_DIR>
    mkdir -p var/pgdata
```

* Build the Postgres DB image: 

```shell
    ## Change directory where the Postgres Dockerfile is:
    cd docker/Postgres
    ## Build the image:
    docker build -t my-tech-monitoring-db .
```

* Start the DB container : `npm run start-db`

### Usage:

Here are some useful commands for Docker & Postgres (as a reminder) :

```shell

    #############
    ## Reminder #
    #############
    ## List Docker images:
    docker images
    ## Remove an image:
    docker rmi <imageId>
    ## List all Docker containers:
    docker ps -a
    ## List all started containers:
    docker ps
    ## Remove a container :
    docker rm <containerId>
    ## Show logs for a given container :
    docker logs <containerId>
    ## End of reminder

    ## Start the database container as daemon:
    npm run start-db
    ## [Optional, for demo purposes only] Start the container once again in TTY mode in order to connect to the database through PSQL :
    ## Nota: Password for `postgres` role is `postgres`
    docker run -it --rm --name my-tech-monitoring-db-cli --link my-tech-monitoring-db-server:db-server my-tech-monitoring-db psql -h db-server -d app -U postgres
    ## List tables (relations) in `model` schema :
    $ postgres=# \dt model.*
    ## Show `model.techresources` table's structure :
    $ postgres=# \d+ model.techresources
    ## Show `model.techresources` table's content : 
    $ postgres=# select * from model.techresources;
```

## <a name="migrations"></a> Running DB migrations and seeders

```shell
    ## Running migrations
    ./node_modules/.bin/knex migrate:latest --env <development|test>

    ## Running seeders (fixtures)
    ./node_modules/.bin/knex seed:run --env <development|test>
```
