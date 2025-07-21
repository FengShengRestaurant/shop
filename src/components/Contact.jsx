// src/components/Contact.jsx
import React, { useState } from 'react';
import {Helmet} from 'react-helmet';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useLanguage } from '../context/LanguageContext'; // Adjust the path if necessary
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { contactContent } from '../data/contact'; // Import translations

// Create a custom theme to align MUI with Tailwind's color palette
const theme = createTheme({
  palette: {
    primary: {
      main: '#1D4ED8', // Tailwind's blue-700
    },
    success: {
      main: '#10B981', // Tailwind's green-500
    },
    error: {
      main: '#EF4444', // Tailwind's red-500
    },
    // Add more customizations as needed
  },
});

// Custom Alert component for Snackbar
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Contact = () => {
  // Access language from context
  const { language } = useLanguage();

  // State to manage Snackbar visibility and message
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success', // can be 'success', 'error', 'warning', 'info'
  });

  // Shop details
  const email = 'fengsheng@6kpnkc.onmicrosoft.com';
  const phoneNumbers = [
    { type: 'Ordering', number: '+60167217119' },
    { type: 'Ordering', number: '+60167711538' },
  ];
  const address = '64, Jalan Bakawali 48, Taman Johor Jaya';
  const mapEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.3722035232418!2d103.79472349999998!3d1.542680100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da6c3ccc1bacf3%3A0x8d2088fcb48aba89!2sFeng%20Sheng%20(Bitter%20Gourd%20Soup)%20Restaurant!5e0!3m2!1sen!2smy!4v1733291297117!5m2!1sen!2smy';

  // Select content based on current language
  const content = contactContent[language] || contactContent.en;

  // Function to handle copying phone number
  const handleCopy = (number) => {
    navigator.clipboard
      .writeText(number)
      .then(() => {
        // Set Snackbar state to open with a success message
        setSnackbar({
          open: true,
          message: content.copySuccess(number),
          severity: 'success',
        });
      })
      .catch((err) => {
        console.error('Failed to copy!', err);
        // Set Snackbar state to open with an error message
        setSnackbar({
          open: true,
          message: content.copyFailed,
          severity: 'error',
        });
      });
  };

  // Function to open maps app
  const openMapsApp = () => {
    const query = encodeURIComponent(address);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${query}`,
      '_blank'
    );
  };

  // Function to handle Snackbar close
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="bg-white min-h-screen flex flex-col">
        {/* ✅ SEO Helmet tags */}
        <Helmet>
          <title>Contact Us – Restaurant Feng Sheng</title>
          <meta
              name="description"
              content="Get in touch with Restaurant Feng Sheng. Visit us in person or contact us via phone, WhatsApp, or email. We're open daily (except Wednesday)."
          />
          <link
              rel="canonical"
              href="https://fengshengrestaurant.github.io/shop/contact-us"
          />
        </Helmet>

        <div className="flex-grow flex flex-col justify-center items-center relative isolate">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  'polygon(0 0, 20% 10%, 30% 0, 40% 20%, 50% 5%, 60% 25%, 70% 10%, 80% 30%, 90% 15%, 100% 25%, 100% 100%, 0 100%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-bright-yellow via-cream to-orange opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />

            <div
              style={{
                clipPath:
                  'polygon(0 0, 20% 10%, 30% 0, 40% 20%, 50% 5%, 60% 25%, 70% 10%, 80% 30%, 90% 15%, 100% 25%, 100% 100%, 0 100%)',
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-bright-yellow via-cream to-orange opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />




          </div>
          <div
            className="w-[80vw] py-16 sm:py-24 lg:py-32 text-center px-4 sm:px-6 lg:px-8"
            id="contact-content"
          >
            <h1 className="text-6xl font-extrabold text-gray-900 mb-8">
              {content.contactUs}
            </h1>

            {/* Email Section */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                {content.email}
              </h2>
              <a
                href={`mailto:${email}`}
                className="text-blue-600 hover:underline"
              >
                {email}
              </a>
            </div>

            {/* Phone Numbers Section */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                {content.phoneNumbers}
              </h2>
              <ul className="space-y-2">
                {phoneNumbers.map((phone, index) => (
                  <li key={index} className="flex items-center justify-center">
                    <button
                      onClick={() => handleCopy(phone.number)}
                      className="text-blue-600 hover:underline focus:outline-none"
                    >
                      {phone.number}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Address Section */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                {content.address}
              </h2>
              <p className="text-gray-700">{address}</p>
            </div>

            {/* Map Section */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {content.ourLocation}
              </h2>
              <div className="w-full h-64 md:h-80 lg:h-96">
                <iframe
                  src={mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    borderRadius: '5px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Shop Location"
                ></iframe>
              </div>
            </div>

            {/* Open Maps App Button */}
            <div className="mt-8">
              <button
                onClick={openMapsApp}
                className="px-4 py-2 rounded-md font-semibold text-sm lg:text-base
             text-brown border border-orange bg-white bg-opacity-50
             hover:bg-bright-yellow hover:text-brown
             transition-colors duration-200 ease-in-out
             focus:outline-none focus:ring-2 focus:ring-orange focus:ring-offset-2"
                aria-label="Open In Maps App"
              >
                {content.openInMaps}
              </button>
            </div>
          </div>
        </div>

        {/* Snackbar Component */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </div>
    </ThemeProvider>
  );
};

export default Contact;
