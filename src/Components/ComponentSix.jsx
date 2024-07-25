import { FaCheckCircle, FaBell, FaEnvelope, FaUser } from 'react-icons/fa';

const ComponentSix = () => {
  return (
    <div className="min-h-screen bg-zinc-400 flex flex-col items-center justify-center space-y-8 p-4">
      
      <div className="bg-white p-4 rounded shadow-md w-full max-w-md">
        <p className="text-zinc-800">
          Dear Creator,<br />
          Please keep track of your upload status. Go to your dashboard and click on the Upload button, all uploads take 24/48 hours to get approved or denied. Once approved, a message on the notification on your dashboard. For any delays please contact customer care. Thank you.
        </p>
      </div>
      
      <div className="flex flex-col items-center space-y-4">
        <div className="bg-green-600 p-8 rounded shadow-md flex flex-col items-center space-y-4">
          <FaCheckCircle className="text-white text-4xl" />
          <p className="text-white text-lg font-bold">UPLOAD SUBMITTED</p>
        </div>
        <button className="bg-green-700 text-white font-bold py-2 px-4 rounded hover:bg-green-800">
          RETURN TO DASHBOARD
        </button>
      </div>
      
      <div className="absolute top-4 right-4 flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <FaBell className="text-green-500 text-2xl" />
          <FaEnvelope className="text-green-500 text-2xl" />
          <FaUser className="text-blue-500 text-2xl" />
        </div>
        <span className="text-white">John Grace</span>
      </div>
    </div>
  );
};

export default ComponentSix;

