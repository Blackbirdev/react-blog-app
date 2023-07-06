import { Link, Navigate, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPostById, removePost } from "../../../redux/postsRedux";
import { useState } from "react";
import { Button, Modal, Card } from "react-bootstrap";
import { DateToStr } from "../../../utils/dateToStr";
import { getCategoryById } from "../../../redux/categoriesRedux";

const Post = props => {

    const { id } = useParams();
    const postData = useSelector(state => getPostById(state, id));
    const [show, setShow] = useState(false);

    const category = useSelector(categories => getCategoryById(categories, postData.categoryId)).name;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    const handleRemove = () => {
        navigate('/')
        dispatch(removePost(id));
        handleClose();
    }

    if (!postData) return <Navigate to="/" />
    return (
        <>
            <div className='d-flex justify-content-center py-3'>
                <Card style={{ width: '33rem' }} className='border-0'>
                    <div className='d-flex justify-content-between'>
                        <h2>{postData.title}</h2>
                        <div>
                            <Link key={props.id} to={'/post/edit/' + id}>
                                <Button variant='outline-info m-1'>Edit</Button>
                            </Link>
                            <Button onClick={handleShow} variant='outline-danger m-1'>Delete</Button>
                        </div>
                    </div>
                    <p>
                        <b>Author: </b>{postData.author}<br />
                        <b>Published: </b>{DateToStr(postData.publishedDate)}<br />
                        <b>Category:  </b>{category}</p>
                    <p dangerouslySetInnerHTML={{ __html: postData.content }} />
                </Card>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Woohoo, this operation will completely remove this post from the app!
                        <br />Are you sure you want to do that?
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleRemove}>
                        Remove
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Post;