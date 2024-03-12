import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ContactListsComponent = ({
  id,
  photo,
  phone,
  name,
  email,
  address,
  contact,
  deleteHandleBtn,
}) => {
  const nav = useNavigate();

  const editHandleBtn = () => {
    console.log(id);
    nav("/home/add", {
      state: { data: contact, edit: true },
    });
  };
  return (
    <tr className="bg-white border-b  hover:bg-gray-50 ">
      <td className="w-4 p-4">
        <div className="flex items-center">
          <input
            id="checkbox-table-search-1"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
          />
          <label htmlFor="checkbox-table-search-1" className="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <th
        scope="row"
        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
      >
        {photo ? (
          <img
            className="w-10 h-10 rounded-full"
            src={photo}
            alt="Jese image"
          />
        ) : (
          <div>User Profile</div>
        )}
        <div className="ps-3">
          <div className="text-base font-semibold">{name}</div>
          <div className="font-normal text-gray-500">{email}</div>
        </div>
      </th>
      <td className="px-6 py-4">React Developer</td>
      <td className="px-6 py-4">
        <div className="flex items-center">
          <Link to={`/home/detail/${id}`}>
            <button
              href="#"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Detail
            </button>
          </Link>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className=" space-x-2">
          <button
            onClick={() => deleteHandleBtn(id)}
            className=" border border-slate-800 p-2 rounded active:scale-110 duration-200 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 text-red-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
          <button
            onClick={editHandleBtn}
            className="border border-slate-800 p-2 rounded active:scale-110 duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 text-blue-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ContactListsComponent;
