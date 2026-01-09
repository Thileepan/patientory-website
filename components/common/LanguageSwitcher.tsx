import { useState, useCallback } from 'react';
import classNames from 'classnames';
import { useLanguage, LANGUAGES, SupportedLanguage } from '../../lib/language/LanguageContext';
import styles from '../../styles/components/common/languageSwitcher.module.scss';

interface Props {
  theme?: 'light' | 'dark';
  mobile?: boolean;
}

export default function LanguageSwitcher({ theme = 'light', mobile = false }: Props) {
  const { currentLanguage, setLanguage, isLoading } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleLanguageSelect = useCallback(
    (lang: SupportedLanguage) => {
      setLanguage(lang);
      setIsOpen(false);
    },
    [setLanguage]
  );

  const currentLangData = LANGUAGES.find((l) => l.code === currentLanguage);

  if (mobile) {
    return (
      <div className={classNames(styles.mobileWrapper, 'notranslate')} translate="no">
        <button onClick={toggleDropdown} className={styles.mobileTrigger}>
          <i className="fas fa-globe"></i>
          <span>{currentLangData?.nativeLabel || 'English'}</span>
          <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
        </button>
        <div
          className={classNames(styles.mobileDropdown, {
            [styles.active]: isOpen,
          })}
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageSelect(lang.code)}
              className={classNames(styles.mobileLangOption, {
                [styles.selected]: lang.code === currentLanguage,
              })}
            >
              <span className={styles.mobileNativeLabel}>{lang.nativeLabel}</span>
              {lang.code !== 'en' && (
                <span className={styles.mobileEnglishLabel}>{lang.englishLabel}</span>
              )}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className={classNames(styles.wrapper, 'notranslate', { [styles.open]: isOpen })}
      translate="no"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className={styles.globeTrigger} aria-label="Change language">
        <i className="fas fa-globe"></i>
      </button>
      <div className={styles.dropdown}>
        {LANGUAGES.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageSelect(lang.code)}
            className={classNames(styles.option, {
              [styles.selected]: lang.code === currentLanguage,
            })}
          >
            <span className={styles.nativeLabel}>{lang.nativeLabel}</span>
            {lang.code !== 'en' && (
              <span className={styles.englishLabel}>{lang.englishLabel}</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
