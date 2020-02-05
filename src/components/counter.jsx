import React, { Component } from 'react';

class Counter extends Component {
    
    getBadge() {
        let classes = 'badge p-2 m-2 badge-';
        const {value} = this.props.counter;
        classes += (value === 0) ? 'secondary p-3' : 'success';
        return classes;  
    }

    formatCount() {
        let {value} = this.props.counter;
        value = (value === 0) ? 'zero' : value;
        return value;
    }

    render() {
        const {counter, onIncreament, onDelete} = this.props;      
        return (
            <div className='m-2'>
                <span className={this.getBadge()}>{this.formatCount()}</span>
                <button 
                    className='btn btn-warning m-2' 
                    onClick={() => onIncreament(counter)}
                >
                    Increment
                </button>
                <button 
                    className='btn btn-danger m-2' 
                    onClick={() => onDelete(counter.id)}
                >
                    Delete
                </button>
            </div>
        );
    }
}

export default Counter;