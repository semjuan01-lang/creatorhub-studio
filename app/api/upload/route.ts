import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    success: true,
    message: "API de upload criada com sucesso.",
    status: "Em desenvolvimento",
  });
}
