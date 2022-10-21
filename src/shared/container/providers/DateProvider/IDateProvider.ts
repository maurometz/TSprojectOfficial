/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
interface IDateProvider {
  compareInHours(start_date: Date, end_date: Date): number;
  convertToUTC(date: Date): string;
  dateNow(): Date;
}

export { IDateProvider };
