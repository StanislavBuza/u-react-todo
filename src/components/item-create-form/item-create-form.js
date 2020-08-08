import React, {Component} from "react";
import './item-create-form.css'

export default class ItemCreateForm extends Component {

    state = {
        label: ""
    };

    onInputChange = (e) => {
        this.setState({label: e.target.value})
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({label: ""})
    };


    render() {
        return (
            <form className="item-create-form d-flex"
                  onSubmit={this.onSubmit}>
                <input type="text"
                       className="form-control"
                       onChange={this.onInputChange}
                       placeholder="What needs to be done?"
                       value={this.state.label}
                />
                <button
                    className="btn btn-outline-secondary">
                    Create
                </button>
            </form>
        )
    }
};
