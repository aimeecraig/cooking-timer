import React, { Component } from 'react'
import Timing from './Timing';

export class Timings extends Component {
    calculateTimings = () => {
        var duplicateArray = []
        this.props.items.forEach(element => {
            duplicateArray.push(element)
        });
        var timings = [];
        this.props.items.forEach(function (element, index) {
            var newElement;
            if (duplicateArray[index + 1] !== undefined) {
                newElement = {
                    id: element.id,
                    itemName: element.itemName,
                    cookingTime: element.cookingTime - duplicateArray[index + 1].cookingTime
                }
                timings.push(newElement)
                
            } else {
                newElement = {
                    id: element.id,
                    itemName: element.itemName,
                    cookingTime: element.cookingTime,
                }
                timings.push(newElement)
            }
        });
        return timings;
    }

    render() {
        return (
            <div>
                <h2>Timings</h2>
                <ul>
                    {this.calculateTimings().map((element) => (
                        <Timing key={element.id} item={element} />
                    ))}
                </ul>
            </div>
        )
    }
}

export default Timings
