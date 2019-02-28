import React, { Component } from 'react'

export class Form extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("submit handled")
        this.props.addItem(event);
        event.target.itemName.value = "";
        event.target.cookingTime.value = "";
    }

    render() {
        return (
        <div>
            <form id="form" onSubmit={this.handleSubmit} >
                <div className="form-group">
                    <input id="itemName" type="text" className="form-control" placeholder="Item" autoFocus />
                </div>
                <div className="form-group">
                    <input id="cookingTime" type="text" className="form-control" placeholder="Cooking Time in Minutes" />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-dark">Submit</button>
                </div>
            </form>
        </div>
        )
  }
}

export default Form
