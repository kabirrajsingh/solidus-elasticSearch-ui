import { useState, useEffect } from 'react';

const Notification = ({ message, type = 'success', duration = 5000, onClose }) => {
    const [visible, setVisible] = useState(true);

    const handleClose = () => {
        setVisible(false);
        if (onClose) {
            onClose();
        }
    };

    // Auto-close after specified duration
    useEffect(() => {
        const timer = setTimeout(() => {
            handleClose();
        }, duration);

        return () => clearTimeout(timer); // Cleanup timer on component unmount
    }, [duration]);

    if (!visible) return null;

    return (
        <div
            className={`fixed bottom-5 right-5 flex items-center justify-between p-4 rounded-lg shadow-lg transition-opacity duration-300 
            ${type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'} 
            ${visible ? 'opacity-100' : 'opacity-0'}`}
            style={visible ? {} : { pointerEvents: 'none' }} // Apply pointer-events only when it's closing
        >
            <span>{message}</span>
            <button
                className="ml-4 text-lg font-bold focus:outline-none"
                onClick={handleClose}
                style={{ pointerEvents: 'auto' }} // Ensure the close button is clickable
            >
                &times;
            </button>
        </div>
    );
};

export default Notification;
