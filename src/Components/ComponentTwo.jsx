import {
  FaArrowLeft,
  FaEnvelope,
  FaBell,
  FaCloudUploadAlt,
  FaDollarSign,
  FaCaretDown,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ComponentTwo = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[var(--background)] p-6">
      <div className="flex justify-between items-center mb-6">
        <button
          className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center"
          onClick={() => navigate("/component-one")}
        >
          <FaArrowLeft className="mr-2" />
          BACK
        </button>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <FaEnvelope />
            <span className="absolute top-0 right-0 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              12
            </span>
          </div>
          <div className="relative">
            <FaBell />
            <span className="absolute top-0 right-0 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              10
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <img
              alt="profile-picture"
              src="https://placehold.co/40x40"
              className="rounded-full"
            />
            <span className="text-[var(--foreground)]">John Grace</span>
            <FaCaretDown />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border-2 border-dashed border-zinc-400 p-6 flex flex-col items-center justify-center bg-zinc-100">
          <FaCloudUploadAlt className="mb-4 text-4xl text-zinc-600" />
          <p className="text-center text-zinc-600">
            CLICK TO <span className="text-green-500">UPLOAD</span> FULL MOVIE
            <br />
            Or DRAG AND DROP HERE
          </p>
          <p className="text-zinc-400 mt-4">MAX 10GB</p>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-zinc-700">
              MOVIE PRODUCER <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full p-2 border border-zinc-300 rounded"
            />
          </div>
          <div>
            <label className="block text-zinc-700">
              SCRIPT WRITER (S) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full p-2 border border-zinc-300 rounded"
            />
          </div>
          <div>
            <label className="block text-zinc-700">
              YEAR OF PRODUCTION <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full p-2 border border-zinc-300 rounded"
            />
          </div>
          <div>
            <label className="block text-zinc-700">CASTS</label>
            <input
              type="text"
              className="w-full p-2 border border-zinc-300 rounded"
            />
          </div>
          <div>
            <label className="block text-zinc-700">
              TOTAL PRODUCTION BUDGET <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center">
              <FaDollarSign className="mr-2" />
              <input
                type="text"
                className="w-full p-2 border border-zinc-300 rounded"
              />
              <span className="ml-2">.00</span>
            </div>
          </div>
          <div>
            <label className="block text-zinc-700">
              ABOUT MOVIE <span className="text-red-500">*</span>
            </label>
            <textarea
              className="w-full p-2 border border-zinc-300 rounded"
              rows="4"
            ></textarea>
            <p className="text-zinc-400 text-right">Max 100</p>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-between">
        <button
          className="bg-red-600 text-white px-6 py-2 rounded-lg"
          onClick={() => navigate("/component-one")}
        >
          EXIT
        </button>
        <button
          className="bg-green-600 text-white px-6 py-2 rounded-lg"
          onClick={() => navigate("/")}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default ComponentTwo;
