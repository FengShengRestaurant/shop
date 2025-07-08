import React from 'react';
import reviewData from '../data/testimonials.json';
import { useLanguage } from '../context/LanguageContext'; // Language Context
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import Typography from '@mui/material/Typography';

const StarRating = ({ rating }) => {
     return (
          <div className="flex items-center mb-2 text-yellow-500">
               {Array.from({ length: 5 }, (_, i) => {
                    const filled = rating >= i + 1;
                    const half = rating >= i + 0.5 && rating < i + 1;
                    return (
                         <span key={i} className="text-lg">
                              {filled ? (
                                   <FaStar />
                              ) : half ? (
                                   <FaStarHalfAlt />
                              ) : (
                                   <FaRegStar className="text-gray-300" />
                              )}
                         </span>
                    );
               })}
               <span className="ml-2 text-sm text-gray-600">({rating.toFixed(1)})</span>
          </div>
     );
};

const Testimonials = () => {
     const reviews = reviewData.reviews;
     const { language } = useLanguage();

     return (
          <section className=" py-10">
               <h1 className="mb-10 text-center text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl leading-tight">
                    {language === 'en' && 'What Our Customers Say'}
                    {language === 'zh' && '顾客的评价'}
                    {language === 'ms' && 'Mesej Pelanggan Kami'}
               </h1>
               <h2 className="text-3xl font-bold text-center text-gray-800 mb-10"></h2>

               <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review, index) => (
                         <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
                              <div className="flex items-center space-x-4 mb-4">
                                   <img
                                        src={review.user.thumbnail}
                                        alt={review.user.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                   />
                                   <div>
                                        <p className="font-semibold text-gray-800">{review.user.name}</p>
                                        <p className="text-sm text-gray-500">
                                             {review.user.local_guide && <span className="font-medium text-orange">Local Guide · </span>}
                                             {new Date(review.iso_date).toLocaleDateString()}
                                        </p>
                                   </div>
                              </div>

                              <StarRating rating={review.rating} />

                              <p className="text-gray-700 mb-4 whitespace-pre-line">"{review.extracted_snippet?.original || 'No review text provided.'}"</p>

                              {review.details && (
                                   <div className="text-sm text-gray-500 space-y-1">
                                        <p>🍽 Food: {review.details.food}/5</p>
                                        <p>👨‍🍳 Service: {review.details.service}/5</p>
                                        <p>🏠 Atmosphere: {review.details.atmosphere}/5</p>
                                   </div>
                              )}

                              <a
                                   href={review.link}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="mt-4 inline-block text-orange font-medium hover:underline"
                              >
                                   Read full review →
                              </a>
                         </div>
                    ))}
               </div>
          </section>
     );
};

export default Testimonials;
