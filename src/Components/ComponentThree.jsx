import {
  FaArrowLeft,
  FaBell,
  FaEnvelope,
  FaUpload,
  FaVideo,
  FaDollarSign,
  FaUser,
  FaCaretDown,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ComponentThree = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#b5b097] p-6">
      <div className="flex justify-between items-center mb-4">
        <button
          className="bg-[#a0522d] text-white px-4 py-2 rounded-lg flex items-center"
          onClick={() => navigate("/component-one")}
        >
          <FaArrowLeft className="mr-2" />
          BACK
        </button>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <FaBell className="text-white" />
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
              2
            </span>
          </div>
          <FaEnvelope className="text-white" />
          <div className="flex items-center space-x-2">
            <FaUser className="text-white rounded-full" />
            <span className="text-white">John Grace</span>
            <FaCaretDown className="text-white" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="border-2 border-dashed border-zinc-400 p-4 text-center">
            <FaUpload className="mx-auto mb-2 text-4xl text-zinc-600" />
            <p>
              CLICK TO <span className="text-blue-500">UPLOAD</span> EPISODE 1
            </p>
            <p>Or DRAG AND DROP HERE</p>
            <p className="text-sm text-zinc-500">MAX 5GB</p>
          </div>
          <div className="border-2 border-dashed border-zinc-400 p-4 text-center">
            <FaUpload className="mx-auto mb-2 text-4xl text-zinc-600" />
            <p>
              CLICK TO <span className="text-blue-500">UPLOAD</span> EPISODE
              TRAILER
            </p>
            <p>Or DRAG AND DROP HERE</p>
            <p className="text-sm text-zinc-500">MAX 2MB</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">UPLOADED FILES</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <FaVideo className="text-zinc-600" />
                <span>Video.mp4</span>
                <span className="text-sm text-zinc-500 ml-auto">200MB</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaVideo className="text-zinc-600" />
                <span>Trailer.mp4</span>
                <span className="text-sm text-zinc-500 ml-auto">50MB</span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="season" className="block text-sm font-medium">
                SEASON ?
              </label>
              <select
                id="season"
                className="mt-1 block w-full bg-[#b5b097] border border-zinc-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              >
                <option>Season 1</option>
                <option>Season 2</option>
                <option>Season 3</option>
                <option>Season 4</option>
              </select>
            </div>
            <div>
              <label htmlFor="episode" className="block text-sm font-medium">
                EPISODE ?
              </label>
              <select
                id="episode"
                className="mt-1 block w-full bg-[#b5b097] border border-zinc-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              >
                <option>Episode 1</option>
                <option>Episode 2</option>
                <option>Episode 3</option>
                <option>Episode 4</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="producer" className="block text-sm font-medium">
              SERIES PRODUCER
            </label>
            <input
              type="text"
              id="producer"
              className="mt-1 block w-full bg-[#b5b097] border border-zinc-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="year" className="block text-sm font-medium">
              YEAR OF PRODUCTION
            </label>
            <input
              type="text"
              id="year"
              className="mt-1 block w-full bg-[#b5b097] border border-zinc-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="casts" className="block text-sm font-medium">
              CASTS
            </label>
            <input
              type="text"
              id="casts"
              className="mt-1 block w-full bg-[#b5b097] border border-zinc-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              placeholder="PLEASE SEPARATE WITH A COMMA"
            />
          </div>
          <div>
            <label htmlFor="budget" className="block text-sm font-medium">
              TOTAL PRODUCTION BUDGET
            </label>
            <div className="flex items-center mt-1">
              <FaDollarSign className="mr-2 text-zinc-600" />
              <input
                type="text"
                id="budget"
                className="block w-full bg-[#b5b097] border border-zinc-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              />
            </div>
          </div>
          <div>
            <label htmlFor="about" className="block text-sm font-medium">
              ABOUT EPISODE
            </label>
            <textarea
              id="about"
              rows="4"
              className="mt-1 block w-full bg-[#b5b097] border border-zinc-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              placeholder="Max 50"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-6">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
          onClick={() => navigate("/component-one")}
        >
          EXIT
        </button>
        <div className="flex space-x-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
            SAVE AND UPLOAD NEXT EPISODE
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={() => navigate("/component-five")}
          >
            FINISH
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComponentThree;
