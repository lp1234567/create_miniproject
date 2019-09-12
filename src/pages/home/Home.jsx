import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import { connect } from 'react-redux'
import store from '@/reducers/index'
import {add} from '@/reducers/phoneEle.js'
import Text from "@/components/text/Text";
import $ from 'jquery'
import './home.less'

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      startx: 0,
      starty: 0,
      movex: 0,
      movey: 0,
      mousex: 0,
      mousey: 0,
      phoneEle: this.props.phoneEle
    }
    store.subscribe(()=>{
      console.log('chenge phoneEle');
    })
    console.log(this);
  }
  elList = [
    {
      name: 'text',
      render: index => {
        return (
          <div
            key={index}
            className="text grab"
            onMouseDown={this.handleMouseDown.bind(this, index)}
          >
            123
          </div>
        )
      },
      renderDom(index) {
        return <Text key={`${this.name}-${index}`} index={index} />
      }
    },
    {
      name: 'button',
      render: index => {
        return (
          <div
            key={index}
            className="text grab"
            onMouseDown={this.handleMouseDown.bind(this, index)}
          >
            button
          </div>
        )
      },
      renderDom(index) {
        console.log(this);
        return <button key={`${this.name}-${index}`} index={index} >我加了一个按钮</button>
      }
    }
  ] // 保存现有的元素类型


  componentDidMount() {
    console.log(this);
    this.phone = $('#phone')
    this.body = $('body')

    this.rl = this.phone.offset().left
    this.rt = this.phone.offset().top
  }

  handleMouseDown(index, e) {
    let { movex, movey, startx, starty, mousex, mousey } = this.state
    let that = this
    // 克隆一份dom
    this.elClone = $(e.currentTarget).clone()
    // 记录元素位置
    startx = $(e.currentTarget).offset().left
    starty = $(e.currentTarget).offset().top
    this.elClone.offset({
      left: startx,
      top: starty
    })
    // 改变鼠标样式
    this.elClone.addClass('grabbing')
    this.elClone.addClass('posa')
    // 放入页面
    this.elClone.appendTo('body')
    // 记录元素位置
    // startx = this.elClone.offset().left
    // starty = this.elClone.offset().top
    // 记录鼠标位置
    mousex = e.clientX
    mousey = e.clientY
    // 给body注册鼠标移动事件
    this.body.on('mousemove', function(e) {
      movex = e.clientX - mousex
      movey = e.clientY - mousey
      var cl = startx + movex
      var ct = starty + movey
      that.elClone.css({ left: `${cl}px`, top: `${ct}px` })
    })
    this.body.on('mouseup', this.handleMouseUp.bind(this, index))
  }

  handleMouseUp(index, e) {
    console.log('执行了一次')
    var el = e.clientX
    var et = e.clientY
    if (
      el < this.rl + this.phone.width() &&
      el > this.rl &&
      et < this.rt + this.phone.height() &&
      et > this.rt
    ) {
      this.props.add(this.elList[index])
      // this.setState({
      //   phoneEle: [...this.props.phoneEle, this.elList[index].renderDom()]
      // })
    }

    this.body.off('mousemove')
    this.elClone.remove()
    this.body.off('mouseup')
  }

  render() {
    console.log('重新渲染', this.state.phoneEle.length);
    return (
      <div className="home">
        <header className="header"></header>
        <aside className="aside">
          {this.elList.map((item, index) => item.render(index))}
        </aside>
        <main className="main">
          <div id="phone" className="phone">
            {this.props.phoneEle&&this.props.phoneEle.map((item,index) => item.renderDom(index))}
          </div>
        </main>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    add: (dom) => dispatch(add(dom)),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
