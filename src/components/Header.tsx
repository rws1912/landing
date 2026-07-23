import React from 'react';
import { openExternalLink } from '../utils/openLink';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b-2 border-outline-variant flex justify-between items-center px-margin-mobile md:px-margin-desktop w-full h-16 fixed top-0 z-50">
      <div className="flex items-center gap-stack-md">
        <img src="/Logo.webp" alt="R.W.S. Logo" className="h-10 w-auto object-contain" />

      </div>
      <div>
        <a
          href="https://rws.ca"
          onClick={(e) => openExternalLink('https://rws.ca', e)}
          target="_blank"
          rel="noopener noreferrer"
          className="font-label-caps text-[11px] sm:text-xs text-black hover:text-steel-blue hover:border-steel-blue transition-colors flex items-center gap-1 border border-black px-2 py-1 md:px-3 md:py-1.5"
        >
          <span className="material-symbols-outlined text-[14px] md:text-sm">open_in_new</span>
          WEB SITE
        </a>
      </div>
    </header>
  );
};
