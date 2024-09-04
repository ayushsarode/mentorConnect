import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MentorMeet = () => {
    const [roomCode, setRoomCode] = useState('');
    const navigate = useNavigate();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(roomCode);
        navigate(`/mentormeet/${roomCode}`);
    };

    return (
        <div className="flex items-center justify-center min-h-full border-2-black- py-10">
            <div className="w-full max-w-sm p-6 bg-white shadow-md rounded-lg">
                <form className="space-y-4" onSubmit={handleFormSubmit}>
                    <label htmlFor="roomCode" className="block text-lg font-medium text-gray-700">
                        Enter Room Code
                    </label>
                    <input
                        id="roomCode"
                        value={roomCode}
                        onChange={(e) => setRoomCode(e.target.value)}
                        type="text"
                        required
                        placeholder="Enter room code"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default MentorMeet;
