# Docker

```sh
$ APP_VERSION=$(node -e "console.log(require('./package.json').version);")
$ docker build \
  -f dockerfiles/Dockerfile . \
  -t vs-consumidor/infoenter:"$APP_VERSION"
```

```sh
$ docker image list
REPOSITORY                  TAG       IMAGE ID       CREATED         SIZE
vs-consumidor/infoenter   0.0.1     6770c550a346   7 minutes ago   313MB
```

```sh
$ docker run vs-consumidor/infoenter:0.0.1 ls -la /app/
$ docker run -d -p 8080:3000 vs-consumidor/infoenter:0.0.3
$ docker logs f6c230f29ec...
$ docker kill f6c230f29ec...
```

go to http://localhost:8080

or

Running the application with docker-compose:

```sh
$ docker-compose -f dockerfiles/docker-compose.yml up --build
```
