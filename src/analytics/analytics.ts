declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const sendPageView = (url: string) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_path: url,
    });
  } else {
    console.warn('gtag is not defined');
  }
};