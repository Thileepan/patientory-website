import React, { useState, useEffect, useCallback } from 'react';
import classNames from 'classnames';

interface EarlyAccessFormProps {
  className?: string;
  disclaimer: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const generateCaptcha = (): string => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
  let captcha = '';
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
};

export default function EarlyAccessForm({ className, disclaimer }: EarlyAccessFormProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const refreshCaptcha = useCallback(() => {
    setCaptcha(generateCaptcha());
    setCaptchaInput('');
  }, []);

  useEffect(() => {
    refreshCaptcha();
  }, [refreshCaptcha]);

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isCaptchaValid = captchaInput === captcha;
  const isFormValid = firstName.trim() && lastName.trim() && isValidEmail(email) && isCaptchaValid;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) return;

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/early-access', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email, captcha, captchaInput }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFirstName('');
        setLastName('');
        setEmail('');
        setCaptchaInput('');
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
        refreshCaptcha();
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
      refreshCaptcha();
    }
  };

  if (status === 'success') {
    return (
      <div className={classNames('form', className)}>
        <div className="notification is-success">
          <p><strong>Thank you for signing up!</strong></p>
          <p>We'll notify you when early access is available.</p>
        </div>
      </div>
    );
  }

  return (
    <form
      className={classNames('form', className)}
      onSubmit={handleSubmit}
    >
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          disabled={status === 'submitting'}
        />
      </div>
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          disabled={status === 'submitting'}
        />
      </div>
      <div className="control">
        <input
          className="input"
          type="email"
          placeholder="E-mail address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'submitting'}
        />
      </div>
      <div className="control">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <span
            style={{
              fontFamily: 'monospace',
              fontSize: '20px',
              fontWeight: 'bold',
              letterSpacing: '4px',
              padding: '8px 16px',
              backgroundColor: '#f0f0f0',
              borderRadius: '4px',
              userSelect: 'none',
              color: '#333',
            }}
          >
            {captcha}
          </span>
          <button
            type="button"
            onClick={refreshCaptcha}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '18px',
              padding: '4px',
            }}
            title="Refresh captcha"
            disabled={status === 'submitting'}
          >
            &#8635;
          </button>
        </div>
        <input
          className="input"
          type="text"
          placeholder="Enter the code above"
          value={captchaInput}
          onChange={(e) => setCaptchaInput(e.target.value)}
          disabled={status === 'submitting'}
          autoComplete="off"
        />
        <p className="help">{disclaimer}</p>
      </div>
      {status === 'error' && (
        <div className="control">
          <p className="help is-danger">{errorMessage}</p>
        </div>
      )}
      <div className="control">
        <button
          className="button is-primary is-submit"
          type="submit"
          disabled={!isFormValid || status === 'submitting'}
        >
          {status === 'submitting' ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}
