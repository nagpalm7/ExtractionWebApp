import React, { Component } from 'react';
import Card  from "./Components/Card"
import AgeForm from "./Components/AgeForm";
import GenderForm from "./Components/GenderForm";
import AngleForm from "./Components/AngleForm";
import BracesForm from "./Components/BracesForm";
import Overjet from "./Components/Overjet";
import Procline from "./Components/Procline";
import Crowding from "./Components/Crowding";
import Shift from "./Components/Shift";
import ExtractBool from "./Components/ExtractBool";
import NumberOfTeeths from "./Components/NumberOfTeeths";
import { message } from 'antd';
import './App.css';
import '../node_modules/antd/dist/antd.css' 

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        visible: {
          age:true,
          gender:false,
          braces:false,
          angle:false,
          crowding:false,
          procline:false,
          overjet:false,
          shift:false,
          extractBool:false,
          numberOfTeeths:false
        },
        data:{
          age:1,
          gender:null,
          braces:null,
          angle:null,
          crowding:null,
          procline:null,
          overjet:null,
          shift:null,
          extractBool:null,
          numberOfTeeths:null
        }
      }
    }

  handleNext(){
    console.log(this.state)
    if(this.state.data.shift !== null){
      message.success('Voila !');
    }
    else if(this.state.data.overjet !== null && this.state.data.overjet !== ''){
      this.setState({
        visible:{
          ...this.state.visible,
          overjet:false,
          shift:true
        },
        data:{
          ...this.state.data,
          shift:false
        }
      })
    }
    else if(this.state.data.procline !== null){
      this.setState({
        visible:{
          ...this.state.visible,
          procline:false,
          overjet:true
        }
      })
    }
    else if(this.state.data.crowding !== null){
      this.setState({
        visible:{
          ...this.state.visible,
          crowding:false,
          procline:true
        },
        data:{
          ...this.state.data,
          procline:false
        }
      })
    }
    else if(this.state.data.angle !== null){
      this.setState({
        visible:{
          ...this.state.visible,
          angle:false,
          crowding:true
        },
        data:{
          ...this.state.data,
          crowding:1
        }
      })
    }
    else if(this.state.data.braces === false){
      this.setState({
        visible:{
          ...this.state.visible,
          braces:false,
          angle:true
        },
        data:{
          ...this.state.data,
          angle:1
        }
      })
    }
    else if(this.state.data.numberOfTeeths){
      this.setState({
        visible:{
          ...this.state.visible,
          numberOfTeeths:false,
          angle:true
        },
        data:{
          ...this.state.data,
          angle:1
        }
      })
    }
    else if(this.state.data.numberOfTeeths === false){
      message.error('Please Consult A Dentist. This Test Cannot Be Performed');
    }
    else if(this.state.data.extractBool === false){
      this.setState({
        visible:{
          ...this.state.visible,
          extractBool:false,
          angle:true
        },
        data:{
          ...this.state.data,
          angle:1
        }
      })
    }
    else if(this.state.data.extractBool){
      this.setState({
        visible:{
          ...this.state.visible,
          extractBool:false,
          numberOfTeeths:true
        },
        data:{
          ...this.state.data,
          numberOfTeeths:true,
        }
      })
    }
    else if(this.state.data.braces){
      this.setState({
        visible:{
          ...this.state.visible,
          braces:false,
          extractBool:true
        },
        data:{
          ...this.state.data,
          extractBool:false,
        }
      })
    }
    else if(this.state.data.gender === 'male'){
      if(this.state.modal){
        this.setState({
          visible:{
            ...this.state.visible,
            gender:false,
            braces:true
          },
          data:{
            ...this.state.data,
            braces:false
          }
        })
      }else{
        this.toggle();
      }
    }
    else if(this.state.data.gender === 'female'){
      this.setState({
        visible:{
          ...this.state.visible,
          gender:false,
          braces:true
        },
        data:{
          ...this.state.data,
          braces:false
        }
      })
    }
    else if(this.state.data.age !== 1){
      this.setState({
        visible:{
          ...this.state.visible,
          age:false,
          gender:true
        },
        data:{
          ...this.state.data,
          gender:'male'
        }
      })
    }else{
      message.warning('Please Consult The Doctor')
    } 

  }

  toggle(){
    this.setState({
      modal:!this.state.modal
    })
  }

  handleFormDataChange(e){
      this.setState({
        data:{
          ...this.state.data,
          [e.target.name]: e.target.value
        }
      });
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>Extraction App</h3>
        </div>
        {this.state.visible.age ? <Card
          content={
            <AgeForm 
              data={this.state.data}
              handleDataChange={this.handleFormDataChange.bind(this)}
              handleNext={this.handleNext.bind(this)}
            />
          }
        /> : null}

        {this.state.visible.gender ? <Card
          content={
            <GenderForm 
              data={this.state.data}
              handleDataChange={this.handleFormDataChange.bind(this)}
              handleNext={this.handleNext.bind(this)}
              modal={this.state.modal}
              toggle={this.toggle.bind(this)}
            />
          }
        /> : null}

        {this.state.visible.braces ? <Card
          content={
            <BracesForm 
              data={this.state.data}
              handleDataChange={this.handleFormDataChange.bind(this)}
              handleNext={this.handleNext.bind(this)}
            />
          }
        /> : null}

         {this.state.visible.extractBool ? <Card
          content={
            <ExtractBool 
              data={this.state.data}
              handleDataChange={this.handleFormDataChange.bind(this)}
              handleNext={this.handleNext.bind(this)}
            />
          }
        /> : null}

        {this.state.visible.angle ? <Card
          content={
            <AngleForm 
              data={this.state.data}
              handleDataChange={this.handleFormDataChange.bind(this)}
              handleNext={this.handleNext.bind(this)}
            />
          }
        /> : null}

        {this.state.visible.crowding ? <Card
          content={
            <Crowding 
              data={this.state.data}
              handleDataChange={this.handleFormDataChange.bind(this)}
              handleNext={this.handleNext.bind(this)}
            />
          }
        /> : null}

        {this.state.visible.procline ? <Card
          content={
            <Procline 
              data={this.state.data}
              handleDataChange={this.handleFormDataChange.bind(this)}
              handleNext={this.handleNext.bind(this)}
            />
          }
        /> : null}

        {this.state.visible.overjet ? <Card
          content={
            <Overjet 
              data={this.state.data}
              handleDataChange={this.handleFormDataChange.bind(this)}
              handleNext={this.handleNext.bind(this)}
            />
          }
        /> : null}

        {this.state.visible.shift ? <Card
          content={
            <Shift 
              data={this.state.data}
              handleDataChange={this.handleFormDataChange.bind(this)}
              handleNext={this.handleNext.bind(this)}
            />
          }
        /> : null}

        {this.state.visible.numberOfTeeths ? <Card
          content={
            <NumberOfTeeths 
              data={this.state.data}
              handleDataChange={this.handleFormDataChange.bind(this)}
              handleNext={this.handleNext.bind(this)}
            />
          }
        /> : null}

      </div>
    );
  }
}

export default App;
