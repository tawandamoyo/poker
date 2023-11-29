/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable("players", function(table) {
        table.increments().primary()
        table.string("username", 255).notNullable
        table.string("email", 255).notNullable
        table.string("password", 255).notNullable
        table.integer("balance")
        table.timestamp("created_at").defaultTo(knex.fn.now())
    })
    .createTable("game_tables", function(table) {
        table.increments().primary()
        table.integer("number_of_players")
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable("players")
    .dropTable("game_tables")

};


