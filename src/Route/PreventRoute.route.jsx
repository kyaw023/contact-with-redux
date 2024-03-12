import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

const PreventRouteRoute = ({ path, check, children }) => {
  const nav = useNavigate();
  useEffect(() => {
    if (check) {
      nav(path);
    }
  }, [check]);
  return <>{children}</>;
};

export default PreventRouteRoute;
