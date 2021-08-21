import Web3 from "web3";

export const defaultContext = {
  provider: null,

  initProvider(injected) {
    const provider = new Web3(injected);

    this.provider = provider;
  },

  async getAccounts() {
    const balances = [];

    if (this.provider) {
      const accounts = await this.provider.eth.getAccounts(
        (_, accounts) => accounts
      );

      for (const account of accounts) {
        const accountBalance = await this.provider.eth.getBalance(account);
        const balance = Web3.utils.fromWei(accountBalance);

        balances.push({
          account,
          balance
        });
      }
    }
  }
};
