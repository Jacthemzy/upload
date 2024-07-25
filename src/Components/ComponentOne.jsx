import { useState } from "react";
import { FaEnvelope, FaBell, FaCloudUploadAlt, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ComponentOne = () => {
  const [selectedContentType, setSelectedContentType] = useState("");
  const navigate = useNavigate();

  const handleContentTypeChange = (e) => {
    setSelectedContentType(e.target.value);
  };

  const getSampleText = (contentType) => {
    switch (contentType) {
      case "Blog Post":
        return "Sample text for a blog post. This is an example of how your blog post might look.";
      case "Article":
        return "Sample text for an article. Here is a snippet to give you an idea of an article format.";
      case "News":
        return "Sample text for a news report. This is a brief example of a news story.";
      case "Review":
        return "Sample text for a review. This is an example of what a review might look like.";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-end items-center mb-4">
          <div className="flex items-center space-x-2">
            <button className="relative">
              <FaEnvelope className="w-6 h-6 text-gray-800" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                2
              </span>
            </button>
            <button className="relative">
              <FaBell className="w-6 h-6 text-gray-800" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                10
              </span>
            </button>
            <div className="flex items-center space-x-2">
              <FaUser className="w-10 h-10 text-gray-800 rounded-full" />
              <span className="text-gray-800">John Grace</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1">
            <div className="border-2 border-dashed border-gray-300 p-8 flex flex-col items-center justify-center text-center">
              <FaCloudUploadAlt className="w-12 h-12 mb-4 text-gray-800" />
              <p className="text-gray-800 mb-2">
                CLICK TO <span className="text-green-500">UPLOAD</span> BANNER
              </p>
              <p className="text-gray-800">Or DRAG AND DROP HERE</p>
              <p className="text-gray-500 mt-4">MAX 2MB</p>
            </div>
          </div>
          <div className="col-span-1 space-y-4">
            <div>
              <label className="block text-gray-800 mb-2">
                CONTENT TYPE? <span className="text-red-500">*</span>
              </label>
              <select
                className="w-full p-2 border border-gray-300 rounded bg-gray-100 text-gray-800"
                value={selectedContentType}
                onChange={handleContentTypeChange}
              >
                <option value="">Select Content Type</option>
                <option value="Blog Post">Blog Post</option>
                <option value="Article">Article</option>
                <option value="News">News</option>
                <option value="Review">Review</option>
              </select>
              {selectedContentType && (
                <div className="mt-4 p-4 border border-gray-300 rounded bg-gray-100 text-gray-800">
                  {getSampleText(selectedContentType)}
                </div>
              )}
            </div>
            <div>
              <label className="block text-gray-800 mb-2">
                ENTER TITLE <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded bg-gray-100 text-gray-800"
              />
            </div>
            <div>
              <label className="block text-gray-800 mb-2">
                PLEASE SELECT <span className="text-red-500">*</span>
              </label>
              <p className="text-gray-800 font-bold mb-2">SERIES GENRE</p>
              <div className="grid grid-cols-2 gap-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Action
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Romance
                </label>
     1           <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Drama
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Comedy
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Anime
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" /> Documentary
                </label>
              </div>
            </div>
            <div>
              <label className="block text-gray-800 mb-2">
                AGE CATEGORY? <span className="text-red-500">*</span>
              </label>
              <select className="w-full p-2 border border-gray-300 rounded bg-gray-100 text-gray-800">
                <option>Select Age Category</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-800 mb-2">
                VIEWING RESTRICTION? <span className="text-red-500">*</span>
              </label>
              <select className="w-full p-2 border border-gray-300 rounded bg-gray-100 text-gray-800">
                <option>Select Viewing Restriction</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-8">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={() => navigate("/")}
          >
            BACK TO HOME
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={() => navigate("/component-two")}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComponentOne;
