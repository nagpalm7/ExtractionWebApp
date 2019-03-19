
import React, { Component } from 'react'; 
import { Radio, Button, Icon} from 'antd';

const RadioGroup = Radio.Group;

const radioStyle = {
      display: 'block',
      height: '40px',
      lineHeight: '50px',
    };

class NumberOfTeeths extends Component {

  render() {
    return (
        <form className={"form"}>
          <h3>How many teeth were removed?</h3>
           <RadioGroup name="numberOfTeeths" onChange={this.props.handleDataChange} value={this.props.data.numberOfTeeths}>
            <Radio style={radioStyle} value={true}>One</Radio>
            <Radio style={radioStyle} value={false}>Two or more</Radio>
          </RadioGroup>
          <Button type="primary button" onClick={this.props.handleNext}>
            Next<Icon type="right"/>
          </Button>
        </form>
    );
  }
}

export default NumberOfTeeths;
