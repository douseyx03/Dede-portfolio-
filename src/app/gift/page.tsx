'use client';

import Image from 'next/image';
import {useEffect, useState} from 'react';

export default function GiftPage() {
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    // Generate a random number between 1 and 10 (inclusive)
    setRandomNumber(Math.floor(Math.random() * 10) + 1);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">
        Joyeux anniversaire Dédé!
      </h1>
      <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg mb-8">
        <Image
          src={`https://picsum.photos/id/${
            randomNumber + 100
          }/256/256`}
          alt="Fleurs"
          width={256}
          height={256}
          sizes="(max-width: 768px) 100vw, 256px"
          className="object-cover"
          data-ai-hint="flowers"
        />
      </div>
      <p className="text-xl text-accent font-medium">Seydou 🙂</p>
    </div>
  );
}

