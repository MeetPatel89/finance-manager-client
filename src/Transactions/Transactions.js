import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class Transactions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: new Date()
        }
    }

    handleChange = (date) => {
        console.log(date);
        this.setState({
            selectedDate: date
        })
    }

    render() {
        return (
          <>
            <div className='date-picker'>
              <DatePicker
                selected={this.state.selectedDate}
                onChange={date => this.handleChange(date)}
              />
            </div>

            <p>Hello Transactions</p>
          </>
        );
    }
}