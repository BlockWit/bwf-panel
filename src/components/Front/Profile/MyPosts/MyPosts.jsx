import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
	return (
		<div>
			My posts
			<div>
				<textarea></textarea>
				<button>submit</button>
			</div>
			<div className={styles.myposts}>
				<Post message={'Hey man'} likeCount={30}/>
				<Post message={'Yeaaah'} likeCount={2}/>
				<Post message={'Something else'} likeCount={12}/>
			</div>
		</div>
	);
}

export default MyPosts;