import React , { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {
        const {onReset, counters, onHandleIncrement, onHandleDelete} = this.props;   
        return (
            <div className='m-3'>
                <button 
                    className = "btn btn-primary p-2 btn-sm m-2"
                    onClick = {onReset}  
                >
                    Reset
                </button>
                { counters.map( counter => 
                    <Counter
                        key = {counter.id}
                        counter = {counter}
                        onIncreament = {onHandleIncrement}
                        onDelete = {onHandleDelete}
                    />
                )}
            </div>
        );
    }
}
 
export default Counters;