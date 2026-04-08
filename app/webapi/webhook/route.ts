import { NextResponse } from 'next/server';

const DISCORD_URL = process.env.DISCORD_WEBHOOK_URL!; 

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const response = await fetch(DISCORD_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return NextResponse.json({ ok: false, error: errorData }, { status: response.status });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
