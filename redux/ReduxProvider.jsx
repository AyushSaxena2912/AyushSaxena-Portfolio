"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import { NextUIProvider } from "@nextui-org/system";

const ReduxProvider = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default ReduxProvider;
