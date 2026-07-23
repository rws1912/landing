import React, { useState } from 'react';

interface PinGateProps {
  children: React.ReactNode;
}

export const PinGate: React.FC<PinGateProps> = ({ children }) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('rws_authenticated') === 'true';
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === '1912') {//i know......don't tell anyone!!!
      sessionStorage.setItem('rws_authenticated', 'true');
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect PIN. Please try again.');
      setPin('');
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 industrial-grid-overlay">
      <div className="bg-surface border border-outline-variant rounded-xl shadow-2xl p-8 max-w-sm w-full text-center">
        {/* Logo / Icon */}
        <div className="mx-auto w-20 h-20 bg-white border border-outline-variant rounded-full flex items-center justify-center mb-6 shadow-md">
          <img src="/Logo.webp" alt="R.W.S. Logo" className="w-14 h-14 object-contain" />
        </div>

        <h2 className="font-headline-md text-headline-md font-bold text-steel-blue mb-2">
          R.W.S. Portal
        </h2>
        <p className="font-body-sm text-on-surface-variant mb-6">
          Enter PIN to access the landing page applications.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={4}
              value={pin}
              onChange={(e) => setPin(e.target.value.replace(/\D/g, ''))}
              placeholder="••••"
              className="w-full text-center text-3xl tracking-widest py-3 px-4 bg-surface border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-steel-blue focus:border-transparent font-mono"
              autoFocus
            />
          </div>

          {error && (
            <p className="text-error text-xs font-semibold animate-pulse">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-safety-yellow text-iron-grey font-button-text py-3 px-6 rounded-lg hover:bg-primary hover:text-safety-yellow transition-all duration-300 shadow-md font-semibold"
          >
            ENTER PORTAL
          </button>
        </form>
      </div>
    </div>
  );
};
