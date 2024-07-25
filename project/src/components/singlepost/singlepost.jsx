import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Single() {
  const { postid } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const fetchPost = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/news/singleposts?postid=${postid}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [postid]);

  const deletePost = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:8000/news/delete`, { data: { postid } });
      navigate('/'); // Navigate to home or another page after deletion
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-6 dark:text-white">{data.title}</h1>
      <p className="text-gray-700 dark:text-gray-300">{data.details}</p>
      <div className="flex justify-between mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={() => navigate(`/update/${postid}`)} // Assume you have an edit page
        >
          Edit
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          onClick={deletePost}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

