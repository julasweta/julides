import React from 'react';
import { SocialIcon } from 'react-social-icons';

const SocialLinks: React.FC = () => {
    return (
        <div className="social">
            <SocialIcon url="https://www.instagram.com/julianna1711" aria-label="instagram" />
            <SocialIcon url="https://www.facebook.com/jula92" />
            <SocialIcon url="https://t.me/julianna1711" network="telegram" />
        
        </div>
    );
};

export {SocialLinks};