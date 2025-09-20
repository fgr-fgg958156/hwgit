import React from "react";

class LinkElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            href: props.href
        };
    }
    render() {
        return (
            <li className="nav-item">
                <a className="nav-link active fs-4" aria-current="page" href={this.state.href}>{this.state.name}</a>
            </li>
        )
    }
}

export default LinkElement;