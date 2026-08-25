import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const api = searchParams.get("api");
  if (typeof api === "string") {
    const response = await fetch(api);
    const qoute = await response.text();

    return NextResponse.json(JSON.parse(qoute));
  } else return NextResponse.json({ text: "Invalid api", author: "server" });
}
