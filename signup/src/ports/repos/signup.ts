import Signup from "@src/types/singup";

const insert = async (_signup: Signup): Promise<void> => {
  throw new Error("Not implemented yet");
};

const updateStatus = async (_signup: Signup, _newStatus: string): Promise<Signup> => {
  throw new Error("Not implemented yet");
};

const getByToken = async (_token: string): Promise<Signup> => {
  throw new Error("Not implemented yet");
};

export default {
  insert,
  updateStatus,
  getByToken,
};
