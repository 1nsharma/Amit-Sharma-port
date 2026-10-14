type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

const sendJson = (res: any, status: number, body: Record<string, string>) => {
  res.status(status).setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  return res.end(JSON.stringify(body));
};

export default async function handler(req: any, res: any) {
  res.setHeader('X-Content-Type-Options', 'nosniff');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return sendJson(res, 405, { error: 'method_not_allowed' });
  }

  const { RESEND_API_KEY, CONTACT_TO_EMAIL, RESEND_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !RESEND_FROM_EMAIL) {
    return sendJson(res, 503, { error: 'contact_service_unavailable' });
  }

  const payload = (req.body ?? {}) as ContactPayload;
  const name = typeof payload.name === 'string' ? payload.name.trim() : '';
  const email = typeof payload.email === 'string' ? payload.email.trim() : '';
  const message = typeof payload.message === 'string' ? payload.message.trim() : '';

  if (!name || name.length > 120 || !email || email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !message || message.length > 5000) {
    return sendJson(res, 400, { error: 'invalid_contact_payload' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: RESEND_FROM_EMAIL,
        to: [CONTACT_TO_EMAIL],
        reply_to: email,
        subject: `Website contact message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      }),
    });

    if (!response.ok) {
      // Do not expose provider response details or credentials to the browser.
      return sendJson(res, 502, { error: 'contact_delivery_failed' });
    }

    return sendJson(res, 200, { status: 'sent' });
  } catch {
    return sendJson(res, 502, { error: 'contact_delivery_failed' });
  }
}
