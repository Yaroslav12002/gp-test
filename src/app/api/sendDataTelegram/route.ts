import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const URL_API = process.env.NEXT_PUBLIC_TELEGRAM_URL_API || "";

export async function POST(request: NextRequest) {
  if (request.method === "POST") {
    try {
      const data = await request.json();
      await axios.post(URL_API, {
        chat_id: process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID,
        parse_mode: "html",
        text: data,
      });
      return NextResponse.json({ message: "Data sent successfully" });
    } catch (error) {
      return NextResponse.json(
        { error: "Failed to append data to the sheet" },
        { status: 500 }
      );
    }
  }
}
