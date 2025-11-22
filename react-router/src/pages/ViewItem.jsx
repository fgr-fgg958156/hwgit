import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchData} from "../utils/api.js";
import {Alert, Button, InputGroup, Row, Spinner} from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import RatingStars from "../components/CustomProductCard/RatingStars.jsx";
import Form from 'react-bootstrap/Form';
import routerPaths from "../router/routerPaths.js";
import CustomSmallCard from "../components/CustomProductCard/CustomSmallCard.jsx";

const ViewItem = () => {
    const {id} = useParams();
    const [data, setData] = useState([]);
    const [product, setPosts] = useState(null);
    const [loading, serLoading] = useState(false);
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const loadPosts = async () => {
            serLoading(true)
            try {
                const data  = await fetchData(`/products/${id}`);
                setPosts(data);
            } catch (error) {
                console.log(error)
            } finally {
                serLoading(false)
            }
        }

        loadPosts()
    }, [id]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products")
                const data = await res.json();
                setData(data);
                console.log(data)
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    const addToCart = () => {
        const data = JSON.parse(localStorage.getItem("cartList") || "[]");
        const dataProduct = data.find((item) => item.id === id);
        if(dataProduct){
            dataProduct.count += count;
        }
        else{
            data.push({id: id, title: product.title, count: count, price: product.price});
        }
        localStorage.setItem("cartList", JSON.stringify(data));
        navigate(routerPaths.items)
    }

    return (
        <div>
            {loading ? <Alert variant={'warning'} className="text-center">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading post...</span>
                </Spinner>
            </Alert> : null}

            {product ?
                    <div className={"d-flex justify-content-center flex-wrap gap-4"}>
                        <div>
                            <Image src={product.image} thumbnail />
                        </div>
                        <div>
                            <h1>{product.title}</h1>
                            <p>{product.description}</p>
                            <p><strong>ціна: {product.price} $</strong></p>
                            <p><strong>категорії: {product.category}</strong></p>
                            <RatingStars rate={product.rating.rate} id={product.id} maxRate={5}/>
                            <p><strong>рейтинг: {product.rating.rate}({product.rating.count})</strong></p>
                            <InputGroup className="mb-3">
                                <Button variant="outline-secondary" id="button-addon1" onClick={()=>{if(count > 0)addToCart()}}>
                                    <i className="bi bi-cart3"></i>
                                </Button>
                                <Form.Control
                                    aria-label="Example text with button addon"
                                    aria-describedby="basic-addon1"
                                    type="number"
                                    step={1}
                                    min={0}
                                    value={count}
                                    onChange={(e) => {
                                        const val = Math.abs(Math.floor(Number(e.target.value)));
                                        setCount(val);
                                    }}
                                />
                            </InputGroup>
                        </div>
                    </div>

             : null}
            <div className={"d-flex justify-content-center align-content-center flex-wrap gap-4 mb-5 flex-column"}>
                <Row><h3>Подібні товари:</h3></Row>
                <Row className={"d-flex justify-content-center flex-wrap gap-4 mb-5 gap-2"}>
                    {
                        data.map(item => (
                            item.category === product.category && item.id !== product.id ? <CustomSmallCard key={item.id} name={item.title} imageUrl={item.image} onClick={() => navigate(`${routerPaths.viewItem}/${item.id}`)}/> : null
                        ))
                    }
                </Row>
            </div>
        </div>
    );
};

export default ViewItem;
