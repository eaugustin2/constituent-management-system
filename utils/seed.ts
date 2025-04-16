import { constituentStore } from "../lib/store";

export const seedData = (numOfConstituents: number) => {
  console.log("seeding data...");

  if (constituentStore.size > 0) {
    constituentStore.clear();
  }

  for (let i: number = 0; i < numOfConstituents; i++) {
    constituentStore.set(`test${i}@test.com`, {
      email: `test-mail${i}@test.com`,
      name: `User${i}`,
      address: "123 Mcdonald Rd",
      signUpDate: new Date(),
    });
  }
};
