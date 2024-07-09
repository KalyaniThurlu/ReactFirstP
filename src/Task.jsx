import React, { useState, useEffect } from 'react';

export function DateTimeDisplay() {
    // State to hold the current date and time
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    // State to hold the greeting message
    const [greeting, setGreeting] = useState('');

    // Function to update the current date and time
    const updateDateTime = () => {
        setCurrentDateTime(new Date());
    };

    useEffect(() => {
        const updateGreeting = () => {
            const currentHour = new Date().getHours();

            if (currentHour <= 18) {
                setGreeting('Good morning');
                
            } else if (currentHour >= 17) {
                setGreeting('Good night');
            } else {
                setGreeting('Good afternoon');
            }
        };

        // Update greeting initially
        updateGreeting();

        // Update the greeting every minute (optional)
        const interval = setInterval(updateGreeting, 60000); // Update every minute

        // Cleanup function to clear the interval
        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures it runs only once on component mount

    // Update the date and time every second (optional)
    useEffect(() => {
        const interval = setInterval(updateDateTime, 1000);

        // Cleanup function to clear the interval
        return () => clearInterval(interval);
    }, []);

    // Render different images based on the greeting message
    const renderGreetingImage = () => {
        if (greeting === 'Good morning') {
            return <img src="https://www.fnp.com/assets/images/custom/quotes/good-morning/good-morning-sticker-6th.jpg" alt="Good Morning" width="300" height="300" />;
        } else if (greeting === 'Good afternoon') {
            return <img src="https://i.pinimg.com/736x/94/58/47/9458478cd66752498c38156450b8843e.jpg" alt="Good Afternoon" width="300" height="300" />;
        } else if (greeting === 'Good night') {
            return <img src="https://getimagehub.com/wp-content/uploads/2024/01/Good-Night-Pic-HD.webp" alt="Good Night" width="300" height="300" />;
        } else {
            return null; // Default case or if greeting state is not set
        }
    };

    return (
        <div>
            <h2>{greeting}</h2>
            <p>{currentDateTime.toLocaleString()}</p>
            {renderGreetingImage()}
        </div>
    );
}