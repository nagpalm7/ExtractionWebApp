import React, { Component } from 'react'; 
import { Radio, Button, Icon} from 'antd';

const RadioGroup = Radio.Group;

const radioStyle = {
      display: 'block',
      height: '40px',
      lineHeight: '50px',
    };

class AgeForm extends Component {

  render() {
    return (
        <form className={"form"}>
          <h3>What is your age ?</h3>
           <RadioGroup name="age" onChange={this.props.handleDataChange} value={this.props.data.age}>
            <Radio style={radioStyle} value={1}>Less Than 15</Radio>
            <Radio style={radioStyle} value={2}>Between 15 and 18</Radio>
            <Radio style={radioStyle} value={3}>Above  18</Radio>
          </RadioGroup>
          <Button type="primary button" onClick={this.props.handleNext}>
            Next<Icon type="right"/>
          </Button>
        </form>
    );
  }
}

export default AgeForm;
