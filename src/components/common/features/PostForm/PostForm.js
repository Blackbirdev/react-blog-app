import { Form, Button } from "react-bootstrap";
import { useState } from "react";

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
                    <Button style={{ width: '20%' }} variant='primary' type='submit'>{actionText}</Button>
                </Form>
            </div>
        </>
    )
}

export default PostForm;