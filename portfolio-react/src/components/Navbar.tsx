import React, { useState } from 'react';

interface NavItem {
    label: string;
    href: string;
}

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    
    const navItems: NavItem[] = [
        { label: 'Home', href: '#hero' },
        { label: 'About', href: '#about' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' }
    ];

    return (
        <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm text-white shadow-lg z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo/Brand */}
                    <div className="flex-shrink-0">
                        <img className="h-8 w-8" src="/dev.png" alt="Logo"/>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="px-3 py-2 rounded-md text-sm font-medium
                                    text-gray-300 hover:text-white hover:bg-gray-700
                                    transition-all duration-300 ease-in-out"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 
                            hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="block px-3 py-2 rounded-md text-base font-medium
                                text-gray-300 hover:text-white hover:bg-gray-700
                                transition-all duration-300 ease-in-out"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;