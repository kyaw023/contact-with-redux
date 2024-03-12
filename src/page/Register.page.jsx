import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ButtonComponent,
  ContainerComponent,
  FormComponent,
  LoadingComponent,
} from "../components";

import { useNavigate } from "react-router-dom";
import { PreventRoute } from "../Route";
import ErrorComponent from "../components/Error.component";
import { registerData } from "../service/auth.service";
import { processing, register } from "../stores/slice/auth.slice";

const RegisterPage = () => {
  const nav = useNavigate();
  const { loading, data, error } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  console.log(data);

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
    password_confirmation: "",
  });

  useEffect(() => {
    if (data) {
      nav("/");
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //postDataAction(dispatch, formData, "/register");
    dispatch(processing());
    const res = await registerData(formData);
    console.log(res);
    dispatch(register(res));
  };

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <PreventRoute path={"/home"} check={localStorage.getItem("auth")}>
      <div>
        {loading ? (
          <LoadingComponent />
        ) : (
          <ContainerComponent>
            <div className="center">
              <div className=" w-[360px]">
                <h1 className=" title">Register your contact</h1>
                <div>{error && <ErrorComponent>{error}</ErrorComponent>}</div>
                <form onSubmit={handleSubmit} className=" space-y-4 mt-10">
                  <FormComponent
                    value={formData.name}
                    onChange={handleInputChange}
                    type={"name"}
                    labelName={"Enter your name"}
                    name={"name"}
                  />
                  <FormComponent
                    value={formData.email}
                    onChange={handleInputChange}
                    type={"email"}
                    labelName={"Enter your email"}
                    name={"email"}
                    placeholder={"example@gmail.com"}
                  />
                  <FormComponent
                    value={formData.password}
                    onChange={handleInputChange}
                    type={"password"}
                    labelName={"Enter your password"}
                    name={"password"}
                    placeholder={"password"}
                  />
                  <FormComponent
                    value={formData.password_confirmation}
                    onChange={handleInputChange}
                    type={"password"}
                    labelName={"password_confirmation"}
                    name={"password_confirmation"}
                    placeholder={"confirm password"}
                  />
                  <div className=" flex items-start gap-5">
                    <ButtonComponent name={"Sign In"} type={"submit"} />
                    <p className=" mt-3">
                      Already have an account?
                      <button
                        onClick={() => nav("/")}
                        className=" text-blue-500 underline ms-2"
                      >
                        Login
                      </button>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </ContainerComponent>
        )}
      </div>
    </PreventRoute>
  );
};

export default RegisterPage;
