import React, { Component } from 'react'; 
import { Radio, Button, Icon, Modal} from 'antd';

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
          <Modal
              title="IMPORTANT"
              visible={this.props.modal}
              onOk={this.props.handleNext}
              onCancel={this.props.toggle}
            >
              <p>Results will be 60-70% accurate. Do you still want to continue</p>
            </Modal>
          <h3>What is your gender?</h3>
           <RadioGroup name="gender" onChange={this.props.handleDataChange} value={this.props.data.gender}>
            <Radio style={radioStyle} value={'male'}>Male</Radio>
            <Radio style={radioStyle} value={'female'}>Female</Radio>
          </RadioGroup>
          <Button type="primary button" onClick={this.props.handleNext}>
            Next<Icon type="right"/>
          </Button>
        </form>
    );
  }
}

export default AgeForm;
