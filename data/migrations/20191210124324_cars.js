exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    // required //
    tbl
      .string("VIN", 25)
      .notNullable()
      .unique();

    tbl.string("make", 255).notNullable();

    tbl.string("model", 255).notNullable();

    tbl.integer("mileage").notNullable();
    //   not required //

    tbl.string("transmission", 15);

    tbl.string("title", 10);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
