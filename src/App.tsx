import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AppCard } from './components/AppCard';
import type { Resource } from './components/AppCard';

interface AppData {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  appUrl: string;
  resources?: Resource[];
}

const APPS_DATA: AppData[] = [
  {
    title: 'QuickBooks-API',
    category: 'FINANCIAL',
    description: 'Integration to QuickBooks to add document printing, advance search and reporting.',
    imageUrl: '/qb.webp',
    appUrl: 'https://rws-qb.vercel.app/signin',
    resources: [
      { label: 'Video Tutorials', url: 'https://drive.google.com/drive/u/0/folders/14BGi9yn3NERkaSXu4oNAzZyDdqpxCHq5', icon: 'play_circle' },
      { label: 'PDF Documentation', url: 'https://drive.google.com/file/d/14N-uVyZnvAAXoPhSg-sPhYSuD9rFWMil/view?usp=drive_link', icon: 'description' },
    ],
  },
  {
    title: 'Intranet',
    category: 'INTERNAL',
    description: 'Manage projects, and content of the web site and internal protocols.',
    imageUrl: '/intranet.webp',
    appUrl: 'https://internal.rws.ca/',
    resources: [
      { label: 'Video Tutorials', url: 'https://drive.google.com/drive/folders/1Ql9RIyZzWf4Gy-lxrctdPNu8g8qqFZiF?usp=sharing', icon: 'play_circle' },
      { label: 'PDF Documentation', url: 'https://drive.google.com/file/d/12grete8xa12EDUFasUm7AVTsgqHfnNvd/view?usp=drive_link', icon: 'description' },
    ],
  },
  {
    title: 'TV-Projects',
    category: 'MANAGEMENT',
    description: 'Projects management, construction industrial monitoring and tracking.',
    imageUrl: '/tv.webp',
    appUrl: 'https://rws-tv.vercel.app/',
    resources: [
      { label: 'Video Tutorials', url: 'https://drive.google.com/drive/folders/1Wd0KSc_KsgVXp-WoMDH3siC8IhxVYPe3?usp=sharing', icon: 'play_circle' },
      { label: 'PDF Documentation', url: 'https://drive.google.com/file/d/1PiD_isKMGfceCqyA2DY7laaYUC6mpsUV/view?usp=drive_link', icon: 'description' },
    ],
  },
  {
    title: 'Quote Manager',
    category: 'AUTOMATION',
    description: 'Automation to detect quotes and has a historical life cycle tracker.',
    imageUrl: '/quote manager.webp',
    appUrl: 'https://rws-quotes.up.railway.app/',
    resources: [
      { label: 'Video Tutorials', url: 'https://drive.google.com/drive/folders/1ckyYw9-pqZzUx7tVNdpO__HpBd5RlfP7?usp=sharing', icon: 'play_circle' },
      { label: 'PDF Documentation', url: 'https://drive.google.com/file/d/10-D-EA-UDOWqXiLdIour3zO-45Iknc_b/view?usp=drive_link', icon: 'description' },
    ],
  },
  {
    title: 'Task Manager',
    category: 'PRODUCTIVITY',
    description: 'Visual Kanban system to organize and track team tasks.',
    imageUrl: '/kanban.webp',
    appUrl: 'https://rws-kanban.vercel.app/login',
    resources: [
      { label: 'Video Tutorials', url: 'https://drive.google.com/drive/folders/19elZV19HPHRK9XI5R2FBamf1GQC50NPF?usp=sharing', icon: 'play_circle' },
      { label: 'PDF Documentation', url: 'https://drive.google.com/file/d/1pn0ekteeSv6hgnSemRI7noJbXPdBcy2Q/view?usp=drive_link', icon: 'description' },
    ],
  },
  {
    title: 'Drive',
    category: 'STORAGE',
    description: 'Upload and manage field site images directly to the cloud.',
    imageUrl: '/drive.webp',
    appUrl: 'https://rws-drive.vercel.app/',
    resources: [
      { label: 'Video Tutorials', url: 'https://drive.google.com/drive/folders/1OkVcRyMHIkGdb5HOuBT693vmsPW2vhvf?usp=sharing', icon: 'play_circle' },
      { label: 'PDF Documentation', url: 'https://drive.google.com/file/d/1lHZxnUqD_ri38wtqLNEzuFx26u_3dv2M/view?usp=drive_link', icon: 'description' },
    ],
  },
];

function App() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [openDetailIndex, setOpenDetailIndex] = useState<number | null>(null);

  const handleToggleDetails = (index: number) => {
    setOpenDetailIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="pt-16 pb-20 flex-grow">
        {/* Hero Section */}
        <section className="relative h-[20vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-primary/60 z-10"></div>
          <div className="absolute inset-0 z-0 bg-steel-blue"></div>
          <div className="container mx-auto px-margin-mobile md:px-margin-desktop relative z-20">
            <div className="max-w-3xl border-l-8 border-safety-yellow pl-stack-lg py-stack-md">
              <h1 className="font-headline-display text-headline-display text-white mb-stack-sm">
                Applications
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="industrial-grid-overlay py-stack-lg">
          <div className="container mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="mb-stack-lg flex flex-col md:flex-row justify-between items-center md:items-end gap-stack-md">

              <div className="flex gap-stack-sm">
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={`font-label-caps text-label-caps px-4 py-2 transition-all ${viewMode === 'grid'
                    ? 'bg-steel-blue text-white'
                    : 'bg-outline-variant text-on-surface-variant opacity-50 hover:opacity-100'
                    }`}
                >
                  GRID_VIEW
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('list')}
                  className={`font-label-caps text-label-caps px-4 py-2 transition-all ${viewMode === 'list'
                    ? 'bg-steel-blue text-white'
                    : 'bg-outline-variant text-on-surface-variant opacity-50 hover:opacity-100'
                    }`}
                >
                  LIST_VIEW
                </button>
              </div>
            </div>

            {/* App Cards Layout */}
            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter'
                  : 'flex flex-col gap-gutter'
              }
            >
              {APPS_DATA.map((app, index) => (
                <AppCard
                  key={app.title}
                  title={app.title}
                  category={app.category}
                  description={app.description}
                  imageUrl={app.imageUrl}
                  appUrl={app.appUrl}
                  resources={app.resources}
                  viewMode={viewMode}
                  isResourcesOpen={openDetailIndex === index}
                  onResourcesToggle={() => handleToggleDetails(index)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}

      </main>

      <Footer />
    </div>
  );
}

export default App;
