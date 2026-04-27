import React, { useState } from "react";
import { useCreateRepo } from "../utils/axios/useUser";

const Upload = () => {
  const { createRepo, loading, success, error } = useCreateRepo();

  const [formData, setFormData] = useState({
    name: "",
    fullName: "",
    description: "",
    language: "",
    topics: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createRepo(formData);

    setFormData({
      name: "",
      fullName: "",
      description: "",
      language: "",
      topics: "",
    });
  };

  return (
    <div className="w-full flex justify-center px-4 py-10 bg-white">
      <div className="w-full max-w-2xl bg-gray-50 border rounded-xl shadow p-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Upload Repo
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {[
            ["name", "Repository Name"],
            ["fullName", "Full Name"],
            ["description", "Description"],
            ["language", "Language"],
            ["topics", "Topics"],
          ].map(([key, label]) => (
            <div key={key} className="flex flex-col">
              <label className="text-sm font-medium mb-1 text-gray-700">
                {label}
              </label>

              {key === "description" ? (
                <textarea
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  rows="4"
                  className="px-4 py-2 border rounded-lg"
                />
              ) : (
                <input
                  type="text"
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  className="px-4 py-2 border rounded-lg"
                />
              )}
            </div>
          ))}

          {success && (
            <p className="text-green-600 font-medium">
              Repo uploaded successfully ✅
            </p>
          )}

          {error && (
            <p className="text-red-600 font-medium">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium disabled:opacity-50"
          >
            {loading ? "Uploading..." : "Upload Repository"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Upload;