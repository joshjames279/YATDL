import React, {Component} from 'react'
import InputField from '../InputField/InputField'
import Linethrough from '../linethrough/linethrough.js'

class ToDoDomain extends Component{
    constructor(props){
        super(props)
        this.state = {list: []}
        
    }

  addList = () => { 
    let el = document.getElementById('ToDo')
    const newList = this.state.list
    newList.push(el.value);
    this.setState({list: newList});
  }

  clear = () => {
    this.setState({list : []})
  }

  render() {
    return (
      <div>
        <InputField />
        <button id="Save-button" onClick={this.addList}>Save</button>
        <div><a id="Clear-button" onClick={this.clear} href="c">Clear</a></div>
        
        {this.state.list.map((item, index) => {
          return(
          <div>
          < Linethrough id={index} key={index} text={item}>{item}</ Linethrough>
          </div>
          )
          })}
      </div>
    );
  }

}

export default ToDoDomain