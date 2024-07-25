import { useEffect, useState } from "react";
import Card from "./card";
import axios from 'axios';

export default function Collect() {
  const [data, setData] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/news/posts");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-center -mx-4">
        {data?.map((post) => (
          <Card key={post?._id} post={post} />
        ))}
      </div>
    </div>
  );
}
