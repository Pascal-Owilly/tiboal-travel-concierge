import React from 'react';
import './styles.css';

const WhatsAppChat = () => {
    const whatsappUrl = 'https://wa.me/+254123456789'; // Replace with your number

    return (
        <div className="whatsapp-chat">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <img src="path-to-whatsapp-icon.png" alt="Chat with us on WhatsApp" />
            </a>
        </div>
    );
};

export default WhatsAppChat;