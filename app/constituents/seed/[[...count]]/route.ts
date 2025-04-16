import { seedData } from "@/utils/seed";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (
  req: NextRequest,
  { params }: { params: { count: string } }
) => {
  const urlParams = await params;

  const count = urlParams.count ? Number(urlParams.count) : 20;

  seedData(count);
  return NextResponse.json({
    message: `${count} constituents have been created`,
  });
};
