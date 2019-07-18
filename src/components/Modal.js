import React from "react";


class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalValue: this.props.chooseCity
        };
    }

    handleChange = (e) => {
        this.setState({modalValue: e.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCityChoose(this.state.modalValue);
    };

    render() {
            return (
                <div className="modal-wrapper">
                    <div className="modal">
                        <div className="modal-question">
                            <span>Select your city</span>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" value={this.state.modalValue} onChange={this.handleChange}/>
                            <div className="modal-submit">
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            )
    }
}

export default Modal;