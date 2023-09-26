// create pages/404.tsx:

import { NextPage } from 'next';

const Custom404: NextPage = () => {
    return (
        <div className="flex flex-col items-center justify-center flex-1 w-full min-h-screen py-2">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="text-2xl font-bold">Page Not Found</p>
        </div>
    );
};

export default Custom404;