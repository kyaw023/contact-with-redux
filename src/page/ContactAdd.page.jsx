import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ButtonComponent,
  FormComponent,
  LoadingComponent,
} from "../components";
import { editContactData } from "../service/contact.service";
import { postDataAction } from "../stores/action/auth.action";
const ContactAddPage = () => {
  const [contactData, setContactData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    photo: "",
  });

  const { loading, data, error } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const location = useLocation();

  const nav = useNavigate();

  useEffect(() => {
    if (location.state?.edit) {
      const { name, phone, email, address } = location.state.data;

      setContactData({ name, phone, email, address });
    } else {
    }
  }, [location]);

  const contactChangeHandler = (e) => {
    setContactData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      // photo:e.target?.files[0]?.name,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    let res;
    if (location.state?.edit) {
      res = await editContactData(location.state.data?.id, contactData);
    } else {
      res = postDataAction(dispatch, contactData, "/contact");
    }

    if (res) {
      nav("/home");
    }
  };

  return (
    <div>
      {loading ? (
        <LoadingComponent />
      ) : (
        <div className=" my-10 ">
          <div className=" flex items-center space-x-10">
            <div className="">
              <img
                className=" h-[480px]"
                src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-3147.jpg"
                alt=""
              />
            </div>
            <div>
              <div className="center">
                <div className=" w-[360px]">
                  <h1 className=" title">Create Contacts</h1>
                  <form onSubmit={submitHandler} className=" space-y-4 mt-10">
                    <FormComponent
                      onChange={contactChangeHandler}
                      value={contactData?.name}
                      labelName={"Name"}
                      type={"text"}
                      name={"name"}
                      placeholder={"Your name"}
                    />
                    <FormComponent
                      onChange={contactChangeHandler}
                      value={contactData?.phone}
                      labelName={"Phone"}
                      type={"text"}
                      name={"phone"}
                      placeholder={"Your Phone number"}
                    />

                    <FormComponent
                      onChange={contactChangeHandler}
                      value={contactData?.email}
                      labelName={"Email"}
                      type={"email"}
                      name={"email"}
                      placeholder={"example@gmail.com"}
                    />
                    <FormComponent
                      onChange={contactChangeHandler}
                      value={contactData?.address}
                      labelName={"Address"}
                      type={"text"}
                      name={"address"}
                      placeholder={"Your address"}
                    />
                    <div>
                      <div className="max-w-lg mx-auto">
                        <label
                          className="block mb-2 text-sm font-medium text-gray-900"
                          htmlFor="user_avatar"
                        >
                          Upload your photo
                        </label>
                        <input
                          onChange={contactChangeHandler}
                          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none "
                          aria-describedby="user_avatar_help"
                          id="user_avatar"
                          type="file"
                          name="photo"
                        />
                        <div
                          className="mt-1 text-sm text-gray-500"
                          id="user_avatar_help"
                        >
                          A profile picture is useful to confirm your are logged
                          into your account
                        </div>
                      </div>
                    </div>
                    <div className=" ">
                      <ButtonComponent name={"Create"} type={"submit"} />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactAddPage;
