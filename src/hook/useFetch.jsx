import { useState } from "react";
import { postData } from "../service/auth.service";

const useFetch = () => {
  const [apiData, setApiData] = useState({
    loading: false,
    data: null,
    error: null,
  });

  const handleApi = async (endPoints, formData) => {
    setApiData((prev) => ({ ...prev, loading: true }));
    const res = await postData(endPoints, formData);

    if (res.error) {
      setApiData((prev) => ({ ...prev, loading: false, error: res.msg }));
    } else {
      setApiData((prev) => ({ ...prev, loading: false, data: res.data }));
    }
  };

  const { loading, data, error } = apiData;

  return { handleApi, loading, data, error };
};

export default useFetch;
