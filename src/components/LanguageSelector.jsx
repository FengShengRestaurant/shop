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
        aria-label={content.labels.en}
        className={`w-full lg:min-w-[130px] font-[600] px-4 py-2 border-[#E49E29] lg:px-2 lg:py-3 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          language === 'en'
              ? 'bg-orange text-white'
              : 'border text-[#4A2600] bg-white hover:bg-orange hover:text-white focus:ring-orange'
        }`}
      >
        {content.english}
      </button>

      {/* 中文 Button */}
      <button
        onClick={() => switchLanguage('zh')}
        aria-pressed={language === 'zh'}
        aria-label={content.labels.zh}
        className={`w-full lg:min-w-[130px] font-[600] px-4 py-2 border-[#E49E29] lg:px-2 lg:py-3 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          language === 'zh'
            ? 'bg-orange text-white'
              : 'border  text-[#4A2600] bg-white hover:bg-orange hover:text-white focus:ring-orange'
        }`}
      >
        {content.chinese}
      </button>

      {/* Bahasa Melayu Button */}
      <button
        onClick={() => switchLanguage('ms')}
        aria-pressed={language === 'ms'}
        aria-label={content.labels.ms}
        className={`w-full lg:min-w-[130px] font-[600] px-4 py-2 border-[#E49E29] lg:px-2 lg:py-3 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          language === 'ms'
            ? 'bg-orange text-white'
              : 'border  text-[#4A2600] bg-white hover:bg-orange hover:text-white focus:ring-orange'
        }`}
      >
        {content.malay}
      </button>
    </div>
  );
};

export default LanguageSelector;
