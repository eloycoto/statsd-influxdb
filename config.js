{
    influxdb: {
        host: process.env.INFLUXDB_HOST || "influxdb",
        port: process.env.INFLUXDB_PORT || 8086,
        database: process.env.INFLUXDB_NAME || 'demo',
        username: process.env.INFLUXDB_USER || 'root',
        password: process.env.INFLUXDB_PASS || 'root',
        flush: {
            enable: true
        },
        proxy: {
            enable: false,
            suffix: 'raw',
            flushInterval: 1000
        }
    },
    port: 8125, // StatsD port.
    backends: ['statsd-influxdb-backend'],
    debug: true,
    legacyNamespace: false
}
