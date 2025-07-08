// src/components/LanguageSelector.jsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext'; // Adjust the path if necessary
import { contactContent } from '../data/contact'; // Import translations

const LanguageSelector = () => {
  const { language, switchLanguage } = useLanguage();

  // Select content based on current language for button labels
  const content = contactContent[language] || contactContent.en;

  return (
    <div className="space-y-4 lg:space-y-0 lg:flex lg:space-x-4 text-xs lg:text-base">
      {/* English Button */}
      <button
        onClick={() => switchLanguage('en')}
        aria-pressed={language === 'en'}
        className={`w-full lg:min-w-[130px] px-4 py-2 lg:px-2 lg:py-1 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          language === 'en'
            ? 'bg-orange text-white'
            : 'border border-orange text-orange bg-transparent hover:bg-bright-yellow focus:ring-orange hover:text-black'
        }`}
      >
        {content.english}
      </button>

      {/* 中文 Button */}
      <button
        onClick={() => switchLanguage('zh')}
        aria-pressed={language === 'zh'}
        className={`w-full lg:min-w-[130px] px-4 py-2 lg:px-2 lg:py-1 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          language === 'zh'
            ? 'bg-orange text-white'
            : 'border border-orange text-orange bg-transparent hover:bg-bright-yellow focus:ring-orange hover:text-black'
        }`}
      >
        {content.chinese}
      </button>

      {/* Bahasa Melayu Button */}
      <button
        onClick={() => switchLanguage('ms')}
        aria-pressed={language === 'ms'}
        className={`w-full lg:min-w-[130px] px-4 py-2 lg:px-2 lg:py-1 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          language === 'ms'
            ? 'bg-orange text-white'
            : 'border border-orange text-orange bg-transparent hover:bg-bright-yellow focus:ring-orange hover:text-black'
        }`}
      >
        {content.malay}
      </button>
    </div>
  );
};

export default LanguageSelector;
