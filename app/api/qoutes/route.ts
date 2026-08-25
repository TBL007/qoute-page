import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const api = searchParams.get("api");

  
  if (!api || !/^https?:\/\//i.test(api)) {
    return NextResponse.json({ text: "Invalid api: " + api, author: "server" });
  }

  try {
    const response = await fetch(api);
    const data = await response.json();

   
    if (!data.text && !data.quote) {
      return NextResponse.json({ text: "Invalid api: payload missing quote key", author: "server" });
    }

    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ text: "Invalid api: " + api, author: "server" });
  }
}