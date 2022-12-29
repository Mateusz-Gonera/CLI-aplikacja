const fs = require("node:fs").promises;
const path = require("node:path");

const contactsPath = path.resolve("./db/contacts.json");

module.exports = { contactsPath };

const fetchContacts = async () => {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts);
};

const pushContacts = async (contacts) => {
  const stringifyContacts = JSON.stringify(contacts);
  await fs.writeFile(contactsPath, stringifyContacts);
};

const addContact = async (name, email, phone) => {
  const contacts = await fetchContacts();
  const newContact = { id: `${contacts.length + 1}`, name, email, phone };
  contacts.push(newContact);
};

addContact("gggg", "ggg@ggg.com", "444444444444");
