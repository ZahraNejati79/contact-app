import Contact from "./Contact";

const ContactList = ({ contacts, deleteHandler }) => {
  return (
    <div>
      {contacts.map((contact) => {
        return <Contact contact={contact} onDelete={deleteHandler} />;
      })}
    </div>
  );
};

export default ContactList;
