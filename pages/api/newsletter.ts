import type { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

type ResponseData = {
  success: boolean;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: 'Email is required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email address' });
  }

  const sendgridApiKey = process.env.SENDGRID_API_KEY;
  if (!sendgridApiKey) {
    console.error('SENDGRID_API_KEY is not configured');
    return res.status(500).json({ success: false, message: 'Email service not configured' });
  }

  console.log('[newsletter] SendGrid key check:', {
    present: true,
    length: sendgridApiKey.length,
    prefix: sendgridApiKey.slice(0, 3),
    startsWithSG: sendgridApiKey.startsWith('SG.'),
    hasWhitespace: /\s/.test(sendgridApiKey),
    hasQuotes: sendgridApiKey.startsWith('"') || sendgridApiKey.startsWith("'"),
    nodeEnv: process.env.NODE_ENV,
  });

  sgMail.setApiKey(sendgridApiKey);

  // Email to internal team
  const teamNotification = {
    to: 'support@patientory.com',
    from: 'support@patientory.com',
    subject: 'New Newsletter Subscription',
    text: `New newsletter subscription:\n\nEmail: ${email}\n\nSubmitted at: ${new Date().toISOString()}`,
    html: `
      <h2>New Newsletter Subscription</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Submitted at:</strong> ${new Date().toISOString()}</p>
    `,
  };

  // Welcome email to subscriber
  const subscriberWelcome = {
    to: email,
    from: 'support@patientory.com',
    subject: 'Welcome to Patientory Newsletter!',
    text: `Thank you for subscribing to the Patientory newsletter!\n\nYou're now part of our community, and we're excited to keep you updated with the latest news, product updates, and health insights from Patientory.\n\nStay tuned for valuable content delivered straight to your inbox.\n\nBest regards,\nThe Patientory Team`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Welcome to Patientory Newsletter!</h2>
        <p>Thank you for subscribing to the Patientory newsletter!</p>
        <p>You're now part of our community, and we're excited to keep you updated with the latest news, product updates, and health insights from Patientory.</p>
        <p>Stay tuned for valuable content delivered straight to your inbox.</p>
        <br/>
        <p>Best regards,<br/><strong>The Patientory Team</strong></p>
      </div>
    `,
  };

  console.log('[newsletter] Sending emails:', {
    teamTo: teamNotification.to,
    teamFrom: teamNotification.from,
    subscriberTo: subscriberWelcome.to,
    subscriberFrom: subscriberWelcome.from,
  });

  try {
    const results = await Promise.allSettled([
      sgMail.send(teamNotification),
      sgMail.send(subscriberWelcome),
    ]);

    const labels = ['teamNotification', 'subscriberWelcome'];
    const failures: { which: string; code?: number; body?: unknown; message?: string }[] = [];

    results.forEach((result, idx) => {
      const which = labels[idx];
      if (result.status === 'fulfilled') {
        const [response] = result.value;
        console.log(`[newsletter] ${which} sent:`, {
          statusCode: response?.statusCode,
          messageId: response?.headers?.['x-message-id'],
        });
      } else {
        const err = result.reason as any;
        const code = err?.code;
        const body = err?.response?.body;
        console.error(`[newsletter] ${which} failed:`, {
          code,
          message: err?.message,
          body,
          errors: body?.errors,
        });
        failures.push({ which, code, body, message: err?.message });
      }
    });

    if (failures.length > 0) {
      const firstCode = failures[0].code;
      const userMessage =
        firstCode === 401
          ? 'Email service authorization failed. Please contact support.'
          : firstCode === 403
          ? 'Email sender not verified. Please contact support.'
          : 'Failed to subscribe. Please try again later.';
      return res.status(500).json({ success: false, message: userMessage });
    }

    return res.status(200).json({ success: true, message: 'Successfully subscribed to newsletter!' });
  } catch (error) {
    const err = error as any;
    console.error('[newsletter] SendGrid unexpected error:', {
      code: err?.code,
      message: err?.message,
      body: err?.response?.body,
      errors: err?.response?.body?.errors,
      stack: err?.stack,
    });
    return res.status(500).json({ success: false, message: 'Failed to subscribe. Please try again later.' });
  }
}
