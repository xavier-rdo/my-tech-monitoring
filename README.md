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

This project embeds a [`Dockerfile`](docker/Postgres/Dockerfile) that creates a new Docker image based on the `Postgres:9.6` official image and runs some bootstrapping SQL scripts (from the [docker/Postgres/src](docker/Postgres/src) folder) that create :

* an `app` user (password `app`)
* an `app` database
* a `model` schema
* some tables in `model` schema populated with some initial data

>In a foreseeable future, DB structure and seeding may be managed by a migration tool (such as Knex, for instance) to ease DB maintainance for various environments (dev, prod, testing, etc.)

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
    ## Nota: Password for `postgres` role is `postgres`
    docker run -it --rm --name my-tech-monitoring-db-cli --link my-tech-monitoring-db-server:db-server my-tech-monitoring-db psql -h db-server -d app -U postgres
    ## Show `model.techresources` table's structure :
    $ postgres=# \d+ model.techresources;
    ## Show `model.techresources` table's content : 
    $ postgres=# select * from model.techresources;
```

### Mapping a local volume to Postgres data folder

```shell
    # cd to project's root directory:
    cd <PROJECT_ROOT_DIR>
    mkdir -P var/pgdata
```

Then, when running the container (`docker run` command), add the following option:

```shell
    -v ${PWD}/var/pgdata:/var/lib/postgresql/data
```
