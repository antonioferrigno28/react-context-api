import React from "react";
import { usePostContext } from "../context/PostContext";
import PostsList from "../components/PostsList";

export default function PostsPage() {
  const { postList } = usePostContext();

  return (
    <div className="container py-4">
      <h1>Lista dei post:</h1>
      {postList.length > 0 ? (
        <PostsList posts={postList} />
      ) : (
        <h1 className="mt-3 text-danger">Nessun post trovato!</h1>
      )}
    </div>
  );
}
