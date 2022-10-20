/* eslint-disable @typescript-eslint/no-unused-vars */
import { AppError } from "../../../shared/errors/AppError";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../infra/typeorm/entities/User";
import { UsersRepositoryInMemory } from "../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../useCases/createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory,
    );
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it("should be able to authenticate an user", async () => {
    const user: ICreateUserDTO = {
      driver_license: "12344",
      email: "email@email.com",
      password: "1234",
      name: "nmoe creativ",
      isAdmin: false,
    };
    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty("token");
  });

  it("should not be able to authenticate a nonexistant user", () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: "email@errado.com",
        password: "7984",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to authenticate with incorrect password", () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: "9999",
        email: "user@user.com",
        password: "1234",
        name: "user test error",
        isAdmin: false,
      };

      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        email: user.name,
        password: "errado",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
