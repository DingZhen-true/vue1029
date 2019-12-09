import React, { Component } from 'react';
import './App.css';
import Apps from "./Apps"
import Input from "./Input"
import Cons from "./Cons"
import PropTypes from "prop-types"

class App extends Component {

  constructor(props) {
    console.log("app constructor")
    super(props)
    this.state = {
      aaa: false,
      appcolor: "",
      themecolor:"black"
    }
  }
  static childContextTypes = {
    themecolor : PropTypes.string,
    setThemecolor : PropTypes.func
  }
  getChildContext(){
    return {
      themecolor : this.state.themecolor,
      setThemecolor : (color)=>this.setThemecolor(color)
    }
  }
  setThemecolor(color){
    this.setState({
      themecolor:color
    })
  }
  componentDidMount() {
    console.log("组件加载完成")
    console.log(this.state)
  }
  componentWillMount() {
    console.log("组件将要加载")
    console.log(this.state)
  }
  shouldComponentUpdate() {
    console.log("是否更新")
    return true
  }
  componentWillUpdate() {
    console.log("主动更新")
  }
  componentDidUpdate() {
    console.log("主动更新完毕")
  }
  componentWillUnmount() {
    console.log("卸载")
  }
  aaac() {
    this.setState({
      aaa: !this.state.aaa
    })
  }

  setColor(color) {
    this.setState({
      //aaa: !this.state.aaa,
      appcolor: color
    })
  }

  render() {
    console.log("render")
    return (
      <div className="App">
        {this.state.aaa ? <Apps name={this.state.appcolor} setColor={(color) => { this.setColor(color) }} default={"hhh"}>
        </Apps> : "APPS不存在"}
        <Input name={this.state.appcolor}></Input>
        <p style={{ color: this.state.appcolor }}>app的颜色</p>
        <button onClick={() => this.aaac()} style={this.state.aaa ? { color: "red" } : { color: "black" }}>
          {this.state.aaa ? "取消" : "点赞"}
        </button>
        <Cons></Cons>
      </div>
    );
  }

}

export default App;