import React from "react";

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title : props.title,
            description : props.description
        }
    }
    render() {
        return (
            <div className="container py-5 mt-5">
                <div className="row align-items-center gx-4">
                    <div className="col-md-6">
                        <h1 className="display-6">{this.state.title}</h1>
                        <p className="lead">{this.state.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Content;