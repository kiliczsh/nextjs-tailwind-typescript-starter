// create src/app/global-error.tsx:
'use client'

import { NextPage } from 'next';

const GlobalError: NextPage = () => {
    return (
        <div className="flex flex-col items-center justify-center flex-1 w-full min-h-screen py-2">
            <h1 className="text-6xl font-bold">Global Error</h1>
            <p className="text-2xl font-bold">Global Error</p>
        </div>
    );
};

export default GlobalError;