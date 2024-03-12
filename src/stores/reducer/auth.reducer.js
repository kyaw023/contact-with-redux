const initialState = {
  auth: false,
  data: null,
  loading: false,
  error: null,
};

export const authReducer = (store = initialState, action) => {
  const getData = () => {
    return (store = {
      ...store,
      auth: true,
      data: action.payload,
      loading: false,
      error: null,
    });
  };
  switch (action.type) {
    case "process": {
      return (store = { ...store, loading: true });
    }
    case "error": {
      return (store = { ...store, error: action.payload });
    }
    case "/register": {
      return (store = {
        ...store,
        data: action.payload,
        loading: false,
        error: null,
      });
    }
    case "/contact": {
      return getData();
    }

    case "login": {
      return getData();
    }
    case "logout": {
      return (store = { ...store, auth: false, data: null });
    }
    default:
      return store;
  }
};
