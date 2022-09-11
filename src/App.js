import { useState } from "react";
import "./App.css";
import FormContact from "./Components/FormContact";

function App() {
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
    console.log(contacts, "contacts");
    console.log("contact", contact);
  };

  return (
    <div className="App">
      <FormContact addContactHandler={addContactHandler} />
    </div>
  );
}

export default App;
