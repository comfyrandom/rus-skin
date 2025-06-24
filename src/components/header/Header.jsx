import React, { useState, useEffect } from 'react';
import Logo from './Logo.jsx';
import SearchBar from './SearchBar.jsx';
import ProductCart from './ProductCart.jsx';
import NavLinks from './NavLinks.jsx';
import MenuToggleButton from './MenuToggleButton.jsx';
import {Auth} from "./Auth.jsx";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLinkClick = () => setIsMenuOpen(false);

    return (
        <header className="bg-white shadow-md fixed w-full top-0 z-50 py-4">
            <div className="container mx-auto px-4 md:px-16 lg:px-20">
                <div className="flex items-center w-full justify-between">
                    <Logo />

                    <div className="hidden lg:flex items-center flex-grow mx-8">
                        <SearchBar className="w-full" />
                    </div>

                    <div className="flex items-center flex-none gap-4">
                        <NavLinks onLinkClick={handleLinkClick} />
                        <ProductCart />
                        <MenuToggleButton
                            isOpen={isMenuOpen}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        />
                        <Auth />
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="lg:hidden absolute left-0 right-0 bg-white shadow-lg py-4 px-6 mt-2">
                        <SearchBar className="mb-4" inputClassName="w-full" />
                        <NavLinks mobile onLinkClick={handleLinkClick} />
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;