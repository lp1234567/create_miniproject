import React, { Component } from 'react'
import { Icon } from 'antd'
import { connect } from 'react-redux'
import { del } from '@/reducers/phoneEle.js'
console.log(del)
const componentWrapper = WrappedComponent => {
  class HOC extends Component {
    constructor(props) {
      super(props)
      this.state = {
        showOperat: false
      }
    }

    componentDidMount() {}

    handleMouseOver(e) {
      console.log('handleMouseOver')
      this.setState({
        showOperat: true
      })
    }

    handleMouseLeave(e) {
      console.log('handleMouseLeave')
      this.setState({
        showOperat: false
      })
    }

    handleClick(e) {
      console.log(this)
      console.log();
      this.props.del(this.props.index)
    }

    render() {
      return (
        <div
          style={{ position: 'relative' }}
          onMouseOver={this.handleMouseOver.bind(this)}
          onMouseLeave={this.handleMouseLeave.bind(this)}
        >
          {this.state.showOperat && (
            <div
              className="posa full-box"
            >
              <Icon
                className="del"
                type="close"
                onClick={this.handleClick.bind(this)}
              />
            </div>
          )}
          <WrappedComponent ref="WrappedComponent" text={this.props.index} {...this.props} />
        </div>
      )
    }
  }
  const mapStateToProps = state => {
    return state
  }

  const mapDispatchToProps = dispatch => {
    return {
      del: (index) => dispatch(del(index))
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(HOC)
}
export default componentWrapper
