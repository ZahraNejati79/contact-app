import { useState } from "react";
import "./App.css";
import ContactList from "./Components/ContactList";
import FormContact from "./Components/FormContact";

function App() {
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    const newContact = {
      ...contact,
      createdAt: new Date().toISOString(),
      id: new Date().getTime(),
    };
    setContacts([...contacts, newContact]);
  };

  const deleteHandler = (id) => {
    const filterContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filterContacts);
  };

  const editHandler = (newContact, id) => {
    console.log("new", newContact);
    console.log("id", id);
    const index = contacts.findIndex((contact) => contact.id === id);
    const updatedContact = [...contacts];
    const selectedEdit = { ...contacts[index] };
    selectedEdit.name = newContact.name;
    selectedEdit.phoneNumber = newContact.phoneNumber;
    selectedEdit.email = newContact.email;
    updatedContact[index] = selectedEdit;
    setContacts(updatedContact);
  };

  return (
    <div className="App">
      <FormContact submitHandler={addContactHandler} />
      <ContactList
        contacts={contacts}
        deleteHandler={deleteHandler}
        editHandler={editHandler}
      />
    </div>
  );
}

export default App;
