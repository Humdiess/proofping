import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen flex flex-col justify-center items-center p-4">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">Choose Your Action</h1>
        <p className="text-lg mb-8 text-center text-gray-600">
          Are you ready to dive into an event or start one of your own? Select an option to get started!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="w-16 h-16 mb-4 bg-blue-500 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">Join an Event</h2>
            <p className="text-gray-600 mb-4 text-center">Become part of the fun and engage with scheduled events.</p>
            <button
              onClick={() => navigate('/app/attend-event')}
              className="text-lg font-bold bg-[#C6D0FF] px-6 py-3 rounded-full border-2 border-black shadow-[3px_3px_black] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-150 hover:bg-[#B1BEFF]"
            >
              Join Now
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="w-16 h-16 mb-4 bg-green-500 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">Create an Event</h2>
            <p className="text-gray-600 mb-4 text-center">Host your own event and invite participants to join the excitement.</p>
            <button
              onClick={() => navigate('/app/create-event')}
              className="text-lg font-bold bg-[#AAFF00] px-6 py-3 rounded-full border-2 border-black shadow-[3px_3px_black] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all duration-150 hover:bg-[#9EEE00]"
            >
              Start Creating
            </button>
          </div>
        </div>
      </div>
      <footer className="mt-8 bg-black text-white p-4 rounded-lg">
        <img src="/images/icp-logo.svg" alt="ICP Logo" className="w-32 mx-auto" />
        <p className="text-center text-gray-600 mt-2">Powered by ICP</p>
      </footer>
    </div>
  );
}

export default Home;
