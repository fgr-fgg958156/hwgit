import {useNavigate} from "react-router-dom";
import {Button, Table} from "react-bootstrap";
import {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";

const CartList = () => {
    const navigate = useNavigate();
    const [data, setData] = useState(JSON.parse(localStorage.getItem("cartList")|| "[]"));
    const [finalCost, setFinalCost] = useState(0);

    /*const updateCart = () => {
        setData(JSON.parse(localStorage.getItem("cartList")|| "[]"))
    }*/

    useEffect(() => {
        let finalCostValue = 0;
        for (let i = 0; i < data.length; i++) {
            finalCostValue += data[i].price * data[i].count;
        }
        setFinalCost(finalCostValue.toFixed(2));
    }, [data]);

    const removeProduct = (id) => {
        const updatedData = data.filter(item => item.id !== id);
        setData(updatedData);
        localStorage.setItem("cartList", JSON.stringify(updatedData));
    }

    return (
        <div>
            <h1>Корзина</h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Ім&#39;я</th>
                    <th>Кількість</th>
                    <th>Ціна</th>
                    <th>#</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map(item => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>
                                <Form.Control
                                    aria-label="Example text with button addon"
                                    aria-describedby="basic-addon1"
                                    type="number"
                                    step={1}
                                    min={0}
                                    value={item.count}
                                    onChange={(e) => {
                                        const newCount = Math.abs(Math.floor(Number(e.target.value)));
                                        const updatedData = data.map((p) => (p.id === item.id) ? {...p, count: newCount} : p);
                                        setData(updatedData);
                                        localStorage.setItem("cartList", JSON.stringify(updatedData));
                                    }}
                                />
                            </td>
                            <td>{(item.price * item.count).toFixed(2)} $</td>
                            <td>
                                <Button variant="outline-secondary" id="button-addon1" onClick={()=>removeProduct(item.id)}>
                                    <i className="bi bi-trash"></i>
                                </Button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>Підсумкова ціна: {finalCost} $</th>
                        <th>
                            <Button variant="outline-secondary" id="button-addon1" onClick={() => { if(finalCost>0)navigate("/order")}}>
                                <i className="bi bi-cart-check"></i>
                            </Button>
                        </th>
                    </tr>
                </tfoot>
            </Table>
        </div>
    );
};

export default CartList;