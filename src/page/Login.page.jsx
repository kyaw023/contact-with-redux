import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PreventRoute } from "../Route";
import {
  ButtonComponent,
  ContainerComponent,
  FormComponent,
  LoadingComponent,
} from "../components";
import { postData } from "../service/auth.service";
import { login, processing } from "../stores/slice/auth.slice";

const LoginPage = () => {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { loading, data, error } = useSelector((store) => store.auth);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      nav("/home");
    }
  }, [data]);

  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch(processing());
    const res = await postData("login", formData);
    console.log(res.data);
    dispatch(login(res.data));
  };

  return (
    <PreventRoute path={"/home"} check={localStorage.getItem("auth")}>
      <ContainerComponent>
        {loading ? (
          <LoadingComponent />
        ) : (
          <div className="center">
            <div className=" w-[360px]">
              <h1 className="title">Login your contact</h1>
              <form onSubmit={submitHandler} className=" space-y-5 mt-10">
                <FormComponent
                  onChange={handleInputChange}
                  value={formData.email}
                  labelName={"Enter your email"}
                  type={"email"}
                  name={"email"}
                  placeholder={"example@gmail.com"}
                />
                <FormComponent
                  value={formData.password}
                  onChange={handleInputChange}
                  labelName={"password"}
                  type={"password"}
                  name={"password"}
                />
                <div className=" flex items-start gap-4">
                  <ButtonComponent name={"Login"} type={"submit"} />
                  <p className=" mt-3">
                    Don't have an account?
                    <button
                      onClick={() => nav("/register")}
                      className=" text-blue-500 underline ms-2"
                    >
                      Register
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>
        )}
      </ContainerComponent>
    </PreventRoute>
  );
};

export default LoginPage;
