import React,{Component} from 'react';

class Select extends Component{
    constructor(props){
        super();
        this.state={
            value:props.value
        }
    }

    onChange(e){
      this.setState(
          {value:e.target.value},
          function(){
              this.props.onChange(this.state.value);
          })
    };

    render(){
        return(
            <div className="select">
                <select onChange={this.onChange.bind(this)} className="form-control">
                    <option value="html">html</option>
                    <option value="">Normal</option>
                </select>
            </div>
        );
    }
}

export default Select;
