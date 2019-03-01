import React, { Component } from 'react'

export class Form extends Component {
    componentDidMount(){
        this.itemNameInput.focus();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.validateForm(event)) {
            this.props.addItem(event)
            event.target.itemName.value = "";
            event.target.cookingTime.value = "";
            event.target.itemName.focus();
        }
    }

    validateForm = (event) => {
        if (event.target.itemName.value === "") {
            alert("Item cannot be left blank.")
            return false;
        }
        if (event.target.cookingTime.value === "") {
            alert("Cooking time cannot be left blank.")
            return false;
        }
        if (parseInt(event.target.cookingTime.value) < 0) {
            alert("Cooking time cannot be a negative number.")
            return false;
        }
        return true;
    }

    render() {
        return (
            <div>
                <form id="form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input id="itemName" type="text" className="form-control" placeholder="Item" ref={(input) => { this.itemNameInput = input; }} />
                    </div>
                    <div className="form-group">
                        <input id="cookingTime" type="number" className="form-control" placeholder="Cooking Time in Minutes" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-warning">Submit</button>
                    </div>
                </form>
            </div>
        )
  }
}

export default Form
