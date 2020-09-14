"use strict";

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Database = use("Database");
const User = use("App/Models/User");

const password = "forthmabel";

const userData = [
  {
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
    password: password,
  },

  {
    firstname: "El",
    lastname: "Onobo",
    email: "rapknowlogy@gmail.com",
    address: "16 Ebun Oluwa Street, Bariga, Lagos",
    phone: "08022359269",
    key: "XYCBVag7b",
    verified: true,
    next_of_kin: "Faith Onobo",
    next_of_kin_phone: "08032843866",
    password: password,
  },
];

class UserSeeder {
  async run() {
    await InsertUsers();
  }
}

module.exports = UserSeeder;

async function InsertUsers() {
  await Database.raw("SET FOREIGN_KEY_CHECKS = 0;");
  await Database.truncate("users");

  for (let user of userData) {
    const newUser = new User();

    newUser.firstname = user.firstname;
    newUser.lastname = user.lastname;
    newUser.email = user.email;
    newUser.address = user.address;
    newUser.phone = user.phone;
    newUser.key = user.key;
    newUser.verified = user.verified;
    newUser.next_of_kin = user.next_of_kin;
    newUser.next_of_kin_phone = user.next_of_kin_phone;
    newUser.password = user.password;
    newUser.is_admin = user.is_admin;

    await newUser.save();
  }

  await Database.raw("SET FOREIGN_KEY_CHECKS = 1;");
}
