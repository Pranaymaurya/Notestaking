import { useNavigate } from "react-router-dom";
import React from "react";

export default function Card({ post }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/cre/${post._id}`)}
      className="cursor-pointer transition-all duration-500 hover:translate-y-2 w-72 h-auto min-h-[150px] dark:bg-gray-900 rounded-lg shadow-xl flex flex-col items-start justify-start gap-4 p-4 m-4"
    >
      <div className=" text-black overflow-hidden line-clamp-2  dark:text-gray-300">{post.title}</div>
      <div className="flex-grow flex flex-col justify-center">
        <p className="text-gray-700  text-base overflow-hidden line-clamp-2 min-h-[3.5rem] dark:text-gray-300">{post.details}</p>
      </div>
    </div>
  );
}




