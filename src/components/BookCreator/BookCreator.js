// eslint-disable-next-line

import React from 'react';
import PropTypes from 'prop-types';

class BookCreator extends React.Component {
    static propTypes = {
      text: PropTypes.string,
      action: PropTypes.func,
    }
  
    static defaultProps = {
      text: 'Add new item',
    }
  
    state = {
      value: '',
      visibleButtons: false,
    }
  
    handleChange = event => {
      // console.log(event);
      this.setState({
        value: event.target.value,
        visibleButtons: event.target.value.length > 0,
      });
    }
  
    handleOK = () => {
      if(this.state.value !== ''){
        this.props.action(this.state.value);
        this.setState({
          value: '',
          visibleButtons: false,
        });
      }
    }
  
    handleCancel = () => {
      this.setState({
        value: '',
        visibleButtons: false,
      });
    }


    render() {
      return (
        <div>
          <input
            type='text'
            placeholder={this.props.text}
            value={this.state.value}
            onChange={this.handleChange}
          />
          <div>
            <button onClick={this.handleOK}>OK</button>
            <button onClick={this.handleCancel} variant='danger'>cancel</button>
          </div>
        </div>
      );
    }
  }
  
  export default BookCreator;