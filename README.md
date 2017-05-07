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

## Postgres database bootstrapping through Docker

This project embeds a [`Dockerfile`](docker/Postgres/Dockerfile) that creates a new Docker image based on the latest `Postgres` official image and runs some bootstrapping SQL scripts (from the [docker/Postgres/src](docker/Postgres/src) folder) that create :

* an `app` user (password `app`)
* an `app` database
* a `model` schema
* some tables in `model` schema populated with some initial data

### Usage:

Ref.: https://docs.docker.com/engine/examples/postgresql_service/

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

    cd docker/Postgres
    ## Build the image:
    docker build -t my-tech-monitoring-db .
    ## Start the database container as daemon and map Postgres' port 5432 to host:
    docker run --name my-tech-monitoring-db-server -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d my-tech-monitoring-db
    ## [Optional, for demo purposes only] Start the container once again in TTY mode in order to connect to the database through PSQL :
    docker run -it --rm --name my-tech-monitoring-db-cli --link my-tech-monitoring-db-server[:<alias>] my-tech-monitoring-db /bin/bash
    ## Nota: Password for `postgres` role is `postgres`
    root@0529614c4b44:/# psql -h $PG_PORT_5432_TCP_ADDR -p $PG_PORT_5432_TCP_PORT -d app -U postgres --password
    ## Show `model.techresources` table's structure :
    $ postgres=# \d+ model.techresources;
    ## Show `model.techresources` table's content : 
    $ postgres=# select * from model.techresources;
```
