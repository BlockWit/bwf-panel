import styles from './Post.module.css';

const Post = (props) => {

	return (
		<div className={styles.post}>
			<img className={styles.post__img} src={'https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg'} alt='avatar'/>
			<div>
				<span>{props.message}</span>
			</div>
			<div>{props.likeCount}</div>
		</div>
	);

}

export default Post;