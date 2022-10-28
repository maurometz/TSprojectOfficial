/* eslint-disable import/prefer-default-export */

interface IMailProvider {
  sendMail(
    to: string,
    subject: string,
    variables: any,
    path: string,
  ): Promise<void>;
}

export { IMailProvider };
