import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
const FormContact = ({ submitHandler, edit }) => {
  const [showForm, setShowForm] = useState(edit ? true : false);
  const [contact, setContact] = useState(
    edit
      ? {
          name: edit.name,
          phoneNumber: edit.phoneNumber,
          email: edit.email,
        }
      : {
          name: "",
          phoneNumber: "",
          email: "",
        }
  );
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    submitHandler(contact);
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
      <form className=" p-8 bg-white  rounded-lg" onSubmit={onSubmit}>
        <div className="mt-4 flex flex-col items-end justify-center">
          <label htmlFor="name">نام</label>
          <input
            className=" border-2  focus:border-transparent focus:ring-2 focus:ring-gray-400 border-gray-400  outline-none  mt-2 py-1 rounded-lg w-full"
            name="name"
            value={contact.name}
            onChange={changeHandler}
            type="text"
          />
        </div>
        <div className="mt-4 flex flex-col items-end justify-center">
          <label htmlFor="name">شماره</label>
          <input
            className="border-2  focus:border-transparent focus:ring-2 focus:ring-gray-400 border-gray-400  outline-none mt-2 py-1 rounded-lg w-full"
            name="phoneNumber"
            value={contact.phoneNumber}
            onChange={changeHandler}
            type="text"
          />
        </div>
        <div className="mt-4 flex flex-col items-end justify-center">
          <label htmlFor="name">ایمیل</label>
          <input
            className="border-2  focus:border-transparent focus:ring-2 focus:ring-gray-400 border-gray-400  outline-none mt-2 py-1 rounded-lg w-full"
            name="email"
            value={contact.email}
            onChange={changeHandler}
            type="email"
          />
        </div>
        <button className="mt-4 w-full py-1 focus:bg-slate-200 border border-gray-200 rounded-lg">
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
