// src/components/AddPostModal.jsx
import React from "react";

const AddPostModal = ({ title, body, onChange, onSave, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Add New Post</h2>

        <div className="flex flex-col gap-3 mb-4">
          <input
            type="text"
            name="title"
            value={title}
            onChange={onChange}
            placeholder="Enter Title"
            className="border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-sky-400"
          />
          <textarea
            name="body"
            value={body}
            onChange={onChange}
            placeholder="Enter Body"
            className="border border-gray-300 rounded-lg p-2 outline-none focus:ring-2 focus:ring-sky-400 resize-none"
            rows="4"
          ></textarea>
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={onSave}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPostModal;
