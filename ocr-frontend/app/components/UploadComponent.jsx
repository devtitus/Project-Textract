"use client";
import { useState } from "react";
import { useDropzone } from 'react-dropzone';
import React from 'react';

const UploadComponent = ({ onTextExtracted }) => {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (acceptedFiles) => {
        if (Array.isArray(acceptedFiles)) {
            setFile(acceptedFiles[0]);
        } else {
            setFile(acceptedFiles.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) return;

        setLoading(true);
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/ocr`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to process image');
            }

            const data = await response.json();
            onTextExtracted(data.text); // Ensure this is called
        } catch (error) {
            console.error('Error:', error);
            onTextExtracted('Failed to extract text. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: handleFileChange,
        accept: 'image/*',
        multiple: false,
    });

    return (
        <div className="flex flex-col items-center mt-8 w-full lg:w-3/5 md:w-full px-4 md:px-16">
            <div className="w-full bg-[#F9F2FF] border border-[#A855F740] p-4 md:p-8 rounded-2xl shadow-[0px_2px_4px_0px_rgba(0,0,0,0.04),0px_5px_10px_0px_rgba(0,0,0,0.04)]">
                <div
                    {...getRootProps()}
                    className={`w-full h-[200px] xs:h-[230px] md:h-[280px] rounded-lg border-dashed border border-[#9333EA] flex flex-col items-center justify-center cursor-pointer bg-white ${isDragActive ? 'border-[#9333EA]' : ''
                        }`}
                    style={{
                        backdropFilter: 'blur(10px)',
                        background: 'rgba(255, 255, 255, 0.7)',
                    }}
                >
                    <input {...getInputProps()} />
                    <div className="text-center flex flex-col items-center">
                        <img src="/upload.svg" className="w-12 xs:w-10 md:w-16 h-auto" />
                        <p className="text-[#374151] font-poppins font-semibold text-lg md:text-xl mt-4">Drag & Drop Your File Here</p>
                        <p className="text-base md:text-lg font-poppins text-[#4B5563] mt-2">Supported formats (png, jpg, jpeg, bmp, tiff, tif)</p>
                        <button
                            type="button"
                            className="mt-3 px-4 md:px-6 py-2 md:py-3 font-poppins bg-[#FFFFFF80] text-black border border-[#1e1e1e58] rounded-lg hover:bg-[#9333EA] hover:text-white"
                        >
                            Choose File
                        </button>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-4">
                <button
                    type="submit"
                    disabled={loading || !file}
                    className={`flex flex-row gap-2 font-poppins items-center px-6 sm:px-6 sm:py-4 xs:px-6 xs:py-4 md:px-8 py-3 md:py-4 text-white rounded-xl text-base md:text-lg ${loading || !file
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-[#9333EA] to-[#3B82F6] shadow-none hover:shadow-[0_0_8px_#9333EA] transition-all ease-in-out duration-500"
                        }`}
                >
                    <img src="/magic.svg" />
                    {loading ? "Processing..." : "Extract Text"}
                </button>
            </form>
        </div>
    );
};

export default UploadComponent;