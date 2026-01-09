import { createContext, useContext } from 'react';

export type SupportedLanguage = 'en' | 'ko' | 'zh-TW' | 'yue';

export interface LanguageContextType {
  currentLanguage: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  isLoading: boolean;
  detectedCountry: string | null;
}

export const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: 'en',
  setLanguage: () => {},
  isLoading: true,
  detectedCountry: null,
});

export const useLanguage = () => useContext(LanguageContext);

export const LANGUAGES: {
  code: SupportedLanguage;
  nativeLabel: string;
  englishLabel: string;
}[] = [
  { code: 'en', nativeLabel: 'English', englishLabel: 'English' },
  { code: 'ko', nativeLabel: '한국어', englishLabel: 'Korean' },
  { code: 'zh-TW', nativeLabel: '繁體中文', englishLabel: 'Chinese (Traditional)' },
  { code: 'yue', nativeLabel: '廣東話', englishLabel: 'Cantonese' },
];
