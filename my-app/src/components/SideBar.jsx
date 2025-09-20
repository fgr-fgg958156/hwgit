import React from "react";
import LinkElement from "./LinkElement";

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title : props.title,
            links : props.links
        }
    }
    render() {
        return (
            <nav className="navbar bg-body-tertiary position-fixed start-0 vh-100 flex-column justify-content-center">
                <a className="navbar-brand" href={this.state.titleLink}>{this.state.title}</a>
                <ul className="navbar-nav flex-column p-5">
                    {Object.entries(this.state.links).map(([key, value]) => (
                        <LinkElement name={key} href={value}/>
                    ))}
                </ul>
            </nav>
        )
    }
}

export default Sidebar;