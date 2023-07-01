import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PostForm = ({ action, actionText, ...props }) => {

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');

    const handleSubmit = e => {
        e.preventDefault();
        action({ title, author, publishedDate, shortDescription, content });
    };

    return (
        <>
            <div className='d-flex justify-content-center px-3'>
                <Form onSubmit={handleSubmit} style={{ width: '70%' }}>
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
                        <Form.Label style={{ width: '80%', border: '' }}>Published date</Form.Label>
                        <ReactDatePicker dateFormat="dd-MM-yyy" selected={publishedDate} onChange={(date) => setPublishedDate(date)} />
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Label>Short description</Form.Label>
                        <Form.Control placeholder="Leave a comment here" value={shortDescription} onChange={e => setShortDescription(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Label>Content of the post</Form.Label>
                        <ReactQuill placeholder="Leave a comment here" value={content} onChange={setContent} />
                    </Form.Group>
                    <Button style={{ width: '20%' }} variant='primary' type='submit'>{actionText}</Button>
                </Form>
            </div>
        </>
    )
}

export default PostForm;