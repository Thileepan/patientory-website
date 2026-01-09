import { SupportedLanguage } from './LanguageContext';

interface GeoResponse {
  countryCode?: string;
  status?: string;
}

export async function detectCountry(): Promise<string | null> {
  try {
    const response = await fetch('http://ip-api.com/json/?fields=countryCode,status');
    const data: GeoResponse = await response.json();

    if (data.status === 'success' && data.countryCode) {
      return data.countryCode;
    }
    return null;
  } catch (error) {
    console.error('Geolocation detection failed:', error);
    return null;
  }
}

export function mapCountryToLanguage(countryCode: string): SupportedLanguage {
  switch (countryCode) {
    case 'KR':
      return 'ko';
    case 'HK':
      return 'zh-TW';
    default:
      return 'en';
  }
}
