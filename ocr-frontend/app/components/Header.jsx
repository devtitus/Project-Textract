import React from 'react'
import { FaGithub } from 'react-icons/fa';

const GitHubIcon = () => <FaGithub className="w-6 h-6" />;

const Header = () => {
    return (
        <header className='flex w-full h-16 py-2 items-center px-16 border-b'>
            <div className='flex flex-row items-center justify-between w-full'>
                <a className="flex items-center gap-2" href='/'>
                    <img src="/logo.svg" alt="App Logo" className="w-10 h-10" />
                    <p className="text-2xl font-poppins font-bold text-[#1F2937]">Textract</p>
                </a>
                <a href="https://github.com/your-username/your-repo" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-[#9333EA]">
                    <GitHubIcon />
                    <span className="font-poppins font-normal">GitHub</span>
                </a>
            </div>
        </header>
    )
}

export default Header