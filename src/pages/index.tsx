import React from 'react';
import { Inter } from 'next/font/google';

import ImageSlider from 'coffee/components/features/home/imageSlider/ImageSlider';
import Story from 'coffee/components/features/home/story/Story';
import AttractiveMenu from 'coffee/components/features/home/attractiveMenu/attractiveMenu';
import Discount from 'coffee/components/features/home/discount/discount';
import menu from 'coffee/data/Menu'; // Import data menu yang diperlukan

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <main
            className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
        >
            <ImageSlider />
            <Story />
            <AttractiveMenu menu={menu} /> {/* Menyediakan prop menu */}
            <Discount />
        </main>
    );
}
