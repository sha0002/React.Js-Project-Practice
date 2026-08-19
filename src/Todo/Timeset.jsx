import React, { useEffect, useState } from 'react';

const MyComponent = () => {
    const [dateTime, setDateTime] = useState('');

    useEffect(() => {
        const timestart = setInterval(() => {
            const now = new Date();
            const dateformat = now.toLocaleDateString();
            const timeformat = now.toLocaleTimeString();

            setDateTime(`${dateformat} - ${timeformat}`);
        }, 1000);

        // Cleanup function: clears the interval when the component is unmounted
        return () => clearInterval(timestart);
    }, []); // Empty dependency array ensures this effect runs only once on mount/unmount


    return (
        <div className='text-center'>
            <h1 className='text-light'>{dateTime}</h1>
        </div>
    );
}

export default MyComponent;
