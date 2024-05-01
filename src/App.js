import React, { useState } from 'react';
import './App.css';
import CreatePost from "./CreatePost";
import PostList from "./PostList";
import Header from "./Header";

function Blog() {
    const [posts, setPosts] = useState([]);
    const [archive, setArchive] = useState([]);

    const addPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    const deletePost = (index) => {
        const updatedPosts = [...posts];
        updatedPosts.splice(index, 1);
        setPosts(updatedPosts);
    };

    const archivePost = (index) => {
        const archivedPostTitle = posts[index].title;
        const updatedPosts = [...posts];
        updatedPosts.splice(index, 1);
        setPosts(updatedPosts);
        setArchive([...archive, archivedPostTitle]);
    };

    return (
        <body className="blog">
        <Header/>
        <section className="main-aside">
            <PostList posts={posts} deletePost={deletePost} archivePost={archivePost}/>
            <CreatePost onAddPost={addPost} archive={archive}/>
        </section>
        </body>
    );
}
export default Blog;