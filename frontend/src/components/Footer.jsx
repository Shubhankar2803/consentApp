import React from 'react';

const Footer = () => (
    <footer className="w-full py-4 text-center text-gray-400 text-sm border-t bg-black">
        &copy; {new Date().getFullYear()} Consent. All rights reserved.
    </footer>
);

export default Footer;