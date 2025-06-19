import React from 'react';

const MainContent = ({ children }) => {
    return (
        <div className="main-content container mx-auto px-4 md:px-16 lg:px-20 lg:max-w-[1366px] mt-20 flex-1">
            {children}
        </div>
    );
};

export default MainContent;