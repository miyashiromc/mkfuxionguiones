
import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="text-center py-6 border-b-2 border-cyan-500/30">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400">
        TikTok Script Storyboard
      </h1>
      <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">{title}</p>
    </header>
  );
};

export default Header;
