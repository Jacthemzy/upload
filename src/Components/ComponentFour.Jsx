import { FaUser, FaUpload } from 'react-icons/fa';

const ComponentFour = () => {
  return (
    <div className="min-h-screen bg-gray-700 flex items-center justify-center p-4">
      <div className="relative w-full max-w-3xl bg-gray-800 p-6 rounded-lg shadow-lg">
        
        <div className="flex justify-between items-center mb-4">
          <button className="bg-red-600 text-white py-2 px-4 rounded-lg">EXIT</button>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <span className="absolute top-0 right-0 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">12</span>
              <span className="absolute top-0 right-6 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">10</span>
              <FaUser className="w-8 h-8 rounded-full text-white" />
            </div>
            <span className="text-white">John Grace</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-300 p-6 rounded-lg flex flex-col items-center justify-center">
            <FaUpload className="w-12 h-12 mb-4 text-gray-700" />
            <p className="text-center text-gray-700">CLICK TO UPLOAD<br />Or Drag and Drop</p>
          </div>
          <div className="space-y-4">
            <input type="text" placeholder="MOVIE PRODUCER" className="w-full p-2 bg-gray-300 text-gray-700 rounded-lg" />
            <input type="text" placeholder="SCRIPT WRITER (S)" className="w-full p-2 bg-gray-300 text-gray-700 rounded-lg" />
            <input type="text" placeholder="YEAR OF PRODUCTION" className="w-full p-2 bg-gray-300 text-gray-700 rounded-lg" />
            <input type="text" placeholder="CASTS" className="w-full p-2 bg-gray-300 text-gray-700 rounded-lg" />
            <div className="flex items-center space-x-2">
              <span className="text-gray-700">₦</span>
              <input type="number" placeholder="TOTAL PRODUCTION BUDGET" className="w-full p-2 bg-gray-300 text-gray-700 rounded-lg" />
            </div>
            <textarea placeholder="ABOUT MOVIE" className="w-full p-2 bg-gray-300 text-gray-700 rounded-lg" rows="4"></textarea>
            <span className="text-gray-700">Max 100</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <button className="bg-red-600 text-white py-2 px-4 rounded-lg">EXIT</button>
          <button className="bg-green-600 text-white py-2 px-4 rounded-lg">NEXT</button>
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg text-center">
            <p className="mb-4">DO YOU WANT TO SAVE<br /><span className="text-red-600">BEFORE EXIT</span>?</p>
            <div className="flex justify-center space-x-4">
              <button className="bg-red-600 text-white py-2 px-4 rounded-lg">NO EXIT</button>
              <button className="bg-green-600 text-white py-2 px-4 rounded-lg">YES SAVE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentFour;
