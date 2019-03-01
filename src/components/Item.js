import React, { Component } from 'react'

export class Item extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            borderBottom: '1px #ccc dotted',
            paddingTop: '20px',
            paddingRight: '20px'
        }
    }

    render() {
        return (
        <div style={this.getStyle()} >
            <ul>
                <li>{this.props.item.itemName}, {this.props.item.cookingTime} minutes.</li>
            </ul>
        </div>
        )
    }
}

export default Item
