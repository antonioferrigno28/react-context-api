import React from "react";
import { Link } from "react-router-dom";

export default function PostsList({ posts }) {
  return (
    <table className="mt-4 table table-bordered border-dark">
      <thead className="table-dark">
        <tr>
          <th scope="col">Autore</th>
          <th scope="col">Contenuto</th>
          <th scope="col">Immagine</th>
          <th scope="col">Categoria</th>
          <th scope="col">Pubblico</th>
          <th scope="col">Cosa vuoi fare?</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id} className="table-danger">
            <td>
              <b>{post.autore}</b>
            </td>
            <td>
              <i>{post.contenuto}</i>
            </td>
            <td>
              <img
                src={post.immagine}
                width="50"
                alt={`Immagine di ${post.autore}`}
              />
            </td>
            <td>
              <span className="badge text-bg-secondary">{post.categoria}</span>
            </td>
            <td>
              {post.published ? (
                <p className="text-success fw-bold">"Pubblico"</p>
              ) : (
                <p className="text-danger fw-bold">"Privato"</p>
              )}
            </td>
            <td>
              <Link
                to={`/posts/${post.id}`}
                type="button"
                className="btn btn-success"
              >
                Mostra Post
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}