exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      // YOU NEED TO CHANG E THE NAME IN BOTH OF THE RETURNS //
      return knex("cars").insert([
        {
          VIN: "1FMDU74W23UC20035",
          make: "ford",
          model: "explorer",
          mileage: 321698,
          title: "clean",
          transmission: "auto"
        },
        {
          VIN: "ZHWGC5AU7CLA12275",
          make: "lamborghini",
          model: "gallardo",
          mileage: 4540,
          title: "salvage"
        }
      ]);
    });
};
