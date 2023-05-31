import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { editPost, getPostById } from "../../../../redux/postsRedux";
import PostForm from "../PostForm/PostForm";

const EditPostForm = () => {

    const { id } = useParams();
    const postData = useSelector(state => getPostById(state, id));

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEdit = post => {
        navigate('/');
        dispatch(editPost({ ...post, id }));
    };

    if (!postData) return <Navigate to='/' />
    return (
        <>
            <PostForm actionText='Edit Post' action={handleEdit} author={postData.author} publishedDate={postData.publishedDate} title={postData.title} shortDescription={postData.shortDescription} content={postData.content} />
        </>
    )
}

export default EditPostForm;