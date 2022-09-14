import { useState } from "react";
import Contact from "./Contact";
import FormContact from "./FormContact";

const ContactList = ({ contacts, deleteHandler, editHandler }) => {
  const [editContact, setEditContact] = useState({
    id: null,
    name: "",
    phoneNumber: "",
    email: "",
  });
  const editContactHandler = (contact) => {
    const newContact = {
      name: contact.name,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };
    editHandler(newContact, editContact.id);
    setEditContact({
      id: null,
      name: "",
      phoneNumber: "",
      email: "",
    });
  };
  return editContact.id ? (
    <>
      <FormContact submitHandler={editContactHandler} edit={editContact} />
    </>
  ) : (
    <>
      <div>
        {contacts.map((contact) => {
          return (
            <Contact
              contact={contact}
              onDelete={deleteHandler}
              onEdit={() => setEditContact(contact)}
            />
          );
        })}
      </div>
    </>
  );
};

export default ContactList;
