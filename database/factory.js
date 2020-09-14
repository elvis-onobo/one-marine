"use strict";

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

Factory.blueprint("App/Models/User", async () => {
  return {
    firstname: "Elvis",
    lastname: "Onobo",
    email: "elvis.onobo@gmail.com",
    address: "16 Ebun Oluwa Street, Bariga, Lagos",
    phone: "08039101861",
    key: "XYCBVag7Y",
    verified: true,
    is_admin: 1,
    next_of_kin: "Faith Onobo",
    next_of_kin_phone: "08032843866",
    password: await Hash.make("forthmabel"),
  };
});
