import { api } from "./Api";

export const postData = async (endPoints, formData) => {
  try {
    console.log(formData, endPoints);
    const res = await api.post(endPoints, formData);

    const { data } = res;

    if (data.token) {
      localStorage.setItem("auth", JSON.stringify(data.token));
    }
    return data;
  } catch (e) {
    return { error: e, msg: e.message };
  }
};

export const registerData = async (formData) => {
  try {
    const res = await api.post("/register", formData);

    console.log(res);
    return res?.data.message;
  } catch (e) {
    return { error: e, msg: e.message };
  }
};
