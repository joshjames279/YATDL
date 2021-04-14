import React, {Component} from 'react'

class linethrough extends Component{
    constructor(props){
        super(props)
        this.state = {
            checked: false,
            textDecoration: ''
        }
    }


handleclick =() => {
    if (this.state.checked){
        this.setState({checked: false, textDecoration: ''})
    }else{
        this.setState({checked: true, textDecoration: 'Line-through'})
    }
  }

  render(){
      return(
          <div>
            <input id={`#list-${this.props.id}-checkbox`} type="checkbox" onClick = {this.handleclick} />
            <span id={`#list-${this.props.id}-text`} style ={{textDecoration: this.state.textDecoration}}>{this.props.text} </span>
          
          </div>
      )
  }
}
export default linethrough