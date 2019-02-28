import React, { Component } from 'react'

export class Timing extends Component {
    render() {
        return (
            <div>
                <li>Add the {this.props.item.itemName} for {this.props.item.cookingTime} minutes then...</li>
            </div>
        )
    }
}

export default Timing
