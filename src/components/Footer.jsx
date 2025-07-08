import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useLanguage } from '../context/LanguageContext'; // Import Language Context

const Footer = () => {
  const { language } = useLanguage(); // Access the current language

  // Footer content for different languages
  const content = {
    en: {
      copyright: '&copy; 2024 Restaurant Feng Sheng. All rights reserved.',
      businessHours: 'Business Hours:',
      openTime: 'Monday - Sunday: 11:30 AM - 8:30 PM',
      closedTime: 'Closed on Wednesday',
    },
    zh: {
      copyright: '&copy; 2024 丰盛苦瓜汤餐厅。版权所有。',
      businessHours: '营业时间:',
      openTime: '周一至周日: 上午11:30 - 晚上8:30',
      closedTime: '每周三休息',
    },
  };
  

  const { copyright, businessHours, openTime, closedTime } =
    content[language] || content.en;

  return (
    <footer className="z-10 bg-brown text-cream py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 px-4">
        {/* Left Section */}
        <p
          className="text-sm font-medium text-bright-yellow"
          dangerouslySetInnerHTML={{ __html: copyright }}
        ></p>

        {/* Middle Section */}
        <div className="text-cream text-sm">
          <p>{businessHours}</p>
          <p>{openTime}</p>
          <p>{closedTime}</p>
        </div>

        {/* Right Section */}
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/share/182z5qTs1i/?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bright-yellow hover:text-orange duration-300 ease-in-out text-xl"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="mt-4 border-t border-cream opacity-50"></div>
    </footer>
  );
};

export default Footer;
