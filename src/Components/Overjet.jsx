
import React, { Component } from 'react'; 
import { Radio, Button, Icon, Input} from 'antd';

const RadioGroup = Radio.Group;

const radioStyle = {
      display: 'block',
      height: '40px',
      lineHeight: '50px',
    };

class Overjet extends Component {

  render() {
    return (
        <form className={"form"}>
          <h3>Enter your overjet value in mm below...</h3>
          <p>
            Make sure your upper and lower back teeth meet the way you chew. And then measure the distance between upper and lower 
            meet at center of jaw. To know how to calculate ovejet click on Button below.
          </p>
          <Input placeholder="Enter value in (mm)..." value={this.props.data.overjet} name="overjet" required onChange={this.props.handleDataChange} type="number" allowClear/>
          <Button type="primary button" onClick={this.props.handleNext}>
            Next<Icon type="right"/>
          </Button>
        </form>
    );
  }
}

export default Overjet;
