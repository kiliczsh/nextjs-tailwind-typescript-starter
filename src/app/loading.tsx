// create src/app/loading.tsx:

import { NextPage } from 'next';

const Loading: NextPage = () => {
    return (
        <div className="flex flex-col items-center justify-center flex-1 w-full min-h-screen py-2">
            <h1 className="text-6xl font-bold">Loading</h1>
            <p className="text-2xl font-bold">Loading</p>
        </div>
    );
};

export default Loading;