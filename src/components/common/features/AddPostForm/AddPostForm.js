import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../../../redux/postsRedux";
import { useNavigate } from "react-router-dom";
import shortid from "shortid";

const AddPostForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishedDate, setPublishedDate] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [content, setContent] = useState('');

    const handleAdd = e => {
        e.preventDefault();
        navigate('/');
        dispatch(addPost({ id: shortid(), title, author, publishedDate, shortDescription, content }));
        setTitle('');
        setAuthor('');
        setPublishedDate('');
        setShortDescription('');
        setContent('');
    };

    return (
        <>
            <div className='d-flex justify-content-center px-3'>
                <Form style={{ width: '70%' }}>
                    <h2 className='py-3'>Add Post</h2>
                    <Form.Group className="mb-4">
                        <Form.Label>Title</Form.Label>
                        <Form.Control style={{ width: '50%' }} placeholder='Enter title' value={title} onChange={e => setTitle(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Label>Author</Form.Label>
                        <Form.Control style={{ width: '50%' }} placeholder="Enter author" value={author} onChange={e => setAuthor(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Label>Published date</Form.Label>
                        <Form.Control style={{ width: '50%' }} placeholder="Enter date DD-MM-YYYY" value={publishedDate} onChange={e => setPublishedDate(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Label>Short description</Form.Label>
                        <Form.Control placeholder="Leave a comment here" value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Label>Content of the post</Form.Label>
                        <Form.Control placeholder="Leave a comment here" as="textarea" rows={10} value={content} onChange={e => setContent(e.target.value)} />
                    </Form.Group>
                    <Button onClick={handleAdd} style={{ width: '20%' }} variant='primary' type='submit'>Add Post</Button>
                </Form>
            </div>
        </>
    )
}

export default AddPostForm;