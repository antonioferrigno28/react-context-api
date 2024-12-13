import React from "react";
import { usePostContext } from "../context/PostContext";
import { Link } from "react-router-dom";

export default function PostsList() {
  const { postList } = usePostContext();

  return (
    <div className="row">
      {postList.map((post) => (
        <div className="col-md-4 mb-3" key={post.id}>
          <div className="card h-100">
            <img
              src={post.immagine}
              className="card-img-top"
              alt={`Immagine di ${post.autore}`}
            />
            <div className="card-body">
              <h5 className="card-title">{post.autore}</h5>
              <p className="card-text">{post.contenuto}</p>
              <span className="badge bg-secondary">{post.categoria}</span>
              <p
                className={`mt-2 ${
                  post.published ? "text-success" : "text-danger"
                }`}
              >
                {post.published ? "Pubblico" : "Privato"}
              </p>
              <Link to={`/posts/${post.id}`} className="btn btn-success mt-3">
                Mostra Post
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
