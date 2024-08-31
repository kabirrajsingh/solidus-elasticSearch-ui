import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';

const ProfileModal = ({ onClose }) => {
  const { age: contextAge, setAge, gender: contextGender, setGender } = useContext(UserContext);
  const [age, setLocalAge] = useState(contextAge);
  const [gender, setLocalGender] = useState(contextGender);

  const handleSave = () => {
    // Update context with the new values
    setAge(age);
    setGender(gender);
    
    console.log("Profile Updated:", { age, gender });
    onClose(); // Close the modal after saving
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold mb-4">Update Profile</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setLocalAge(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Gender</label>
          <select
            value={gender}
            onChange={(e) => setLocalGender(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="flex justify-between">
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
