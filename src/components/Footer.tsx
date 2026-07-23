import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-iron-grey dark:bg-tertiary text-on-primary border-t-4 border-steel-blue w-full mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop py-stack-lg w-full">
        <div className="mb-stack-md md:mb-0">
          <span className="font-label-caps text-label-caps text-safety-yellow tracking-widest">
            R.W.S. HOISTS &amp; CRANES
          </span>

        </div>

      </div>
    </footer>
  );
};
