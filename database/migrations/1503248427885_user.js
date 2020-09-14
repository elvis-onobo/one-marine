"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserSchema extends Schema {
  up() {
    this.create("users", (table) => {
      table.increments();
      table.string("firstname", 254).notNullable();
      table.string("lastname", 254).notNullable();
      table.string("email", 254).notNullable().unique();
      table.string("phone", 254).notNullable().unique();
      table.string("address", 254);
      table.string("next_of_kin", 254);
      table.string("next_of_kin_phone", 254);
      table.boolean("verified").defaultTo(0);
      table.integer("is_admin").defaultTo(0);
      table.string("key", 10).notNullable().unique();
      table.string("password", 60).notNullable();
      table.timestamp("created_at").defaultTo(this.fn.now());
      table.timestamp("updated_at").defaultTo(this.fn.now());
    });
  }

  down() {
    this.drop("users");
  }
}

module.exports = UserSchema;
