import { constituentStore } from "@/lib/store";
import { Constituent } from "@/types/constituents";
import { NextRequest, NextResponse } from "next/server";

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
  //TODO: Validate incoming object

  const consituent: Constituent = await req.json();

  consituent.signUpDate = new Date();

  constituentStore.set(consituent.email, consituent);

  return NextResponse.json(
    { success: "Constituent has been created!" },
    { status: 200 }
  );
};
