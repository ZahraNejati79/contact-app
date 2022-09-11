import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
const FormContact = ({ addContactHandler }) => {
  const [showForm, setShowForm] = useState(false);
  const [contact, setContact] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const closeHandler = (e) => {
    if (e.target.id === "container") {
      setShowForm(false);
    }
  };
  return showForm ? (
    <section
      onClick={closeHandler}
      id="container"
      className="fixed inset-0 bg-slate-600 backdrop-blur-sm bg-opacity-30 flex items-center justify-center"
    >
      <form className=" p-8 bg-red-50 rounded-lg" onSubmit={submitHandler}>
        <div className="mt-4 flex flex-col items-end justify-center">
          <label htmlFor="name">نام</label>
          <input
            className="mt-2 py-1 rounded-lg w-full"
            name="name"
            value={contact.name}
            onChange={changeHandler}
            type="text"
          />
        </div>
        <div className="mt-4 flex flex-col items-end justify-center">
          <label htmlFor="name">شماره</label>
          <input
            className="mt-2 py-1 rounded-lg w-full"
            name="phoneNumber"
            value={contact.phoneNumber}
            onChange={changeHandler}
            type="text"
          />
        </div>
        <div className="mt-4 flex flex-col items-end justify-center">
          <label htmlFor="name">ایمیل</label>
          <input
            className="mt-2 py-1 rounded-lg w-full"
            name="email"
            value={contact.email}
            onChange={changeHandler}
            type="email"
          />
        </div>
        <button
          className="mt-4 w-full py-1 border border-gray-300 rounded-lg"
          onClick={() => addContactHandler(contact)}
        >
          ثبت
        </button>
      </form>
    </section>
  ) : (
    <button
      onClick={() => setShowForm(true)}
      className="fixed bottom-0 right-0 text-9xl"
    >
      <AiFillPlusCircle />
    </button>
  );
};

export default FormContact;
