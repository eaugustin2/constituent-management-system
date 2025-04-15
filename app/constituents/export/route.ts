import { constituentStore } from "@/lib/store";
import { NextResponse } from "next/server";

export const GET = () => {
  if (constituentStore.size == 0) {
    return NextResponse.json({ error: "There are no constituents to export" });
  }
};
