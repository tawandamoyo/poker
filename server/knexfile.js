module.exports = {
    "development": {
        client: 'pg',
        connection: {
            "database": "poker_game",
            "user": "tawanda"
        },
        migrations: {
            "directory": "./knex/migrations"
        },
        seeds: {
            "directory": "./knex/seeds"
        }
    }
}

