import React from 'react';
import './App.css';

function PostList({ posts, deletePost, archivePost }) {
    return (
        <section className="post-list">
            <h2>Записи</h2>
            {posts.map((post, index) => (
                <article key={index} className="blog-post-article">
                    <h3 className="postInfo">{post.title}</h3>
                    <p className="postInfo">Автор: <strong>{post.author}</strong></p>
                    <p className="postInfo">Категория: <strong>{post.category}</strong></p>
                    <p className="postInfo">Содержание: {post.content}</p>
                    <button className="archive-button" onClick={() => archivePost(index)}>Архив</button>
                    <button className="delete-button" onClick={() => deletePost(index)}>Удалить</button>
                </article>
            ))}
        </section>
    );
}
export default PostList;