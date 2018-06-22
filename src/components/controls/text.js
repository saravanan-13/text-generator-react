import React,{Component} from 'react';

class Text extends Component{
    constructor(props){
        super();
        this.state = {
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
            <div className="form-control">
                <input type="text" onChange={this.onChange.bind(this)} value={this.props.value}/>
            </div>
        );
    }
}

export default Text;
