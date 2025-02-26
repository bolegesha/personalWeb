'use client';

import React from 'react';
import Image from 'next/image';

export function KnightLogo() {
  return (
    <div className="relative w-10 h-10 flex items-center justify-center">
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={60}
        height={60}
        className="object-contain"
        priority
      />
    </div>
  );
} 