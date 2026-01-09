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

  const { firstName, lastName, email } = req.body;

  if (!firstName || !lastName || !email) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
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

  sgMail.setApiKey(sendgridApiKey);

  // Email to internal team
  const teamNotification = {
    to: 'support@patientory.com',
    from: 'support@patientory.com',
    subject: 'New Early Access Sign-up',
    text: `New early access sign-up:\n\nFirst Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\n\nSubmitted at: ${new Date().toISOString()}`,
    html: `
      <h2>New Early Access Sign-up</h2>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Submitted at:</strong> ${new Date().toISOString()}</p>
    `,
  };

  // Confirmation email to customer
  const customerConfirmation = {
    to: email,
    from: 'support@patientory.com',
    subject: 'Thank You for Your Interest in Patientory!',
    text: `Hi ${firstName},\n\nThank you for signing up for early access to the Patientory Wallet App!\n\nWe're excited to have you on our waitlist. Our team will review your request and get back to you with an access code shortly.\n\nIn the meantime, stay tuned for updates on our progress.\n\nBest regards,\nThe Patientory Team`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Thank You for Your Interest in Patientory!</h2>
        <p>Hi ${firstName},</p>
        <p>Thank you for signing up for early access to the <strong>Patientory Wallet App</strong>!</p>
        <p>We're excited to have you on our waitlist. Our team will review your request and get back to you with an access code shortly.</p>
        <p>In the meantime, stay tuned for updates on our progress.</p>
        <br/>
        <p>Best regards,<br/><strong>The Patientory Team</strong></p>
      </div>
    `,
  };

  try {
    await Promise.all([
      sgMail.send(teamNotification),
      sgMail.send(customerConfirmation),
    ]);
    return res.status(200).json({ success: true, message: 'Successfully signed up for early access!' });
  } catch (error) {
    console.error('SendGrid error:', error);
    return res.status(500).json({ success: false, message: 'Failed to submit. Please try again later.' });
  }
}
