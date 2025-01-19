'use client'; // Mark this as a Client Component

import { useState } from 'react';
import Header from './components/Header';
import UploadComponent from './components/UploadComponent';
import OutputComponent from './components/OutputComponent';

export default function Home() {
  const [text, setText] = useState('');

  return (
    <div className='bg-bg-gradient w-full h-full pb-4'>
      <Header />
      <div className='flex flex-col items-center justify-center mt-16 gap-3'>
        <h1 className='font-poppins text-4xl font-bold text-[#1F2937] mt-4'><span className='special-text'>Snap</span> a Pic, Get Text <span className='special-text'>Quick</span></h1>
        <p className='font-poppins text-lg font-normal text-[#4B5563]'>Extract text from photos instantly. Snap, scan, and get your text—fast and precise!</p>
      </div>
      <div className='w-full flex flex-row justify-center'>
        <UploadComponent onTextExtracted={setText} />
      </div>
      {/* Always render OutputComponent */}
      <div className='w-full flex flex-col items-center justify-center'>
        <OutputComponent ExtractedText={text} />
        <span className='text-[#4B5563] font-poppins align-middle text-sm mt-8'><span className='special-text'>© 2025</span> Textract. All rights reserved.</span>
      </div>
    </div>
  );
}