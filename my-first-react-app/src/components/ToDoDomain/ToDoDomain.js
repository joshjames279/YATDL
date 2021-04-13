import React, {Component} from 'react'
import InputField from '../InputField/InputField'
import SubmitButton from '../Submit/submit'

class ToDoDomain extends Component{
    constructor(props){
        super(props)
        this.state = {list: ['a','b']}
        
    }

  addList = () => {
    console.log(this.state)
    var list = this.state;
    
    list.push(this.newText.value);
    
    this.setState({list});
  }

  render() {
  
    return (
      <div>
        <InputField ref={(ip) => {this.newText = ip}} key={this.newText}/>
        <SubmitButton onSubmit={this.addList} key={this.newText}/>
        <ul>
        {this.state.list.map((item, index) => {
          return(
          <div>
          <input type="checkbox" /><label key={index}>{item}</label>
          </div>
          )
          })}
        </ul>
      </div>
    );
  }

}

export default ToDoDomain