import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message="Hi, how are you" like="15"/>
                <Post message="This is my first post" like="18"/>

            </div>
        </div>
    )
}

export default MyPosts;