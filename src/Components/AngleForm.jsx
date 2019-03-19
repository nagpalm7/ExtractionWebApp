
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
          <h3>What is your Nasolabial angle?</h3>
          <p> For help click HELP button, Else Click one of the option below...</p>
           <RadioGroup name="angle" onChange={this.props.handleDataChange} value={this.props.data.angle}>
            <Radio style={radioStyle} value={1}>Less than 95 degrees</Radio>
            <Radio style={radioStyle} value={2}>Between 95 and 105</Radio>
            <Radio style={radioStyle} value={3}>More than  105 degree</Radio>
          </RadioGroup>
          <img src="https://doctorlib.info/surgery/plastic/plastic.files/image584.jpg" width="" height="200" />
          <Button type="primary button" onClick={this.props.handleNext}>
            Next<Icon type="right"/>
          </Button>
        </form>
    );
  }
}

export default AgeForm;
