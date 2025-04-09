import React from 'react';

interface ContentSectionProps {
    children: React.ReactNode;
    backgroundImage?: string; // Optional background image
    backgroundPosition?: 'left' | 'right'; // Background alignment
}

export const ContentSection: React.FC<ContentSectionProps> = ({ children, backgroundImage, backgroundPosition = 'right' }) => {
    const rowPosition = {
        left: 'flex-row-reverse',
        right: 'flex-row'
    }[backgroundPosition];

    return (
        <div className={`border-t-8 border-[#222222] text-center p-4 py-16 min-h-[466px] flex items-center justify-center`}>
            <div className={`flex ${rowPosition} w-[calc(100%_-_96px)] max-w-[calc(100%_-_496px)] mx-auto relative justify-between items-center`}>
                {children}
                {backgroundImage && (
                    <img src={backgroundImage} alt="content" />
                )}
            </div>
        </div>
    );
};
