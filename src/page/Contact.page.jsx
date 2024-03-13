import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ContactHeader,
  ContactLists,
  ContactTableHeader,
  ContainerComponent,
  LoadingComponent,
  NoContactLists,
} from "../components";
import { deleteContactData } from "../service/contact.service";
import {
  useEditContactMutation,
  useGetContactsQuery,
} from "../stores/endpoints/contact.endpoint";

const ContactPage = () => {
  // const [contacts, setContacts] = useState({
  //   loading: false,
  //   data: null,
  //   error: null,
  // });
  // useEffect(() => {
  //   (async () => {
  //     setContacts((prev) => ({ ...prev, loading: true }));
  //     const res = await getContactData("/contact");
  //     console.log(res);
  //     if (res.error) {
  //       setContacts((prev) => ({
  //         ...prev,
  //         loading: false,
  //         error: res.msg,
  //       }));
  //     } else {
  //       setContacts((prev) => ({
  //         ...prev,
  //         loading: false,
  //         data: res?.contacts?.data,
  //       }));
  //     }
  //   })();
  // }, []);

  const [update, setUpdate] = useState(false);

  const deleteHandleBtn = async (id) => {
    const res = await deleteContactData(id);
    setUpdate(!update);
  };

  // const { data, loading, error } = customHook(
  //   getContactData,
  //   "/contact",
  //   update
  // );

  const { isError, isLoading, data, isSuccess } = useGetContactsQuery();
  console.log(data)

  // const contacts = data?.contacts?.data;

  const contacts = data?.contacts?.data;

  return (
    <ContainerComponent>
      <div className=" flex items-center justify-between my-5">
        <h1 className=" text-xl">Contacts Lists</h1>
        <Link to={"/home/add"}>
          <button className=" border border-slate-900 px-3 py-1 rounded text-sm">
            Add New Contact
          </button>
        </Link>
      </div>
      <div>
        {contacts === null && <NoContactLists />}
        {isLoading && <LoadingComponent />}
        {contacts && (
          <div>
            <div className="mb-10">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-4">
                <ContactHeader />
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                  <ContactTableHeader
                    name={"name"}
                    position={"position"}
                    status={"status"}
                  />
                  <tbody>
                    {contacts?.map((contact) => {
                      return (
                        <ContactLists
                          deleteHandleBtn={deleteHandleBtn}
                          key={contact.id}
                          {...contact}
                          contact={contact}
                        />
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </ContainerComponent>
  );
};

export default ContactPage;
