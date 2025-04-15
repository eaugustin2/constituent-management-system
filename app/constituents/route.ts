import { constituentStore } from "@/lib/store";
import { Constituent, ConstituentInput } from "@/types/constituents";
import { NextRequest, NextResponse } from "next/server";
import { ConstituentInputSchema } from "./validator";

export const GET = () => {
  if (constituentStore.size == 0) {
    return NextResponse.json(
      { error: "There are no constituents" },
      { status: 500 }
    );
  }

  const constituents: Constituent[] = [];

  for (const value of constituentStore.values()) {
    constituents.push(value);
  }

  return NextResponse.json(constituents);
};

export const POST = async (req: NextRequest) => {
  const constituentInput: ConstituentInput = await req.json();

  //validation to make sure object is valid
  const parseResult = await ConstituentInputSchema.safeParse(constituentInput);

  if (!parseResult.success) {
    return NextResponse.json(
      {
        error: "Improper data, please submit proper Constituent data",
      },
      { status: 500 }
    );
  }

  const newConsituent: Constituent = {
    ...parseResult.data,
    signUpDate: new Date(),
  };

  constituentStore.set(newConsituent.email, newConsituent);

  return NextResponse.json(
    { success: "Constituent has been created!" },
    { status: 200 }
  );
};
