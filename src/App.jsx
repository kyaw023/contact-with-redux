import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  ContactAddPage,
  ContactDetail,
  ContactPage,
  HomePage,
  LoginPage,
  RegisterPage,
} from "./page";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/home" element={<HomePage />}>
          <Route index element={<ContactPage />} />
          <Route path="add" element={<ContactAddPage />} />
          <Route path="detail/:id" element={<ContactDetail />} />
        </Route>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </main>
  );
};

export default App;
