
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function Form() {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const navigate = useNavigate();
  const { postid } = useParams();
  
  const fetchPost = async () => {
    if (postid) {
      try {
        const response = await axios.get(`http://localhost:8000/news/singleposts?postid=${postid}`);
        const data = response.data;
        setTitle(data.title);
        setDetails(data.details);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    }
  };

  useEffect(() => {
    fetchPost();
  }, [postid]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (postid) {
        await axios.put(`http://localhost:8000/news/update`, {
          postid,
          title,
          details,
        });
        console.log('Post updated successfully');
      } else {
        await axios.post("http://localhost:8000/news/hello", {
          title,
          details,
        });
        console.log('Post created successfully');
      }
      setTitle('');
      setDetails('');
      navigate('/');
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 dark:text-white">
        {postid ? 'Update Post' : 'Create a Card'}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter the title"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="details" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
            Details
          </label>
          <textarea
            id="details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter the details"
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            {postid ? 'Update Post' : 'Create Post'}
          </button>
        </div>
      </form>
    </div>
  );
}
