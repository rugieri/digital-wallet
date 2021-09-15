import User from "@src/types/user";
import BankAccount from "@src/types/bank-accounts";

const createAccount = async (_user: User): Promise<BankAccount> => {
  throw new Error("Not implemented yet");
};

export default {
  createAccount,
};
