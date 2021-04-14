import React, {Component} from 'react'
import InputField from '../InputField/InputField'
import Linethrough from '../linethrough/linethrough.js'

class ToDoDomain extends Component{
    constructor(props){
        super(props)
        this.state = {list: []}
        
    }

  addList = () => { 
    const el = document.getElementById('ToDo')
    const newList = this.state.list
    newList.push(el.value);
    this.setState({list: newList});
  }

  render() {
    return (
      <div>
        <InputField />
        <button id="Save-button" onClick={this.addList}>Save</button>
        
        {this.state.list.map((item, index) => {
          return(
          <div>
          < Linethrough /><label id="text-0" key={index}>{item}</label>
          </div>
          )
          })}
      </div>
    );
  }

}

export default ToDoDomain