
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
          <h3>Have you previously been treated with braces?</h3>
           <RadioGroup name="braces" onChange={this.props.handleDataChange} value={this.props.data.braces}>
            <Radio style={radioStyle} value={false}>No</Radio>
            <Radio style={radioStyle} value={true}>Yes</Radio>
          </RadioGroup>
          <Button type="primary button" onClick={this.props.handleNext}>
            Next<Icon type="right"/>
          </Button>
        </form>
    );
  }
}

export default AgeForm;
