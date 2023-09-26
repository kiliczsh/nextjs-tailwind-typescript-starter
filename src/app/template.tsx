// create src/app/template.tsx:

import { NextApiRequest, NextPage } from 'next';

const Template: NextPage = () => {
    return (
        <div className="flex flex-col items-center justify-center flex-1 w-full min-h-screen py-2">
            <h1 className="text-6xl font-bold">Template</h1>
            <p className="text-2xl font-bold">Template</p>
        </div>
    );
};

export default Template;