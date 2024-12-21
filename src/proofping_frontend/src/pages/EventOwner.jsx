import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backIcon from '../../public/icons/chevron-left-regular.png';
import addIcon from '../../public/icons/plus-regular.png';
import Alert from '../components/Alert';
import { proofping_backend } from '../../../declarations/proofping_backend';

function EventOwner() {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(null);
  const [ownerName, setOwnerName] = useState('');

  if (!proofping_backend) {
    console.log("proofping_backend is not available");
  }
    
  const handleCreateEvent = async (e) => {
    e.preventDefault();
  
    if (!ownerName) {
      setAlert({ message: 'Owner name is required', type: 'error' });
      return;
    }
  
    console.log("Calling createEvent with ownerName:", ownerName);
  
    try {
      console.log("Proofping Backend Object:", proofping_backend);
      console.log("Calling createEvent with ownerName:", ownerName);
      const result = await proofping_backend?.createEvent(ownerName);
      console.log("Received Result from createEvent:", result);      
      console.log("createEvent result:", result);
      setAlert({ message: result, type: 'success' });
      setOwnerName('');
    } catch (error) {
      console.error("createEvent failed:", error);
      setAlert({ message: 'Failed to create event: ' + error.message, type: 'error' });
    }
  };
  

  return (
    <div className="bg-white relative">
      {/* Header */}
      <header className="w-full h-max flex gap-8 pl-8 pt-7 items-center fixed bg-white z-10">
        <button
          onClick={() => navigate('/app')}
          className="w-max h-max flex bg-[#AAFF00] p-2 rounded-full border border-black"
        >
          <img src={backIcon} alt="arrow left" className="w-8 h-auto" />
        </button>
        <div className="h-full w-max flex items-center">
          <p className="text-lg">Create Event</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full h-screen flex flex-col items-center pt-24">
        <section className="w-1/2 h-max flex flex-col p-10 items-center text-center bg-[#F8F8FF] border border-[#C6D0FF] rounded-3xl mb-10">
          <div>
            <h1 className="text-3xl font-bold mb-3">Create an Event as Owner</h1>
            <p className="text-lg">
              Enter your name to create an event and bring people together!
            </p>
          </div>

          {/* Form */}
          <form className="flex flex-col text-start w-full mt-5" onSubmit={handleCreateEvent}>
            <div className="input-group mb-5">
              <label
                htmlFor="owner_name"
                className="text-xl font-medium mb-2 block"
              >
                Owner Name:
              </label>
              <input
                type="text"
                placeholder="e.g., John Doe"
                name="ownerName"
                id="owner_name"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                className="w-full h-10 p-5 border-2 border-black rounded-md shadow-[5px_5px_black] text-lg focus:outline-none focus:shadow-none focus:translate-x-[5px] focus:translate-y-[5px]"
              />
            </div>

            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="mt-10 flex items-center text-xl font-bold bg-[#AAFF00] gap-2 px-5 py-2 rounded-full border border-black shadow-[3px_3px_black] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
              >
                Create Event
                <img
                  src={addIcon}
                  alt="plus icon"
                  className="w-6 p-1 bg-black rounded-full"
                />
              </button>
            </div>
          </form>
        </section>
      </main>

      {/* Floating Alert */}
      {alert && (
        <div className="fixed bottom-5 right-5 w-72">
          <Alert message={alert.message} type={alert.type} />
        </div>
      )}
    </div>
  );
}

export default EventOwner;
