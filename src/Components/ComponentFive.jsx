import { useNavigate } from "react-router-dom";

const ComponentFive = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-400 p-8 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="split-ratio"
            className="block text-sm font-medium text-gray-700"
          >
            SPLIT RATIO <span className="text-red-500">*</span>
          </label>
          <select
            id="split-ratio"
            name="split-ratio"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          >
            <option>Select...</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="lock-amount"
            className="block text-sm font-medium text-gray-700"
          >
            LOCK AMOUNT <span className="text-red-500">*</span>
          </label>
          <select
            id="lock-amount"
            name="lock-amount"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          >
            <option>Select...</option>
          </select>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-bold text-gray-900">UPLOAD AGREEMENT</h2>
        <p className="mt-2 text-sm text-gray-700">
          DO YOU CONFIRM YOUR MOVIE IS OF MINIMUM QUALITY RESOLUTION? PIRATE AND
          COPYRIGHT FREE? AND YOU ARE THE ORIGINAL OWNER OF THIS CONTENT?{" "}
          <span className="text-red-500">*</span>
        </p>
        <div className="flex items-center mt-2">
          <input
            id="confirm-quality-yes"
            name="confirm-quality"
            type="checkbox"
            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
          />
          <label
            htmlFor="confirm-quality-yes"
            className="ml-2 block text-sm text-gray-700"
          >
            YES I CONFIRM
          </label>
        </div>
        <div className="flex items-center mt-2">
          <input
            id="confirm-quality-no"
            name="confirm-quality"
            type="checkbox"
            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
          />
          <label
            htmlFor="confirm-quality-no"
            className="ml-2 block text-sm text-gray-700"
          >
            NO I AM NOT SURE
          </label>
        </div>
      </div>
      <div>
        <p className="mt-4 text-sm text-gray-700">
          DO YOU CONFIRM YOUR CONTENT IS WATERMARK FREE?{" "}
          <span className="text-red-500">*</span>
        </p>
        <div className="flex items-center mt-2">
          <input
            id="confirm-watermark-yes"
            name="confirm-watermark"
            type="checkbox"
            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
          />
          <label
            htmlFor="confirm-watermark-yes"
            className="ml-2 block text-sm text-gray-700"
          >
            YES I CONFIRM
          </label>
        </div>
        <div className="flex items-center mt-2">
          <input
            id="confirm-watermark-no"
            name="confirm-watermark"
            type="checkbox"
            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
          />
          <label
            htmlFor="confirm-watermark-no"
            className="ml-2 block text-sm text-gray-700"
          >
            NO MY CONTENT CONTAINS WATERMARK
          </label>
        </div>
      </div>
      <div>
        <label
          htmlFor="signature"
          className="block text-sm font-medium text-gray-700"
        >
          PLEASE SIGN HERE <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="signature"
          name="signature"
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
          placeholder="FULLNAME"
        />
      </div>
      <div className="flex justify-end">
        <button
          className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          onClick={() => navigate("/component-six")}
        >
          SUBMIT FOR UPLOAD
        </button>
      </div>
    </div>
  );
};

export default ComponentFive;
