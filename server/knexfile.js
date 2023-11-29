const secrets = require("../secrets.json")

module.exports = {
    "development": {
        client: 'pg',
        connection: {
            "database": "poker_game",
            "user": "tawanda",
            "password": secrets.db_password
        },
        migrations: {
            "directory": "./knex/migrations"
        },
        seeds: {
            "directory": "./knex/seeds"
        }
    }
}

