import Contact from "./Contact";

const ContactList = ({ contacts }) => {
  return (
    <div>
      {contacts.map((contact) => {
        return <Contact contact={contact} />;
      })}
    </div>
  );
};

export default ContactList;
