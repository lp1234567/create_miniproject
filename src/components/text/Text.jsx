import React, { Component } from 'react'
import middleware from "@/components/index";

class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  
  render() {
    console.log(this);
    let {text} = this.props
    return (
      <div>
        <p>{text?text:'hello'}</p>
      </div>
    )
  }
}
export default middleware(Text)