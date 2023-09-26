// create src/app/index/default.tsx:

import { NextPage } from 'next';

const Default: NextPage = () => {
    return (
        <div className="flex flex-col items-center justify-center flex-1 w-full min-h-screen py-2">
            <h1 className="text-6xl font-bold">Default</h1>
            <p className="text-2xl font-bold">Default</p>
        </div>
    );
};

export default Default;