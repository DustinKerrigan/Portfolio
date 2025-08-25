import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
                <div className="flex justify-center space-x-4">
                    <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;