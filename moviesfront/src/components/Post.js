import { Link } from "react-router-dom";

const Post = ({ post }) => {
    const div = {
        textAlign: "center",
        border: "3px solid",
        margin: "10px auto",
        width: "80%",
    }
    return (
        <div style={div}>
            <Link to={`${post.id}`}>
                <h1>{post.title}</h1>
            </Link>
        </div>
    )
  };
  
  export default Post;