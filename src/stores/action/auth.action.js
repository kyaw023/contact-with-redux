import { postData } from "../../service/auth.service";

export const postDataAction = async (dispatch, formData, endPoints) => {
  try {
    dispatch({ type: "process" });
    const res = await postData(endPoints, formData);

    if (res.data) {
      dispatch({ type: endPoints, payload: res.data });
    } else {
      dispatch({ type: "error", payload: res.msg });
    }
  } catch (e) {
    dispatch({ type: "error", payload: res.msg });
  }
};
