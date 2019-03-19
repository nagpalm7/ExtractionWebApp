
import React, { Component } from 'react'; 
import { Radio, Button, Icon} from 'antd';

const RadioGroup = Radio.Group;

const radioStyle = {
      display: 'block',
      height: '40px',
      lineHeight: '50px',
    };

class Shift extends Component {

  render() {
    return (
        <form className={"form"}>
          <h3>Treatment involved extraction of teeth?</h3>
           <RadioGroup name="extractBool" onChange={this.props.handleDataChange} value={this.props.data.extractBool}>
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

export default Shift;
