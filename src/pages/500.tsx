// create pages/500.tsx:

import { NextPage } from 'next';

const Custom500: NextPage = () => {
    return (
        <div className="flex flex-col items-center justify-center flex-1 w-full min-h-screen py-2">
            <h1 className="text-6xl font-bold">500</h1>
            <p className="text-2xl font-bold">Internal Server Error</p>
        </div>
    );
};

export default Custom500;