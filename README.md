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
       --> ports

application --> dto

application --> use-cases

infrastructure --> clients

infrastructure --> dto

infrastructure --> rest-web

infrastructure --> services
