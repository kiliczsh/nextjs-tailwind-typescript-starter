// create _error.tsx:

import { NextPage } from 'next';

const Error: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-2xl">This page could not be found.</p>
    </div>
  );
};

export default Error;