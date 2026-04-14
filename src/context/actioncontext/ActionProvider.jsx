import { useState } from "react";
import { ActionContext } from "../actionContext/ActionContext";

const ActionProvider = ({ children }) => {
  const [action, setAction] = useState([]);
  const data = {
    action,
    setAction,
  };
  return (
    <ActionContext.Provider value={data}>{children}</ActionContext.Provider>
  );
};

export default ActionProvider;