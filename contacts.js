const fs = require("node:fs").promises;
const path = require("node:path");

const contactsPath = path.resolve("./db/contacts.json");
console.log(contactsPath);

module.exports = { contactsPath };
