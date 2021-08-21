import React from "react";
import "./account.scss";

export const Account = ({ accounts, connect }) => {
  return (
    <div className="account-block">
      {accounts?.length > 0 ? (
        <>
          <div className="account">{accounts[0]?.account}</div>
          <div className="balance">{accounts[0]?.balance} ETH</div>
        </>
      ) : (
        <div className="connect-button">
          <button onClick={connect}>Connect</button>
        </div>
      )}
    </div>
  );
};
