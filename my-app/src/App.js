import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import Content from "./components/Content";

function App() {
    const headerObject = {
        "Home" : "#",
        "About" : "#",
        "Contact" : "#"
    }

    return (
        <div className="App">
            <header className="App-header">
                <Header title={"HW-57"} titleLink={"#"} links={headerObject}/>
                <Sidebar title={"sidebar"} links={headerObject}/>
                <Content title={"Content"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."}/>
            </header>
        </div>
    );
}

export default App;
