import "./feedProfile.css";
import Post from "../post/Post";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import { URL } from "../../URL";

export default function FeedProfile() {
  const [post, setPosts] = useState([]);

  const token = window.localStorage.getItem("token");
  const decodedToken = jwt_decode(token);
  const userId=decodedToken.id;

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`${URL}api/posts/timeline/${userId}`);
        setPosts(res.data);
        console.log(post);
        // Ordenar los posts
        setPosts((prevPosts) =>
          prevPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        );
      } catch (error) {
        console.log(error);
        // Manejar el error, mostrar un mensaje de error, etc.
      }
    };
    fetchPost();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {post.map((p, key) => (
          <Post key={key} post={p} />
        ))}
      </div>
    </div>
  );
}
