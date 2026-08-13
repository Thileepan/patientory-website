import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const key = process.env.SENDGRID_API_KEY;
  if (!key) {
    return res.status(500).json({ ok: false, reason: 'SENDGRID_API_KEY missing in process.env' });
  }

  const charCodes = [
    ...Array.from(key.slice(0, 5)).map((c) => c.charCodeAt(0)),
    '...',
    ...Array.from(key.slice(-5)).map((c) => c.charCodeAt(0)),
  ];

  const meta = {
    length: key.length,
    prefix: key.slice(0, 3),
    last4: key.slice(-4),
    charCodesAtEdges: charCodes,
    hasNonAscii: /[^\x20-\x7E]/.test(key),
    hasNewline: /\r|\n/.test(key),
    nodeEnv: process.env.NODE_ENV,
  };

  try {
    const response = await fetch('https://api.sendgrid.com/v3/user/account', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${key}`,
      },
    });

    const text = await response.text();
    return res.status(200).json({
      ok: response.ok,
      sendgridStatus: response.status,
      sendgridBody: text,
      meta,
    });
  } catch (error) {
    const err = error as any;
    return res.status(500).json({
      ok: false,
      error: err?.message,
      meta,
    });
  }
}
