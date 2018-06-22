import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Output  from "./components/output"
import Select from './components/controls/select';
import Text from './components/controls/text';


class App extends Component {

    constructor(props){
        super();
        this.state={
            para:4,
            format:'html',
            text:''
        }
    }
    componentWillMount(){
        this.getSampleText();
    }

    getSampleText(){
        axios.get('https://baconipsum.com/api/?type=all-meat&paras='+this.state.para+'&start-with-lorem=1&format='+this.state.format)
            .then((response) => {
             this.setState({
                 text:response.data
             })
            })
            .then(()=>console.log(this.state))
            .catch((e)=>{
            console.log(e);
        });
    }
    showHtml (data){
        this.setState(
            {format:data},
            this.getSampleText
        )};
    showPara (data){
        this.setState(
            {para:data},
            this.getSampleText
        )};

  render() {
    return (
      <div className="App">
          <h1>ReactJs Sample text Generator</h1>
          <hr/>
          <form className="form-inline">
              <div className="form-group">
                  <label>Number of para : </label>
                  <br/>
                  <Text onChange={this.showPara.bind(this)} value={this.state.para}/>
              </div>
              <div className="form-group">
                  <label>Select text Type : </label>
                  <br/>
                  <Select onChange={this.showHtml.bind(this)} value={this.state.html}/>
              </div>
          </form>
          <hr/>
          <Output value={this.state.text}/>
      </div>
    );
  }
}

export default App;
