FROM postgres:9.6

COPY ./src/*.sql /docker-entrypoint-initdb.d/

RUN mkdir -p /etc/postgresql/9.6/main
RUN chmod -R 644 /etc/postgresql
RUN echo "host all  all    0.0.0.0/0  md5" >> /etc/postgresql/9.6/main/pg_hba.conf
RUN echo "listen_addresses='*'" >> /etc/postgresql/9.6/main/postgresql.conf
