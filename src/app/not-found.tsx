// create src/app/not-found.tsx:

import { NextPage } from 'next';

const NotFound: NextPage = () => {
    return (
        <div className="flex flex-col items-center justify-center flex-1 w-full min-h-screen py-2">
            <h1 className="text-6xl font-bold">Not Found</h1>
            <p className="text-2xl font-bold">Not Found</p>
        </div>
    );
};

export default NotFound;