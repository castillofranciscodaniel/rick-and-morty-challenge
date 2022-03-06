# rick-and-morty-challenge

## Get started

- Install docker with docker-compose

## Features

- Get challenge result

## Run application

```bash
docker-compose up prod
```

## Run test with coverage

```bash
npm run test:cov
```

## Execute challenge

curl --location --request GET 'http://localhost:3000'  


## Architecture Hexagonal

domain --> models
domain --> ports

application --> dto
application --> use-cases

infrastructure --> clients
infrastructure --> dto
infrastructure --> rest-web
infrastructure --> data-in-memory

La idea de como esta maquetado el proyecto, es que la capa aplicación solo dependa
del domain y las interfaces que el mismo provee con sus puertos.

La infraestructura es la encargada de implementar esos ports en sus adaptadores.

De este modo, aplicación no conoce nada de como infraestructura ha implementado
estos puertos.
