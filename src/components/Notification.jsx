import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext'; // Language Context
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import EventIcon from '@mui/icons-material/Event';
import SellIcon from '@mui/icons-material/Sell';
import AnnouncementIcon from '@mui/icons-material/Announcement';

// Import notifications JSON
import notificationsData from '../data/notification.json'; // Adjust path if necessary

const Notification = () => {
    const { language } = useLanguage(); // Get the current language
    const [notifications, setNotifications] = useState([]);

    // Load and filter notifications
    useEffect(() => {
        const now = new Date();
        const activeNotifications = notificationsData.notifications.filter((notification) => {
            const deadline = new Date(notification.deadline);
            return deadline > now;
        });
        setNotifications(activeNotifications);
    }, []);

    const getImageUrl = (imageName) => {
        if (imageName.startsWith('http') || imageName.startsWith('https')) {
            return imageName;
        }
        return `./img/${imageName}`;
    }

    // Get the appropriate icon for notification type
    const getNotificationIcon = (type) => {
        switch (type) {
            case 'closure':
                return <EventIcon sx={{ color: '#E49E29' }} />;
            case 'sale':
                return <SellIcon sx={{ color: '#FDCB58' }} />;
            case 'announcement':
                return <AnnouncementIcon sx={{ color: '#F6D7A7' }} />;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen relative isolate py-16 px-4 sm:px-6 lg:px-8">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(0 10%, 15% 20%, 35% 5%, 50% 25%, 65% 10%, 85% 30%, 100% 15%, 100% 85%, 85% 70%, 65% 90%, 50% 75%, 35% 95%, 15% 80%, 0 100%)',
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-bright-yellow via-cream to-orange opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />

            </div>
            <h1 className="mb-10 text-center text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl leading-tight">
                {language === 'en' && 'Latest Messages from the Shop'}
                {language === 'zh' && '店铺最新消息'}
                {language === 'ms' && 'Mesej Terkini dari Kedai'}
            </h1>

            <Box className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {notifications.map((notification) => (
                    <Card
                        key={notification.id}
                        sx={{
                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                            boxShadow: 3,
                            borderRadius: '12px',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        {notification.image_url && (
                            <CardMedia
                                component="img"
                                sx={{
                                    height: 500,
                                    objectFit: 'cover',
                                }}
                                image={getImageUrl(notification.image_url)}
                                alt={notification.title[language]}
                            />
                        )}
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                {getNotificationIcon(notification.type)}
                                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#6B3A19' }}>
                                    {notification.title[language]}
                                </Typography>
                            </Box>
                            <Typography variant="body1" sx={{ color: '#1F2937' }}>
                                {notification.message[language]}
                            </Typography>
                        </CardContent>
                        <IconButton
                            size="small"
                            sx={{
                                alignSelf: 'flex-end',
                                mr: 1,
                                color: '#E49E29',
                            }}
                            onClick={() =>
                                setNotifications((prev) => prev.filter((notif) => notif.id !== notification.id))
                            }
                        >
                        </IconButton>
                    </Card>
                ))}
            </Box>

            {notifications.length === 0 && (
                <Typography variant="body1" className="text-center text-gray-600 mt-4">
                    {language === 'en' && 'No active notifications at the moment.'}
                    {language === 'zh' && '目前没有活跃的通知。'}
                    {language === 'ms' && 'Tiada notifikasi aktif buat masa ini.'}
                </Typography>
            )}
        </div>
    );
};

export default Notification;
