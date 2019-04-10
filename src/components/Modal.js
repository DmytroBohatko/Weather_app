import React from "react";


class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalValue: this.props.chooseCity,
            show: this.props.show
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({modalValue: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onCityChoose(this.state.modalValue);
    }

    render() {
        if (this.props.show === true) {
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
        } else {
            return (null)
        }
    }
}

export default Modal;