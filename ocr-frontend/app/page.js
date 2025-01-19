'use client'; // Mark this as a Client Component

import { useState } from 'react';
import Header from './components/Header';
import UploadComponent from './components/UploadComponent';
import OutputComponent from './components/OutputComponent';

export default function Home() {
  const [text, setText] = useState('');

  return (
    <div className='w-full h-full pb-4'>
      <Header />
      <div className='sm:flex sm:flex-col sm:justify-center sm:h-full xs:flex xs:flex-col xs:justify-center xs:h-full md:flex md:flex-col md:justify-center md:h-full lg:flex lg:flex-col lg:justify-center lg:h-full'>
        <div className='flex flex-col items-center justify-center lg:mt-16 md:mt-16 2xl:mt-0 gap-3 px-4 md:px-0'>
          <h1 className='font-poppins text-2xl sm:text-3xl md:text-4xl font-bold text-[#1F2937] mt-4 text-center'>
            <span className='special-text'>Snap</span> a Pic, Get Text <span className='special-text'>Quick</span>
          </h1>
          <p className='xs:w-[80%] font-poppins text-base md:text-lg font-normal text-[#4B5563] text-center'>
            Extract text from photos instantly. Snap, scan, and get your text—fast and precise!
          </p>
        </div>
        <div className='w-full flex flex-row justify-center'>
          <UploadComponent onTextExtracted={setText} />
        </div>
        {/* Always render OutputComponent */}
        <div className='w-full flex flex-col items-center justify-center'>
          <OutputComponent ExtractedText={text} />
          <span className='text-[#4B5563] font-poppins align-middle text-sm mt-8'>
            <span className='special-text'>© 2025</span> Textract. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
}