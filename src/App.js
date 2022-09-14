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

  return (
    <div className="App">
      <FormContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} deleteHandler={deleteHandler} />
    </div>
  );
}

export default App;
