import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import Notification from './Notification'; // Import Notifications component
import { Link } from 'react-router-dom';
import Testimonials from './Testimonials';
export default function Hero() {
  const { language } = useLanguage();

  const content = {
    en: {
      welcome: 'Welcome to',
      businessName: 'Restaurant Feng Sheng',
      description:
        'We offer authentic Hakka cuisine, bringing you a healthy and delicious dining experience. Come and try our signature dishes!',
      buttonText: 'Our Menu',
    },
    zh: {
      welcome: '欢迎光临',
      businessName: '丰盛苦瓜汤',
      description:
        '我们提供正宗的客家菜，带给您健康、美味的用餐体验。快来尝试我们的特色美食吧！',
      buttonText: '我们的菜单',
    },
    ms: {
      welcome: 'Selamat Datang ke',
      businessName: 'Restoran Feng Sheng',
      description:
        'Kami menawarkan masakan Hakka yang autentik, membawa anda pengalaman menjamu selera yang sihat dan lazat. Datang dan cuba hidangan istimewa kami!',
      buttonText: 'Menu Kami',
    },
  };

  const { welcome, businessName, description, buttonText } =
    content[language] || content.en;

  return (
    <div className="bg-white flex flex-col">
      {/* Hero Section */}
      <div className="min-h-screen flex-grow flex flex-col justify-center items-center relative isolate">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-bright-yellow via-cream to-orange opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-3xl pt-28 pb-32 sm:pt-28 sm:pb-48 lg:pb-56  text-center">
          <h1 className="text-center text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl leading-tight">
            {welcome}
            <br />
            <span className="text-orange">{businessName}</span>
          </h1>
          <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl/8">
            {description}
          </p>
          <div className="mt-10">
            <Link
              to="/menu"
              className="inline-block rounded-md z-10 bg-orange px-5 py-3 text-white font-semibold hover:bg-bright-yellow hover:text-brown duration-300 ease-in-out"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>

      <Testimonials />
      {/* Notifications Section */}
      <Notification id='notification' />
    </div>
  );
}
