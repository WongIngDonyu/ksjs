import React, { useState } from 'react';
import './App.css';

function CreatePost({ onAddPost, archive }) {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            author,
            title,
            category,
            content
        };
        onAddPost(newPost);
        setAuthor('');
        setTitle('');
        setCategory('');
        setContent('');
    };
    return (
        <aside>
            <section className="create-section">
                <h2>Создать запись</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-section">
                        <label htmlFor="author">Автор</label>
                        <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)}/>
                    </div>
                    <div className="form-section">
                        <label htmlFor="title">Заголовок</label>
                        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className="form-section">
                        <label htmlFor="category">Категория</label>
                        <input id="category" value={category} onChange={(e) => setCategory(e.target.value)}/>
                    </div>
                    <div className="form-section">
                        <label htmlFor="content">Содержание</label>
                        <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                    </div>
                    <button type="submit" className="create-button">Создать</button>
                </form>
            </section>
            <section className="archive-section">
                <h2>Архив</h2>
                <ul style={{paddingLeft: '20px'}}>
                    {archive.map((title, index) => (
                        <li key={index} className="archived-post">
                            <h3>{title}</h3>
                        </li>
                    ))}
                </ul>
            </section>
        </aside>
    );
}

export default CreatePost;