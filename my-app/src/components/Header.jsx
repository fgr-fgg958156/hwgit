import React from "react";
import LinkElement from "./LinkElement";

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            titleLink: props.titleLink,
            links: props.links
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top shadow-sm">
                <div className="container-fluid">
                    <a className="navbar-brand" href={this.state.titleLink}>{this.state.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {Object.entries(this.state.links).map(([key, value]) => (
                                <LinkElement name={key} href={value}/>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;