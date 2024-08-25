import React from 'react';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';

const Home = () => {
    return (
        <main>
            <PostForm />
            <PostList />
        </main>
    );
}

export default Home;
