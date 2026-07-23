import React from 'react';
import { openExternalLink } from '../utils/openLink';

export interface Resource {
  label: string;
  url: string;
  icon: string; // e.g. "play_circle" or "description"
}

export interface AppCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  appUrl: string;
  resources?: Resource[];
  isResourcesOpen: boolean;
  onResourcesToggle: () => void;
  viewMode: 'grid' | 'list';
}

const CATEGORY_COLOR_MAP: Record<string, string> = {
  FINANCIAL: 'bg-safety-yellow text-black',
  INTERNAL: 'bg-steel-blue text-white',
  PUBLIC: 'bg-caution-orange text-white',
  MANAGEMENT: 'bg-steel-blue text-white',
  AUTOMATION: 'bg-safety-yellow text-black',
  PRODUCTIVITY: 'bg-iron-grey text-white',
  STORAGE: 'bg-steel-blue text-white',
};

export const AppCard: React.FC<AppCardProps> = ({
  title,
  description,
  imageUrl,
  category,
  appUrl,
  resources = [
    { label: 'Video Tutorials', url: '#', icon: 'play_circle' },
    { label: 'PDF Documentation', url: '#', icon: 'description' },
  ],
  isResourcesOpen,
  onResourcesToggle,
  viewMode,
}) => {
  const categoryColorClass = CATEGORY_COLOR_MAP[category] || 'bg-steel-blue text-white';

  const handleToggle = (e: React.SyntheticEvent) => {
    e.preventDefault(); // Prevent HTML details default behavior to let state manage it
    onResourcesToggle();
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-surface border border-outline-variant group app-card-hover flex flex-row p-3 md:p-0 w-full rounded-xl md:rounded-none">
        {/* Thumbnail Image */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-64 md:h-auto overflow-hidden relative border border-outline-variant md:border-0 md:border-r-2 border-iron-grey flex-shrink-0 rounded-lg md:rounded-none">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            src={imageUrl}
            alt={title}
          />
          <div className={`absolute top-2 left-2 md:top-4 md:left-4 font-label-caps px-1.5 py-0.5 md:px-3 md:py-1 text-[8px] md:text-[10px] ${categoryColorClass}`}>
            {category}
          </div>
        </div>

        {/* Content */}
        <div className="pl-3 md:p-stack-md flex-grow flex flex-col justify-between min-w-0">
          <div>
            <h3 className="font-headline-md text-sm sm:text-base md:text-headline-md text-steel-blue mb-1 md:mb-2 font-semibold md:font-bold truncate md:whitespace-normal">
              {title}
            </h3>
            <p className="font-body-sm text-[11px] sm:text-xs md:text-body-sm text-on-surface-variant line-clamp-2 md:line-clamp-none h-8 md:h-12 overflow-hidden mb-2 md:mb-stack-md">
              {description}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-stretch md:items-center">
            <a
              className="bg-safety-yellow text-iron-grey font-button-text py-1.5 md:py-3 px-6 text-center block text-xs md:text-base hover:bg-primary hover:text-safety-yellow transition-all duration-300 md:w-64"
              href={appUrl}
              onClick={(e) => openExternalLink(appUrl, e)}
              target="_blank"
              rel="noopener noreferrer"
            >
              OPEN APPLICATION
            </a>

            <details
              className="group/details border border-outline-variant p-1 md:p-2 rounded flex-grow max-w-md"
              open={isResourcesOpen}
            >
              <summary
                onClick={handleToggle}
                className="list-none flex justify-between items-center cursor-pointer font-label-caps text-[10px] md:text-xs text-steel-blue hover:text-caution-orange select-none"
              >
                RESOURCES
                <span className={`material-symbols-outlined text-[14px] md:text-[18px] transform transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </summary>
              {isResourcesOpen && (
                <div className="mt-1 md:mt-stack-sm space-y-1 md:space-y-2 pb-1 md:pb-2">
                  {resources.map((res, index) => (
                    <a
                      key={index}
                      className="flex items-center gap-1 md:gap-2 font-body-sm text-[10px] sm:text-xs md:text-body-sm text-on-surface-variant hover:text-steel-blue"
                      href={res.url}
                      onClick={(e) => openExternalLink(res.url, e)}
                    >
                      <span className="material-symbols-outlined text-xs md:text-sm">{res.icon}</span>{' '}
                      {res.label}
                    </a>
                  ))}
                </div>
              )}
            </details>
          </div>
        </div>
      </div>
    );
  }

  // Default: Grid view
  return (
    <div className="bg-surface border border-outline-variant group app-card-hover flex flex-row md:flex-col p-3 md:p-0 w-full rounded-xl md:rounded-none">
      {/* Thumbnail Image */}
      <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-full md:h-48 overflow-hidden relative border border-outline-variant md:border-0 md:border-b-2 md:border-iron-grey flex-shrink-0 rounded-lg md:rounded-none">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={imageUrl}
          alt={title}
        />
        <div className={`absolute top-2 left-2 md:top-4 md:left-4 font-label-caps px-1.5 py-0.5 md:px-3 md:py-1 text-[8px] md:text-[10px] ${categoryColorClass}`}>
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="pl-3 md:p-stack-md flex-grow flex flex-col justify-between min-w-0">
        <div>
          <h3 className="font-headline-md text-sm sm:text-base md:text-headline-md text-steel-blue mb-1 md:mb-2 font-semibold md:font-bold truncate md:whitespace-normal">
            {title}
          </h3>
          <p className="font-body-sm text-[11px] sm:text-xs md:text-body-sm text-on-surface-variant line-clamp-2 md:line-clamp-none h-8 md:h-12 overflow-hidden mb-2 md:mb-stack-md">
            {description}
          </p>
        </div>

        <div className="flex flex-col gap-2 md:gap-0">
          <a
            className="w-full bg-safety-yellow text-iron-grey font-button-text py-1.5 md:py-3 text-center block text-xs md:text-base md:mb-stack-sm hover:bg-primary hover:text-safety-yellow transition-all duration-300"
            href={appUrl}
            onClick={(e) => openExternalLink(appUrl, e)}
            target="_blank"
            rel="noopener noreferrer"
          >
            OPEN APPLICATION
          </a>
          <details
            className="group/details border-t border-outline-variant pt-1 md:pt-stack-sm"
            open={isResourcesOpen}
          >
            <summary
              onClick={handleToggle}
              className="list-none flex justify-between items-center cursor-pointer font-label-caps text-[10px] md:text-xs text-steel-blue hover:text-caution-orange select-none"
            >
              RESOURCES
              <span className={`material-symbols-outlined text-[14px] md:text-[18px] transform transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`}>
                expand_more
              </span>
            </summary>
            {isResourcesOpen && (
              <div className="mt-1 md:mt-stack-sm space-y-1 md:space-y-2 pb-1 md:pb-2">
                {resources.map((res, index) => (
                  <a
                    key={index}
                    className="flex items-center gap-1 md:gap-2 font-body-sm text-[10px] sm:text-xs md:text-body-sm text-on-surface-variant hover:text-steel-blue"
                    href={res.url}
                    onClick={(e) => openExternalLink(res.url, e)}
                  >
                    <span className="material-symbols-outlined text-xs md:text-sm">{res.icon}</span>{' '}
                    {res.label}
                  </a>
                ))}
              </div>
            )}
          </details>
        </div>
      </div>
    </div>
  );
};
