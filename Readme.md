Statsd-influxbd
===============

This is a container to send the statsd graphs to influxdb backend

### Setup

    docker run -p 7474:7474 eloycoto/statsd-influxdb

#### Env Varaibles:
You can use the following env variables:

- **INFLUXDB_HOST**: influxdb
- **INFLUXDB_PORT**: 8086
- **INFLUXDB_NAME**: demo
- **INFLUXDB_USER**: root
- **INFLUXDB_PASS**: root
