import { expect } from "chai";
import { restore, SinonStub, stub } from "sinon";
import bankPartner from "@src/ports/bank-partner";
import userRepo from "@src/ports/repo/user";
import createBankAccount from "@src/controllers/create-bank-account";
import User, { UserParams } from "@src/types/user";

let createAccountBankPartner: SinonStub;
let insertUser: SinonStub;

describe("Create bank account", () => {
  beforeEach(() => {
    createAccountBankPartner = stub(bankPartner, "createAccount");
    insertUser = stub(userRepo, "insert");
  });
  afterEach(() => restore());

  it("call a bank partner to create a bank account", async () => {
    const userParams: UserParams = {
      fullname: "Some Body",
    };

    await createBankAccount(userParams);

    expect(createAccountBankPartner).to.have.been.calledOnce;
  });
  it("persist user in database", async () => {
    const userParams: UserParams = {
      fullname: "Some Body",
    };

    await createBankAccount(userParams);

    expect(insertUser).to.have.been.calledOnce;

    const insertedUser = insertUser.getCall(0).args[0] as User;
    expect(insertedUser.id).to.be.a("string").that.has.length(36);
    expect(insertedUser.fullname).to.be.equal("Some Body");
  });
});
