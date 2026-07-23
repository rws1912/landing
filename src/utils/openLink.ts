/**
 * Utility to open links in the default system browser when running inside Tauri,
 * or standard browser behavior when running in a normal web browser.
 */
export async function openExternalLink(url: string, event?: React.SyntheticEvent) {
  if (!url || url === '#' || url.startsWith('javascript:')) return;

  const isTauri = typeof window !== 'undefined' && '__TAURI_INTERNALS__' in window;
  if (isTauri) {
    if (event) {
      event.preventDefault();
    }
    try {
      const { open } = await import('@tauri-apps/plugin-shell');
      await open(url);
    } catch (error) {
      console.error('Failed to open link via Tauri shell plugin:', error);
      // Fallback in case of plugin issue
      window.open(url, '_blank');
    }
  }
}
