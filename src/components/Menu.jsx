import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';
import { Helmet } from "react-helmet";


// Import menu item JSON
import MenuItemData from '../data/menu.json';

const Menu = () => {
  const { language } = useLanguage();
  const [menuItems, setMenuItems] = useState([]);
  const [filterType, setFilterType] = useState('soup'); // Default shows all

  useEffect(() => {
    setMenuItems(MenuItemData.menu_items);
  }, []);

  const content = {
    en: { heading: 'Menu Under Preparation', message: 'We are working hard to bring you delicious offerings!', button: 'Go Back to Home' },
    zh: { heading: '菜单准备中', message: '我们正在努力为您带来美味的菜品。', button: '返回首页' },
    ms: { heading: 'Menu Sedang Disediakan', message: 'Kami sedang bekerja keras untuk membawa anda hidangan lazat.', button: 'Kembali ke Halaman Utama' },
  };

  const { heading, message, button } = content[language] || content.en;

  // Filter menu items based on the selected type
  const filteredMenu =
    filterType === '' ? menuItems : menuItems.filter((item) => item.type === filterType);

  return (
    <div className="bg-white min-h-screen">
      {/* ✅ SEO Helmet tags */}
      <Helmet>
        <title>Our Menu – Restaurant Feng Sheng</title>
        <meta
            name="description"
            content="Explore our delicious Hakka cuisine menu including bitter gourd soup, pork belly dishes, and more. Authentic flavors at affordable prices."
        />
        <link
            rel="canonical"
            href="https://fengshengrestaurant.github.io/shop/menu"
        />
      </Helmet>

      {/* Navigation Bar */}
      <nav className="sticky top-20 z-50 bg-white shadow-md">
        <div className="flex gap-4 p-4 overflow-x-auto scrollbar-hide">

          {/* Menu Categories */}
          {menuItems.map((category) => (
            <button
              key={category.type}
              onClick={() => {
                setFilterType(category.type);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`text-lg px-4 lg:px-5 py-2 lg:py-3 whitespace-nowrap rounded-md hover:bg-bright-yellow ease-in-out duration-200 ${filterType === category.type
                  ? 'bg-orange font-bold'
                  : 'text-gray-700 hover:bg-orange-200 font-semibold'
                }`}
            >
              {category.name[language]}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-4 sm:p-8">
        {filteredMenu.length === 0 ? (
          <div className="text-center mt-24">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{heading}</h1>
            <p className="text-lg text-gray-600">{message}</p>
            <Link
              to="/"
              className="inline-block mt-8 rounded-md bg-orange px-5 py-3 text-white font-semibold hover:bg-bright-yellow hover:text-brown duration-300"
            >
              {button}
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {filteredMenu.map((category) =>
              category.items.map((item, index) => (
                <MenuItem
                  key={index}
                  name={item.name[language]}
                  photoUrl={item.photo_url || 'default-image.png'}
                />
              ))
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default Menu;
