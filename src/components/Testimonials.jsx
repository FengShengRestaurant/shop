import React, { useState, UseEffect, useEffect } from 'react';
import reviewData from '../data/testimonials.json';
import { useLanguage } from '../context/LanguageContext'; // Language Context
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import { TrySharp } from '@mui/icons-material';


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

// API request to fetch the reviews
// https://serpapi.com/search?engine=google_maps_reviews&api_key=66ef02937f96e6b9dd52649e3f616678e78085be8c10201b344e20c3adc556bc&place_id=ChIJ86wbzDxs2jERibqKtPyIII0&sort_by=newestFirst

const reviewsUrl = 'https://serpapi-proxy.bensonngu25.workers.dev'

const Testimonials = () => {
     const [reviews, setReviews] = useState([]);
     const { language } = useLanguage();

     const fetchReviews = async () => {
          try {
               const response = await fetch(
                    reviewsUrl
               )
               const data = await response.json();
               if (data && data.reviews) {
                    setReviews(data.reviews);
               } else {
                    console.error('No reviews found in the response');
               }
          } catch (error) {
               console.error('Failed to fetch reviews:', error);
          }
     }

     useEffect(() => {
          fetchReviews();
     }, [])



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
                         <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col">
                              <div className="flex items-center space-x-4 mb-4">
                                   <img
                                        src={review.user.thumbnail}
                                        alt={review.user.name}
                                        className="w-12 h-12 object-cover"
                                   />
                                   <div>
                                        <p className='text-lg font-semibold text-gray-900'>{review.user.name}</p>
                                        <p className="text-sm text-gray-500">
                                             {review.user.local_guide && <span className="font-medium text-orange">Local Guide · </span>}
                                             {new Date(review.iso_date).toLocaleDateString()}
                                        </p>
                                   </div>
                              </div>

                              <StarRating rating={review.rating} />

                              <p className="text-gray-700 mb-4 whitespace-pre-line">{review.extracted_snippet?.original || 'No review text provided.'}</p>

                              {review.details && (
                                   <div className="text-sm text-gray-500 space-y-1">
                                        <p>🍽 Food: {review.details.food}/5</p>
                                        <p>👨‍🍳 Service: {review.details.service}/5</p>
                                        <p>🏠 Atmosphere: {review.details.atmosphere}/5</p>
                                   </div>
                              )}
                              <div className='flex justify-end mt-auto pt-4'>
                                   <a
                                        href={review.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 inline-flex items-center gap-1 text-orange font-medium"
                                   >
                                        Read full review <HiArrowRight className="w-5 h-5 text-orange inline-block" />

                                   </a>
                              </div>
                         </div>
                    ))}
               </div>
          </section>
     );
};

export default Testimonials;
