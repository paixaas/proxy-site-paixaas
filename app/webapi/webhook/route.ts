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
      const errorData = await response.text();
      console.error('O Discord recusou o webhook:', errorData);
      return NextResponse.json({ ok: false, error: errorData }, { status: response.status });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Erro interno no Proxy:', err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
