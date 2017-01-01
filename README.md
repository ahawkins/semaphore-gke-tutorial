# Microservice Example Application

This repo contains an example microservice application with three
components. `docker-compose` coordinates the Docker containers. The
`server` container is a simple Node.js application. It accepts a POST
request to increment a counter and a GET request to retrieve the
counter. The counter is stored in redis. The `poller` continually
makes the GET request to the server to print the counter's value. The
`counter` container starts a loop makes a POST request to the server
to increment the counter with random values.

## Usage

```
docker-compose up
```
