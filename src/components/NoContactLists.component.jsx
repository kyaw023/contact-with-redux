import React from "react";

const NoContactListsComponent = () => {
  return (
    <div className=" h-screen flex items-center justify-center">
      <div>
        <img
          className=" h-[480px]"
          src="https://img.freepik.com/premium-vector/contact-list-flat-icon-vector-illustration-concept-can-be-use-landing-page-template-ui-ux_660702-192.jpg"
          alt=""
        />
      </div>
      <h1 className=" text-lg font-semibold text-slate-500">
        There is no contact lists
      </h1>
    </div>
  );
};

export default NoContactListsComponent;
