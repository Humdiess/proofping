import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backIcon from '../../public/icons/chevron-left-regular.png';
import arrowIcon from '../../public/icons/arrow-2.png';
import { proofping_backend } from '../../../declarations/proofping_backend';

function Participant() {
  const navigate = useNavigate();
  const [eventCode, setEventCode] = useState('');
  const [participantName, setParticipantName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!eventCode || !participantName) {
      setMessage('Please fill in all the fields.');
      return;
    }

    try {
      const response = await proofping_backend?.claimAttendance(eventCode, participantName);
      setMessage(response);
    } catch (error) {
      console.error('Error claiming attendance:', error);
      setMessage('Failed to submit attendance. Please try again.');
    }
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="w-full h-max flex gap-8 pl-8 pt-7 items-center fixed bg-white">
        <button
          onClick={() => navigate('/app')}
          className="w-max h-max flex bg-[#AAFF00] p-2 rounded-full border border-black"
        >
          <img src={backIcon} alt="Back" className="w-8 h-auto" />
        </button>
        <div className="h-full w-max flex items-center">
          <p className="text-lg">Event Attendance</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full h-screen flex justify-center items-center">
        <section className="w-1/2 h-max flex flex-col p-10 items-center text-center bg-[#F8F8FF] border border-[#C6D0FF] rounded-3xl">
          <div>
            <h1 className="text-3xl font-bold mb-3">Participant Attendance</h1>
            <p className="text-lg">
              Enter the event code and your name to verify your attendance.
            </p>
          </div>

          {/* Form */}
          <form className="flex flex-col text-start w-full mt-5" onSubmit={handleSubmit}>
            <div className="input-group mb-5">
              <label
                htmlFor="event_code"
                className="text-xl font-medium mb-2 block"
              >
                Event Code:
              </label>
              <input
                type="text"
                placeholder="e.g., EVENT-123"
                name="eventCode"
                id="event_code"
                value={eventCode}
                onChange={(e) => setEventCode(e.target.value)}
                className="w-full h-10 p-5 border-2 border-black rounded-md shadow-[5px_5px_black] text-lg focus:outline-none focus:shadow-none focus:translate-x-[5px] focus:translate-y-[5px]"
              />
            </div>

            <div className="input-group mb-5">
              <label
                htmlFor="participant_name"
                className="text-xl font-medium mb-2 block"
              >
                Participant Name:
              </label>
              <input
                type="text"
                placeholder="e.g., John Doe"
                name="participantName"
                id="participant_name"
                value={participantName}
                onChange={(e) => setParticipantName(e.target.value)}
                className="w-full h-10 p-5 border-2 border-black rounded-md shadow-[5px_5px_black] text-lg focus:outline-none focus:shadow-none focus:translate-x-[5px] focus:translate-y-[5px]"
              />
            </div>

            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="mt-10 flex items-center text-xl font-bold bg-[#AAFF00] gap-2 px-5 py-2 rounded-full border border-black shadow-[3px_3px_black] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
              >
                Submit Attendance
                <img src={arrowIcon} alt="arrow icon" className="w-6" />
              </button>
            </div>
          </form>

          {message && (
            <div className="mt-5 p-3 w-full text-center bg-gray-200 rounded-md">
              <p className="text-lg">{message}</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default Participant;
