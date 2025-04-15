export interface Constituent {
  email: string;
  name: string;
  address: string;
  signUpDate: Date;
}

export type ConstituentPreview = Omit<Constituent, "signUpDate">;
