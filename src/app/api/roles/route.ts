import { NextResponse } from "next/server";
import { careerRoles } from "@/lib/career-data";

export function GET() {
  return NextResponse.json({ roles: careerRoles });
}
