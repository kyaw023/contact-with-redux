import React from "react";
import { useParams } from "react-router-dom";
import { LoadingComponent } from "../components";
import customHook from "../hook/customHook";
import { getContactData } from "../service/contact.service";
const ContactDetailPage = () => {
  const { id } = useParams();

  // const [detailContacts, setDetailContacts] = useState({
  //   loading: false,
  //   data: null,
  //   error: null,
  // });

  const { data, loading, error } = customHook(
    getContactData,
    `/contact/${id}`,
    id
  );

  const detailContacts = data?.contact;

  // useEffect(() => {
  // (async () => {
  //   setDetailContacts((prev) => ({ ...prev, loading: true }));
  //   const res = await getContactData(`/contact/${id}`);
  //   if (res.error) {
  //     setDetailContacts((prev) => ({
  //       ...prev,
  //       loading: false,
  //       error: res.msg,
  //     }));
  //   } else {
  //     setDetailContacts((prev) => ({
  //       ...prev,
  //       loading: false,
  //       data: res?.contact,
  //     }));
  //   }
  // })();
  // }, [id]);

  return (
    <div>
      {loading ? (
        <LoadingComponent />
      ) : (
        <div className=" select-none my-10 border border-slate-200 shadow rounded-lg p-8 flex items-center space-x-10">
          <div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/contact-information-5713329-4780236.png?f=webp"
              alt=""
            />
          </div>
          <div className=" space-y-4">
            <div>
              <h1 className="  text-xl capitalize">
                Name :{" "}
                <span className="text-lg text-slate-700">
                  {detailContacts?.name}
                </span>
              </h1>
            </div>
            <div>
              <h1 className="  text-xl capitalize">
                Phone :{" "}
                <span className="text-lg text-slate-700">
                  {detailContacts?.phone}
                </span>
              </h1>
            </div>
            <div>
              <h1 className="  text-xl ">
                Email :{" "}
                <span className="text-lg text-slate-700">
                  {detailContacts?.email}
                </span>
              </h1>
            </div>
            <div>
              <h1 className="  text-xl capitalize">
                Address :{" "}
                <span className="text-lg text-slate-700">
                  {detailContacts?.address}
                </span>
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactDetailPage;
