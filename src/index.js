import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { UseWalletProvider } from "use-wallet";
import { defaultContext } from "./context";

import App from "./App";

export const EthereumContext = React.createContext();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <UseWalletProvider chainId={1} connectors={{}}>
      <EthereumContext.Provider value={defaultContext}>
        <App />
      </EthereumContext.Provider>
    </UseWalletProvider>
  </StrictMode>,
  rootElement
);
