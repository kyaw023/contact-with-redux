import { useEffect, useState } from "react";

const customHook = (fun, endPoint, state) => {
  const [detailContacts, setDetailContacts] = useState({
    loading: false,
    data: null,
    error: null,
  });

  useEffect(() => {
    (async () => {
      setDetailContacts((prev) => ({ ...prev, loading: true }));
      const res = await fun(endPoint);
      if (res.error) {
        setDetailContacts((prev) => ({
          ...prev,
          loading: false,
          error: res.msg,
        }));
      } else {
        setDetailContacts((prev) => ({
          ...prev,
          loading: false,
          data: res,
        }));
      }
    })();
  }, [state]);
  return detailContacts;
};

export default customHook;
