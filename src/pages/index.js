import { useEffect } from 'react';
import { Inter } from 'next/font/google';
import { getAllAccounts, getSelectedAccount } from '@/api/services';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    useEffect(() => {
        getSelectedAccount('aldian');
    }, []);

    return (
        <main className={`flex min-h-screen max-w-2xl m-auto flex-col items-center p-4 pt-24 ${inter.className}`}>
            <div className='flex flex-col items-center w-full gap-2 mb-12'>
                <h3 className='text-2xl font-bold'>Aldian</h3>
                <p className='text-lg'>Wellcome to my bio</p>
            </div>
            <div className='flex flex-col items-center w-full gap-8'>
                <div className='h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-[24px] p-4 hover:scale-105 transition-all cursor-pointer'>
                    <p>instagram</p>
                </div>
                <div className='h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-[24px] p-4 hover:scale-105 transition-all cursor-pointer'>
                    <p>youtube</p>
                </div>
                <div className='h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-[24px] p-4 hover:scale-105 transition-all cursor-pointer'>
                    <p>tiktok</p>
                </div>
                <div className='h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-[24px] p-4 hover:scale-105 transition-all cursor-pointer'>
                    <p>linkedin</p>
                </div>
                <div className='h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-[24px] p-4 hover:scale-105 transition-all cursor-pointer'>
                    <p>behance</p>
                </div>
            </div>
        </main>
    );
}
