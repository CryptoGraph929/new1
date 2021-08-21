import "./styles.css";
import { useWallet } from "use-wallet";
import { Account } from "./components/Account";
import { useContext, useEffect, useState } from "react";
import { EthereumContext } from "./index";

const App = () => {
  const { provider, initProvider, getAccounts } = useContext(EthereumContext);
  const [accounts, setAccounts] = useState();
  const wallet = useWallet();

  useEffect(() => {
    const getBalances = async () => {
      if (provider) {
        const accounts = await getAccounts();
        setAccounts(accounts);
      }
    };

    if (wallet.status === "connected") {
      initProvider(wallet.ethereum);
      getBalances();
    }
  }, [wallet, provider, initProvider, getAccounts, setAccounts]);

  return <Account accounts={accounts} connect={() => wallet.connect()} />;
};

export default App;
