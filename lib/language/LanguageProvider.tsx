import { useState, useEffect, ReactNode } from 'react';
import { LanguageContext, SupportedLanguage } from './LanguageContext';
import { detectCountry, mapCountryToLanguage } from './geolocation';
import { initGoogleTranslate, changeLanguage, loadGoogleTranslateScript } from './googleTranslate';

const STORAGE_KEY = 'patientory_language_preference';

interface Props {
  children: ReactNode;
}

export function LanguageProvider({ children }: Props) {
  const [currentLanguage, setCurrentLanguage] = useState<SupportedLanguage>('en');
  const [isLoading, setIsLoading] = useState(true);
  const [detectedCountry, setDetectedCountry] = useState<string | null>(null);

  useEffect(() => {
    async function initializeLanguage() {
      // Initialize Google Translate callback
      initGoogleTranslate();

      // Load the Google Translate script
      loadGoogleTranslateScript();

      // Check for saved preference
      const savedLang = localStorage.getItem(STORAGE_KEY) as SupportedLanguage | null;

      if (savedLang && ['en', 'ko', 'zh-TW', 'yue'].includes(savedLang)) {
        setCurrentLanguage(savedLang);
        setIsLoading(false);

        // Apply saved language after a delay to ensure Google Translate is ready
        if (savedLang !== 'en') {
          setTimeout(() => changeLanguage(savedLang), 1500);
        }
        return;
      }

      // No saved preference - detect from IP
      try {
        const country = await detectCountry();
        setDetectedCountry(country);

        const detectedLang = country ? mapCountryToLanguage(country) : 'en';
        setCurrentLanguage(detectedLang);
        localStorage.setItem(STORAGE_KEY, detectedLang);

        // Apply detected language after a delay
        if (detectedLang !== 'en') {
          setTimeout(() => changeLanguage(detectedLang), 1500);
        }
      } catch (error) {
        console.error('Language initialization error:', error);
        setCurrentLanguage('en');
      }

      setIsLoading(false);
    }

    initializeLanguage();
  }, []);

  const handleSetLanguage = (lang: SupportedLanguage) => {
    setCurrentLanguage(lang);
    localStorage.setItem(STORAGE_KEY, lang);
    changeLanguage(lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setLanguage: handleSetLanguage,
        isLoading,
        detectedCountry,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
