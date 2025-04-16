import { constituentStore } from "@/lib/store";
import { Constituent } from "@/types/constituents";
import { NextResponse } from "next/server";
import { Parser } from "@json2csv/plainjs/index.js";

export const GET = () => {
  if (constituentStore.size == 0) {
    return NextResponse.json({ error: "There are no constituents to export" });
  }

  const constituents: Constituent[] = [];

  for (const value of constituentStore.values()) {
    constituents.push(value);
  }

  //Default sort is ASC order
  constituents.sort((a, b) => {
    return a.signUpDate.getTime() - b.signUpDate.getTime();
  });

  const csvParser = new Parser();
  const csv = csvParser.parse(constituents);

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": 'attachment; filename="constituents.csv"',
    },
  });
};
