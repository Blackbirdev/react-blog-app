import { Form, Button, DropdownButton, Dropdown } from "react-bootstrap";
import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { getAllCategories } from "../../../../redux/categoriesRedux";

const PostForm = ({ action, actionText, ...props }) => {

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [dateError, setDateError] = useState(false);
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');
    const [contentError, setContentError] = useState(false);
    const { register, handleSubmit: validate, formState: { errors } } = useForm();
    const [categoryId, setCategoryId] = useState(props.post ? props.post.categoryId : '');
    const [categoryError, setCategoryError] = useState(false);

    const categories = useSelector(getAllCategories);

    const getCategoryNameById = id => categories.find(cat => cat.id === id).name;

    const handleSubmit = () => {
        setContentError(!content)
        setDateError(!publishedDate)
        setCategoryError(!categoryId)
        if (content && publishedDate && categoryId) {
            action({ title, author, publishedDate, shortDescription, content, categoryId });
        }
    };

    const handleCategorySelect = e => {
        setCategoryId(e);
    };

    return (
        <>
            <div className='d-flex justify-content-center px-3'>
                <Form onSubmit={validate(handleSubmit)} style={{ width: '70%' }}>
                    <h2 className='py-3'>Add Post</h2>
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            {...register("title", { required: true, minLength: 3 })}
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            type="text" placeholder="Enter title" />
                        {errors.title && <small className="d-block form-text text-danger mt-2">Title is too short (required min. 3)</small>}
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Label>Author</Form.Label>
                        <Form.Control
                            {...register("author", { required: true, minLength: 3 })}
                            value={author}
                            onChange={e => setAuthor(e.target.value)}
                            type="text" placeholder="Enter author" />
                        {errors.title && <small className="d-block form-text text-danger mt-2">Oh no! Author's name is too short (required min. 3)</small>}
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Label style={{ width: '80%', border: '' }}>Published date</Form.Label>
                        <ReactDatePicker
                            dateFormat="dd-MM-yyyy"
                            selected={publishedDate}
                            onChange={(date) => setPublishedDate(date)} />
                        {dateError && <small className="d-block form-text text-danger mt-2">Published date is required</small>}
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Label>Category</Form.Label>
                        <DropdownButton
                            variant="outline border-secondary"
                            title={categoryId ? getCategoryNameById(categoryId) : "Select a category..."}
                            onSelect={handleCategorySelect}>
                            {categories.map(cat => (
                                <Dropdown.Item key={cat.id} eventKey={cat.id}>{cat.name}</Dropdown.Item>))}
                        </DropdownButton>
                        {categoryError && <small className="d-block form-text text-danger mt-2">Please select a category</small>}
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Label>Short description</Form.Label>
                        <Form.Control
                            {...register("shortDescription", { required: true, minLength: 20 })}
                            value={shortDescription}
                            onChange={e => setShortDescription(e.target.value)}
                            type="text" placeholder="Leave a comment here" />
                        {errors.shortDescription && <small className="d-block text-danger mt-2"> Ups! Short description is required and should have at least 20 characters</small>}
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Label>Content of the post</Form.Label>
                        <ReactQuill
                            placeholder="Leave a comment here"
                            value={content}
                            onChange={setContent} />
                        {contentError && <small className="d-block form-text text-danger mt-2">Content of the post can't be empty</small>}
                    </Form.Group>
                    <Button style={{ width: '20%' }} variant='primary' type='submit'>{actionText}</Button>
                </Form>
            </div>
        </>
    )
}

export default PostForm;