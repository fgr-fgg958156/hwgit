import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import CustomCard from "../components/CustomProductCard/CustomCard.jsx";
import routerPaths from "../router/routerPaths.js";
import {Col, InputGroup, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form";

const Catalog = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const [filter, setFilter] = useState("")
    const [search, setSeach] = useState("")
    const [price, setPrice] = useState(0)

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

    return (
        <div className="d-flex justify-content-center flex-wrap gap-4 mb-5">
            <Row>
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Text><i className="bi bi-funnel-fill"></i></InputGroup.Text>
                        <Form.Control
                            placeholder="filter"
                            aria-label="filter"
                            value={filter}
                            onChange={(e) => {
                                setFilter(e.target.value);
                            }}
                        />
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Text><i className="bi bi-tags-fill"></i></InputGroup.Text>
                        <Form.Control
                            type="number"
                            placeholder="price"
                            aria-label="price"
                            value={price}
                            onChange={(e) => {
                                const val = Math.abs(Math.floor(Number(e.target.value)));
                                setPrice(val);
                            }}
                        />
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup className="mb-3">
                        <InputGroup.Text><i className="bi bi-search"></i></InputGroup.Text>
                        <Form.Control
                            placeholder="search"
                            aria-label="search"
                            value={search}
                            onChange={(e) => {
                                setSeach(e.target.value);
                            }}
                        />
                    </InputGroup>
                </Col>
            </Row>
            <div className={"d-flex justify-content-center flex-wrap gap-4"}>
                {
                    data.map(item => (
                        (item.title.toLowerCase().includes(search.toLowerCase()) || search === "") && (item.category.toLowerCase().includes(filter.toLowerCase()) || filter === "") && (item.price <= price || price === 0) ? <CustomCard key={item.id} id={item.id} name={item.title} category={item.category} description={item.description} imageUrl={item.image} price={item.price} rating={item.rating.rate} onClick={() => navigate(`${routerPaths.viewItem}/${item.id}`)}/> : null
                    ))
                }
            </div>
        </div>
    );
};

export default Catalog;
