import { Constituent } from "@/types/constituents";

type ConstituentStore = Map<string, Constituent>;

const globalForConstituents = globalThis as unknown as {
  constituentStore?: ConstituentStore;
};

export const constituentStore =
  globalForConstituents.constituentStore ?? new Map<string, Constituent>();

if (process.env.NODE_ENV === "development") {
  globalForConstituents.constituentStore = constituentStore;
}
