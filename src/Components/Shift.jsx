
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
          <h3>Is there midline shift?</h3>
          <p>If your teeth matches with any of the given two images select YES, else NO, If still you need help, Click DEMO button</p>
           <RadioGroup name="shift" onChange={this.props.handleDataChange} value={this.props.data.shift}>
            <Radio style={radioStyle} value={false}>No</Radio>
            <Radio style={radioStyle} value={true}>Yes</Radio>
          </RadioGroup>
          <div style={{display:'block'}}>
            <img style={{display:'inline-block',width:'200px',height:'200px',padding: '10px'}} src="http://pixel.nymag.com/imgs/daily/science/2015/06/08/08-teeth-tom-cruise-2.w560.h375.jpg"/>
            <img style={{display:'inline-block',width:'200px',height:'200px',padding: '10px'}} src="https://seasons-of-smiles.com/wp-content/uploads/2012/07/7262ff763381645acdb98857d2ff55f1-240x300.jpg"/>
          </div>
          <Button type="primary button" onClick={this.props.handleNext}>
            Calcuate
          </Button>
        </form>
    );
  }
}

export default Shift;
