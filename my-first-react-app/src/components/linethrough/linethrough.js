import React, {Component} from 'react'

class linethrough extends Component{
    constructor(props){
        super(props)
        this.state = {
            checked: false,
            textDecoration: '',
            
        }
    }


handleclick =() => {
    if (this.state.checked){
        this.setState({checked: false, textDecoration: ''})
    }else{
        this.setState({checked: true, textDecoration: 'line-through'})
    }
  }

  render(){
      return(
          <div>
            <input id={`item-${this.props.id}-checkbox`} type="checkbox" onClick = {this.handleclick} />
            <span id={`item-${this.props.id}-text`} style ={{textDecoration: this.state.textDecoration}}>{this.props.text} </span>
          
          </div>
      )
  }
}
export default linethrough