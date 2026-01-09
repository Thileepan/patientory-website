import { SupportedLanguage } from './LanguageContext';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export function initGoogleTranslate(): void {
  if (typeof window === 'undefined') return;

  window.googleTranslateElementInit = () => {
    if (window.google?.translate?.TranslateElement) {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,ko,zh-TW,yue',
          autoDisplay: false,
        },
        'google_translate_element'
      );
    }
  };
}

export function changeLanguage(langCode: SupportedLanguage): void {
  if (typeof window === 'undefined') return;

  // For English, we need to reset Google Translate completely
  if (langCode === 'en') {
    // Clear the Google Translate cookie to reset to original language
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + window.location.hostname;
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.' + window.location.hostname;

    // Reload the page to show original content
    window.location.reload();
    return;
  }

  // For other languages, use the Google Translate dropdown
  const attemptChange = (attempts: number = 0) => {
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;

    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event('change'));
    } else if (attempts < 10) {
      // Retry after a short delay if select is not ready
      setTimeout(() => attemptChange(attempts + 1), 500);
    }
  };

  attemptChange();
}

export function loadGoogleTranslateScript(): void {
  if (typeof window === 'undefined') return;

  // Check if script is already loaded
  if (document.getElementById('google-translate-script')) return;

  const script = document.createElement('script');
  script.id = 'google-translate-script';
  script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  script.async = true;
  document.body.appendChild(script);
}
