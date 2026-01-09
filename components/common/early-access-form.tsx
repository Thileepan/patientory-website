import React, { useState } from 'react';
import classNames from 'classnames';

interface EarlyAccessFormProps {
  className?: string;
  disclaimer: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function EarlyAccessForm({ className, disclaimer }: EarlyAccessFormProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isFormValid = firstName.trim() && lastName.trim() && isValidEmail(email);

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
        body: JSON.stringify({ firstName, lastName, email }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setFirstName('');
        setLastName('');
        setEmail('');
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Network error. Please try again.');
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
