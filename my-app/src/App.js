import logo from './logo.svg';
import './App.css';
import {useState} from "react";

const user = {
    name: 'Геді Ламар',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};

const users = [
    {
        name: 'Пантелеймон Куліш',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Panteleimon_Kulish.jpg',
        profession: ["письменник", "перекладач", "критик"],
        birthYear: 1819,
        id: 0
    },
    {
        name: 'Михайло Драгоманов',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/uk/thumb/8/8c/%D0%94%D1%80%D0%B0%D0%B3%D0%BE%D0%BC%D0%B0%D0%BD%D0%BE%D0%B2_%D0%9C.jpg/250px-%D0%94%D1%80%D0%B0%D0%B3%D0%BE%D0%BC%D0%B0%D0%BD%D0%BE%D0%B2_%D0%9C.jpg',
        profession: ["історик", "філософія", "політик"],
        birthYear: 1841,
        id: 1
    },
    {
        name: 'Агатангел Кримський',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeqVtRJp0S1TYawS6qTataPqxF663T1D6wwmV5uG7b9yJCx4zniDkWSdfUgGldPiE1A8zZwlKF4TgVqjmdujYiMMxkXlK9bLiUyZbkwmy7sA',
        profession: ["письменник", "перекладач", "історик"],
        birthYear: 1871,
        id: 2
    },
    {
        name: 'Михайло Грушевський',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Hrushevskyi_Mykhailo_XX.jpg/250px-Hrushevskyi_Mykhailo_XX.jpg',
        profession: ["політик", "перекладач", "історик"],
        birthYear: 1866,
        id: 3
    }
]

const products = [
    { title: 'Капуста', id: 1 },
    { title: 'Часник', id: 2 },
    { title: 'Яблуко', id: 3 },
];

const listItems = products.map(product =>
    <li key={product.id}>
        {product.title}
    </li>
);

function App() {
    const [showList, setShowList] = useState(false);
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }
    return (
        <div className="App">
            <header className="App-header">
                <>
                    <h1>Ласкаво просимо до мого застосунку</h1>
                    <MyButton2 onClick={() => setShowList(!showList)}/>
                    {showList && <MakeList users={users}/> }
                </>
                <>
                    <MyButton count={count} onClick={handleClick} />
                    <h1>{user.name}</h1>
                    <img
                        className="avatar"
                        src={user.imageUrl}
                        alt={'Фото ' + user.name}
                        style={{
                            width: user.imageSize,
                            height: user.imageSize
                        }}
                    />
                    return (
                    <ul>{listItems}</ul>
                    );
                </>
            </header>
        </div>
    );
}
function MyButton({ count, onClick }) {
    return (
        <button onClick={onClick}>
            Натиснуто {count} разів
        </button>
    );
}

function MyButton2({onClick}) {
    return (
        <button onClick={onClick}>Завантажити діячів</button>
    );
}

function MakeList({users}) {
    return (
        <ul>
            {users.map((user) => {
                return (<li key={user.id}>
                    Ім'я: {user.name}
                    <br/>Професії: {user.profession.join(", ")}
                    <br/>Рік народження: {user.birthYear}
                    <br/><img
                    className="avatar"
                    src={user.imageUrl}
                    alt={'Фото ' + user.name}
                    style={{
                        width: 64,
                        height: 64
                    }}
                />
                </li>)
            })}
        </ul>
    );
}

export default App;
