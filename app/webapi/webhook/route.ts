import { NextResponse } from 'next/server';

const DISCORD_WEBHOOK_ID = process.env.DISCORD_WEBHOOK_ID!;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await fetch(`https://discord.com/api/webhooks/${DISCORD_WEBHOOK_ID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Erro no proxy:', err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}