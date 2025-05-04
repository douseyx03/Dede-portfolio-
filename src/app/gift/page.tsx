'use client';

import {useEffect, useState} from 'react';

export default function GiftPage() {
  const [showDede, setShowDede] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowDede(prev => !prev);
    }, 1500); // Change name every 1.5 seconds

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
        Joyeux anniversaire Dédé!
      </h1>
      <div className="text-6xl md:text-8xl font-extrabold text-accent animate-pulse">
        {showDede ? 'For Dédé' : 'By Dousey'}
      </div>
      <p className="text-xl text-accent font-medium mt-8">
        {showDede ? '❤️' : '🥰'}
      </p>

    
    </div>
    <footer className="container mx-auto px-4 py-4 max-w-4xl text-center text-muted-foreground text-sm">
          © Dédé Couro Diop 2025 - #dousey
      </footer>
    </>
    
  );
}
