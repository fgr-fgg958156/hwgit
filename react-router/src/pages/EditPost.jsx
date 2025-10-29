import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import PageHeader from "../components/PageHeader/index.js";
import {Alert, Button, Form, Spinner} from "react-bootstrap";
import {fetchData} from "../utils/api.js";
import routerPaths from "../router/routerPaths.js";

const initialFormState = {
    title: '',
    body: ''
}

const EditUser = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isRequestSuccess, setIsRequestSuccess] = useState(false);
    const [formState, setFormState] = useState({...initialFormState})

    useEffect(() => {
        const loadPosts = async () => {
            setLoading(true)
            try {
                const data  = await fetchData(`/posts/${id}`);
                setPost(data);
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        loadPosts()
    }, []);

    useEffect(()=>{
        if(post !== null) {
            setFormState({
                title: post.title,
                body: post.body
            })
        }
    }, [post])

    const handleChange = ({target}) => {
        const localState = {...formState}
        localState[target.name] = target.value
        setFormState(localState)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(loading) return;

        setLoading(true)
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    id,
                    title: formState.title,
                    body: formState.body,
                    userId: post.userId,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            const json = await response.json();
            console.log(json)
            setFormState({...initialFormState})
            setIsRequestSuccess(true)
            setTimeout(() => {
                navigate(routerPaths.posts)
            }, 2000)
        } catch (error) {
            console.log(error)
            setIsRequestSuccess(false)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <PageHeader title={`Edit User id#${id}`} />

            {isRequestSuccess ? <Alert variant={'success'} className="text-center">Data Saved!</Alert> : null}

            <Form className='col-md-6 offset-md-3' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label column={false}>Title</Form.Label>
                    <Form.Control disabled={loading} type="text" placeholder="Enter title" name={'title'} value={formState.title} onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label column={false}>Body</Form.Label>
                    <Form.Control disabled={loading} as="textarea" placeholder="Body" rows={3} name={'body'} value={formState.body} onChange={handleChange}/>
                </Form.Group>
                <Button variant={loading ? 'secondary' : 'primary'} type="submit" className='d-flex align-items-center gap-2' disabled={loading}>
                    <span>Submit</span>

                    {loading && <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading post...</span>
                    </Spinner>}
                </Button>
            </Form>
        </div>
    );
};

export default EditUser;
