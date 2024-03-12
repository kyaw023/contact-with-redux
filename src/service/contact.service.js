import { api } from "./Api";

export const getContactData = async (endPoints) => {
  try {
    const res = await api.get(endPoints);
    return res.data;
  } catch (e) {
    return { error: e, msg: e.message };
  }
};

export const editContactData = async (id, formData) => {
  try {
    const res = await api.put(`/contact/${id}`, formData);
    console.log(res);
    return res.data;
  } catch (e) {
    return { error: e, msg: e.message };
  }
};

export const deleteContactData = async (id) => {
  try {
    const res = await api.delete(`/contact/${id}`);
    console.log(res);
    return res.data;
  } catch (e) {
    return { error: e, msg: e.message };
  }
};

// export const getSingleContact = async (endPoints) => {
//   try {
//     const res = await api.get(endPoints);
//     return res.data;
//   } catch (e) {
//     return { error: e, msg: e.message };
//   }
// };
