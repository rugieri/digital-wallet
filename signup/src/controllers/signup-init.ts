import Signup, { SignupInitParams } from "@src/types/singup";
import { v4 } from "uuid";
import signupRepo from "@src/ports/repos/signup";

export default async (signupInitParams: SignupInitParams): Promise<Signup> => {
  const signup: Signup = {
    token: v4(),
    initParams: signupInitParams,
    status: "IN_PROGRESS",
  };

  await signupRepo.insert(signup);
  return signup;
};
