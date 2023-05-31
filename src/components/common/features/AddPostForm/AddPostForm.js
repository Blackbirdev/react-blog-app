import { useDispatch } from "react-redux";
import { addPost } from "../../../../redux/postsRedux";
import { useNavigate } from "react-router-dom";
import PostForm from "../PostForm/PostForm";

const AddPostForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = post => {
        dispatch(addPost(post));
        navigate('/');
    }

    return (
        <>
            <PostForm action={handleSubmit} actionText='Add Post' />
        </>
    )
}

export default AddPostForm;