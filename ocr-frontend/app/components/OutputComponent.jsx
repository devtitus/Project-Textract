"use client";
import React, { useState } from 'react';

const OutputComponent = ({ ExtractedText }) => {
    const [showCopiedBadge, setShowCopiedBadge] = useState(false);

    // Function to copy text to clipboard
    const handleCopyText = () => {
        if (ExtractedText) {
            navigator.clipboard.writeText(ExtractedText)
                .then(() => {
                    setShowCopiedBadge(true); // Show "Copied" badge
                    setTimeout(() => setShowCopiedBadge(false), 2000); // Hide after 2 seconds
                })
                .catch((err) => {
                    console.error('Failed to copy text: ', err);
                });
        }
    };

    // Function to download text as a .txt file
    const handleDownloadText = () => {
        if (ExtractedText) {
            const blob = new Blob([ExtractedText], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'extracted-text.txt';
            a.click();
            URL.revokeObjectURL(url);
        }
    };

    return (
        <div className='flex flex-col items-center mt-4 w-3/5 px-16'>
            <div className='w-full flex flex-col gap-4 bg-[#F9F2FF] border border-[#A855F740] p-10 rounded-2xl shadow-[0px_2px_4px_0px_rgba(0,0,0,0.04),0px_5px_10px_0px_rgba(0,0,0,0.04)]'>
                <div className='flex flex-row items-center justify-between'>
                    <h2 className='text-[#374151] font-poppins text-xl'>Extracted Text:</h2>
                    <div className='flex flex-row gap-3 items-center w-auto relative'> {/* Add relative here */}
                        <button
                            onClick={handleCopyText}
                            className="border border-[#E5E7EB] p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <img src="/copy.svg" alt="Copy Icon" className="w-4 h-4" />
                        </button>
                        {/* "Copied" Badge */}
                        {showCopiedBadge && (
                            <div className="absolute -top-8 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded">
                                Copied!
                            </div>
                        )}
                        <button
                            onClick={handleDownloadText}
                            className="border border-[#E5E7EB] p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <img src="/download.svg" alt="Download Icon" className="w-4 h-4" />
                        </button>
                    </div>
                </div>
                <pre
                    className='border border-[#E5E7EB] p-4 font-poppins'
                    style={{
                        whiteSpace: 'pre-wrap',
                        background: '#fff',
                        borderRadius: '12px',
                        color: ExtractedText ? '#000' : '#4B5563', // Change text color for placeholder
                        fontStyle: ExtractedText ? 'normal' : 'italic', // Italicize placeholder text
                    }}
                >
                    {ExtractedText || 'No text extracted yet. Upload an image to extract text.'}
                </pre>
            </div>
        </div>
    );
};

export default OutputComponent;