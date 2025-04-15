export interface Constituent {
  email: string;
  name: string;
  address: string;
  signUpDate: Date;
}

export type ConstituentInput = Omit<Constituent, "signUpDate">;
