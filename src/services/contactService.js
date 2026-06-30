import api from "./api";

export async function createContact(contact) {
  const { data } = await api.post("/contacts", contact);
  return data;
}

export async function getContacts() {
  const { data } = await api.get("/contacts");
  return data;
}