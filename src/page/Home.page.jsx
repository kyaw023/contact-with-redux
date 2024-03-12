import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { PreventRoute } from "../Route";
import { ContainerComponent, LoadingComponent } from "../components";
import useFetch from "../hook/useFetch";
import { getContactData } from "../service/contact.service";

const HomePage = () => {
  const { loading } = useFetch();

  const nav = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await getContactData("/user-profile");
    })();
  });
  const logoutHandler = () => {
    localStorage.removeItem("auth");
    nav("/");
  };
  return (
    <PreventRoute path={"/"} check={!localStorage.getItem("auth")}>
      <ContainerComponent>
        <div>
          {loading ? (
            <LoadingComponent />
          ) : (
            <div className=" flex items-center justify-between">
              <Link to={'/home'}>
                <h1 className=" text-lg font-semibold">Contacts</h1>
              </Link>
              <div className=" space-x-2">
                <button
                  className=" bg-black text-slate-200 px-3 py-1 rounded text-sm"
                  onClick={logoutHandler}
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
        <Outlet />
      </ContainerComponent>
    </PreventRoute>
  );
};

export default HomePage;
