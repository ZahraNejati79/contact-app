import { IoMdContact } from "react-icons/io";
import { GrFormView } from "react-icons/gr";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
const Contact = ({ contact, onDelete, onEdit }) => {
  return (
    <div className="flex items-center justify-center ">
      <div className="flex items-center justify-between mb-4 p-2 rounded-lg shadow-lg  w-full md:w-1/2 ">
        <div>
          <div className="text-8xl rounded-full ">
            <IoMdContact />
          </div>
        </div>
        <div className="flex w-3/4 items-center justify-center gap-x-4">
          <div className=" flex w-full  items-center justify-center">
            <ul
              dir="rtl"
              className="max-w-sm border border-gray-200 w-full flex flex-col items-start justify-center gap-y-2"
            >
              <li className="flex p-1 gap-x-2 w-full border-b border-gray-200">
                <div>اسم: </div>
                <div>{contact.name}</div>
              </li>
              <li className="flex p-1 gap-x-2 w-full border-b border-gray-200">
                <div>شماره :</div>
                <div>{contact.phoneNumber}</div>
              </li>
              <li className="flex p-1 gap-x-2 w-full border-b border-gray-200">
                <div>ایمیل:</div>
                <div>{contact.email}</div>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-y-4 text-xl justify-center">
            <button>
              <GrFormView />
            </button>
            <button onClick={onEdit}>
              <AiOutlineEdit />
            </button>
            <button onClick={() => onDelete(contact.id)}>
              <AiOutlineDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
