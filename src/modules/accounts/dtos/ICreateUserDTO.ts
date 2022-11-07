/* eslint-disable import/prefer-default-export */
/* eslint-disable camelcase */
interface ICreateUserDTO {
  name: string;
  password: string;
  email: string;
  driver_license: string;
  id?: string;
  avatar?: string;
  isAdmin?: boolean;
}

export { ICreateUserDTO };
