import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';

const creditCardOptions = [
  { id: '1', name: 'Amazon Pay ICICI Credit Card' },
  { id: '2', name: 'HDFC Bank Credit Card' },
  { id: '3', name: 'SBI Credit Card' },
  { id: '4', name: 'Axis Bank Credit Card' },
  { id: '5', name: 'Citibank Credit Card' },
  { id: '6', name: 'Kotak Mahindra Credit Card' }
];

const ProfileModal = ({ onClose }) => {
  const { age: contextAge, setAge, gender: contextGender, setGender } = useContext(UserContext);
  const [age, setLocalAge] = useState(contextAge);
  const [gender, setLocalGender] = useState(contextGender);
  const [selectedCard, setSelectedCard] = useState('');

  const handleSave = () => {
    // Update context with the new values
    setAge(age);
    setGender(gender);
    
    console.log("Profile Updated:", { age, gender, selectedCard });
    onClose(); // Close the modal after saving
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
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
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Credit Card</label>
          <select
            value={selectedCard}
            onChange={(e) => setSelectedCard(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select a Credit Card</option>
            {creditCardOptions.map(card => (
              <option key={card.id} value={card.name}>{card.name}</option>
            ))}
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
