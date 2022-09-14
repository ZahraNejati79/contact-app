import { useState } from "react";
import "./App.css";
import ContactList from "./Components/ContactList";
import FormContact from "./Components/FormContact";

function App() {
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
  };

  return (
    <div className="App">
      <FormContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
