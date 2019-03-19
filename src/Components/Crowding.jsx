

import React, { Component } from 'react'; 
import { Radio, Button, Icon} from 'antd';
import CRD1 from "../assets/imgs/crd1.png"
import CRD2 from "../assets/imgs/crd2.png"

const RadioGroup = Radio.Group;

const radioStyle = {
      display: 'block',
      height: '100px',
      lineHeight: '50px',
    };

class AgeForm extends Component {

  render() {
    return (
        <form className={"form"}>
          <h3>Select the most approprite image for you teeth</h3>
          <p> Take picture fo your teeth in the similar pose as given under and match it with the options give...</p>
           <RadioGroup name="crowding" onChange={this.props.handleDataChange} value={this.props.data.crowding}>
            <Radio style={radioStyle} value={1}><img src={CRD1} width="100" height="90" />Less than 5</Radio>
            <Radio style={radioStyle} value={2}><img src={CRD2} width="100" height="90" />Between 5 and 10</Radio>
            <Radio style={radioStyle} value={3}><img src="https://doctorlib.info/surgery/plastic/plastic.files/image584.jpg" width="100" height="100" />More than  10</Radio>
          </RadioGroup>
          <Button type="primary button" onClick={this.props.handleNext}>
            Next<Icon type="right"/>
          </Button>
        </form>
    );
  }
}

export default AgeForm;
