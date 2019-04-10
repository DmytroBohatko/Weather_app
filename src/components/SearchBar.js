import React from "react";
import faSearch from "@fortawesome/fontawesome-free-solid/faSearch";
import faTimes from "@fortawesome/fontawesome-free-solid/faTimes";
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClear = this.handleClear.bind(this)
    }

    handleClear() {
        this.handleChange(null)
    };

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(true);
    };

    handleChange(e) {
        if (e === null) {
            this.props.onFilterChange("")
        } else {
            this.props.onFilterChange(e.target.value);
        }
    };

    render() {
        return (
            <div className="search-bar">
                <div className="border-bot"></div>
                <span>
                    <FontAwesomeIcon icon={faSearch}/>
                </span>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.props.sValue}
                        onChange={this.handleChange}
                    />
                </form>

                <span onClick={this.handleClear} className="clear-search">
                    <FontAwesomeIcon icon={faTimes}/>
                </span>
            </div>
        )
    }
}

export default SearchBar